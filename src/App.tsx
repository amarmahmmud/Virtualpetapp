import { useState, useEffect } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { ManagerDashboard } from "./components/manager/Dashboard";
import { MenuManagement } from "./components/manager/MenuManagement";
import { InventoryManagement } from "./components/manager/InventoryManagement";
import { StaffManagement } from "./components/manager/StaffManagement";
import { ManagerHistory } from "./components/manager/ManagerHistory";
import { Tables } from "./components/waiter/Tables";
import { NewOrder } from "./components/waiter/NewOrder";
import { MyOrders } from "./components/waiter/MyOrders";
import { ReadyOrders } from "./components/waiter/ReadyOrders";
import { WaiterHistory } from "./components/waiter/WaiterHistory";
import { PendingConfirmation } from "./components/cashier/PendingConfirmation";
import { CashierHistory } from "./components/cashier/CashierHistory";
import { ButcherWorkstation } from "./components/butcher/ButcherWorkstation";
import { KitchenWorkstation } from "./components/kitchen/KitchenWorkstation";
import { BarWorkstation } from "./components/bar/BarWorkstation";
import { LayoutDashboard, UtensilsCrossed, Package, Users, History, Table2, ShoppingBag, DollarSign, LogOut, RefreshCcw } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db, storage } from "./firebase";
import { doc, getDoc, getDocFromCache, collection, addDoc, getDocs, updateDoc, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { logActivity } from "./utils/activityLogger";

// Notification system for low stock alerts
const requestNotificationPermission = async () => {
  if ('Notification' in window && Notification.permission === 'default') {
    await Notification.requestPermission();
  }
};

const showNotification = (title: string, body: string) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body, icon: '/icons/icon-192.png' });
  }
};

// Initialize notification permission on app start
requestNotificationPermission();

type Role = "manager" | "waiter" | "cashier" | "butcher" | "kitchen" | "bar" | null;

interface CartItem {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
  requiresButcher?: boolean;
  butcherReady?: boolean;
}

interface Order {
  id: string;
  orderNumber?: number;
  tableNumber: number;
  status: "pending" | "in-kitchen" | "at-bar" | "ready" | "paid" | "confirmed" | "picked";
  items: { name: string; quantity: number; price: number; requiresButcher?: boolean; butcherReady?: boolean; requiresBar?: boolean; barReady?: boolean }[];
  timeElapsed: string;
  createdAt: Date;
  paymentMethod?: "cash" | "mobile";
  waiterName?: string;
  paymentImageUrl?: string;
  paymentImageName?: string;
  paymentSubmittedAt?: Date;
  paymentStatus?: "pending_approval" | "approved" | "rejected";
}

interface PendingOrder {
  id: string;
  tableNumber: number;
  totalAmount: number;
  paymentMethod: "cash" | "mobile";
}

export default function App() {
  const [currentRole, setCurrentRole] = useState<Role>(null);
  const [userStatus, setUserStatus] = useState<'pending' | 'approved' | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [currentScreen, setCurrentScreen] = useState("default");
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [tables, setTables] = useState<{ number: number; status: "available" | "occupied" }[]>([]);
  const [inventoryItems, setInventoryItems] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<{ id: string; type: 'low_stock'; title: string; message: string; timestamp: Date }[]>([]);
  const [authInitializing, setAuthInitializing] = useState(true);

  // Derive pending orders from orders with status "paid"
  const pendingOrders = orders
    .filter(order => order.status === "paid")
    .map(order => ({
      id: order.id,
      tableNumber: order.tableNumber,
      totalAmount: order.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      paymentMethod: order.paymentMethod || "cash",
    }));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const staffRef = doc(db, 'staff', user.email!);
          // Try server first (will use cache if available when offline)
          let staffDocSnap = await getDoc(staffRef);
          // If not found (or offline without cached server attempt), fallback to explicit cache
          if (!staffDocSnap.exists()) {
            try {
              staffDocSnap = await getDocFromCache(staffRef);
            } catch {
              // ignore cache miss
            }
          }

          if (staffDocSnap && staffDocSnap.exists()) {
            const data: any = staffDocSnap.data();
            const userData = {
              uid: user.uid,
              email: user.email,
              name: data.name || user.displayName || user.email?.split('@')[0] || 'Unknown',
              role: data.role,
              status: data.status
            };
            setCurrentUser(userData);
            // Persist last-known staff profile for offline restore
            try {
              localStorage.setItem(
                'vrm_staff_' + user.email,
                JSON.stringify({ role: data.role, status: data.status, name: userData.name })
              );
            } catch {}

            if (data && data.status === 'approved' && data.role) {
              setCurrentRole(data.role.toLowerCase() as Role);
              setUserStatus('approved');
            } else if (data && data.status === 'pending') {
              setUserStatus('pending');
              setCurrentRole(null);
            } else if (data && data.role) {
              // Existing users without status are approved
              setCurrentRole(data.role.toLowerCase() as Role);
              setUserStatus('approved');
            } else {
              // No fields; fallback to cached last-known if any
              const cached = localStorage.getItem('vrm_staff_' + user.email);
              if (cached) {
                const c = JSON.parse(cached);
                setCurrentRole(c.role?.toLowerCase() as Role ?? null);
                setUserStatus(c.status ?? null);
              } else {
                setCurrentRole(null);
              }
            }
          } else {
            // No doc from server/cache; fallback to last-known staff for offline continuity
            const cached = localStorage.getItem('vrm_staff_' + user.email);
            if (cached) {
              const c = JSON.parse(cached);
              setCurrentUser({
                uid: user.uid,
                email: user.email,
                name: c.name || user.displayName || user.email?.split('@')[0] || 'Unknown',
                role: c.role,
                status: c.status
              });
              setCurrentRole(c.role?.toLowerCase() as Role ?? null);
              setUserStatus(c.status ?? null);
            } else {
              setCurrentRole(null);
            }
          }
        } catch (error) {
          console.error('Error fetching staff data:', error);
          // Use last-known cached role/status while offline
          const cached = localStorage.getItem('vrm_staff_' + user.email);
          if (cached) {
            const c = JSON.parse(cached);
            setCurrentRole(c.role?.toLowerCase() as Role ?? null);
            setUserStatus(c.status ?? null);
          } else {
            setCurrentRole(null);
          }
        }
      } else {
        setCurrentRole(null);
        setUserStatus(null);
        setCurrentUser(null);
      }
      setAuthInitializing(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch orders from Firebase
  useEffect(() => {
    const ordersQuery = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(ordersQuery, async (snapshot) => {
      let ordersData: Order[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        ordersData.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
        } as Order);
      });

      // Update orders without orderNumber (migration for existing orders)
      const ordersToUpdate = ordersData.filter(order => !order.orderNumber);

      if (ordersToUpdate.length > 0) {
        // Group by date and assign sequential numbers
        const ordersByDate: { [date: string]: Order[] } = {};
        ordersToUpdate.forEach(order => {
          const date = new Date(order.createdAt.getFullYear(), order.createdAt.getMonth(), order.createdAt.getDate());
          const dateKey = date.toISOString().split('T')[0];
          if (!ordersByDate[dateKey]) ordersByDate[dateKey] = [];
          ordersByDate[dateKey].push(order);
        });

        // Update local state immediately with assigned numbers
        const updatedOrdersData = [...ordersData];

        for (const [date, dateOrders] of Object.entries(ordersByDate)) {
          // Sort by creation time
          dateOrders.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

          // Get existing order numbers for this date
          const existingOrders = ordersData.filter(order => {
            if (!order.orderNumber) return false;
            const orderDate = new Date(order.createdAt.getFullYear(), order.createdAt.getMonth(), order.createdAt.getDate());
            const orderDateKey = orderDate.toISOString().split('T')[0];
            return orderDateKey === date;
          });
          const existingNumbers = existingOrders.map(o => o.orderNumber!).sort((a, b) => a - b);

          let nextNumber = 1;
          for (const order of dateOrders) {
            // Find next available number
            while (existingNumbers.includes(nextNumber)) {
              nextNumber++;
            }

            // Update local state immediately
            const orderIndex = updatedOrdersData.findIndex(o => o.id === order.id);
            if (orderIndex !== -1) {
              updatedOrdersData[orderIndex] = { ...updatedOrdersData[orderIndex], orderNumber: nextNumber };
            }

            // Update Firestore
            try {
              await updateDoc(doc(db, 'orders', order.id), {
                orderNumber: nextNumber
              });
              existingNumbers.push(nextNumber);
            } catch (error) {
              console.error('Error updating order number:', error);
            }
            nextNumber++;
          }
        }

        ordersData = updatedOrdersData;
      }

      setOrders(ordersData);
    });

    return () => unsubscribe();
  }, []);

  // Load tables from Firestore
  useEffect(() => {
    const loadTables = async () => {
      try {
        const tablesSnapshot = await getDocs(collection(db, 'tables'));
        const tablesData: { number: number; status: "available" | "occupied" }[] = [];

        tablesSnapshot.forEach((doc) => {
          const data = doc.data();
          tablesData.push({
            number: data.number,
            status: data.status || "available"
          });
        });

        // If no tables in Firestore, create default tables
        if (tablesData.length === 0) {
          const defaultTables = [
            { number: 1, status: "available" as const },
            { number: 2, status: "available" as const },
            { number: 3, status: "available" as const },
            { number: 4, status: "available" as const },
            { number: 5, status: "available" as const },
            { number: 6, status: "available" as const },
            { number: 7, status: "available" as const },
            { number: 8, status: "available" as const },
            { number: 9, status: "available" as const },
            { number: 10, status: "available" as const },
          ];

          // Save default tables to Firestore
          for (const table of defaultTables) {
            await addDoc(collection(db, 'tables'), table);
          }

          setTables(defaultTables);
        } else {
          setTables(tablesData);
        }
      } catch (error) {
        console.error('Error loading tables:', error);
        // Fallback to default tables
        setTables([
          { number: 1, status: "available" },
          { number: 2, status: "available" },
          { number: 3, status: "available" },
          { number: 4, status: "available" },
          { number: 5, status: "available" },
          { number: 6, status: "available" },
          { number: 7, status: "available" },
          { number: 8, status: "available" },
          { number: 9, status: "available" },
          { number: 10, status: "available" },
        ]);
      }
    };

    loadTables();
  }, []);

  // Fetch inventory and check for low stock alerts
  useEffect(() => {
    const inventoryQuery = query(collection(db, 'inventory'));
    const unsubscribe = onSnapshot(inventoryQuery, (snapshot) => {
      const inventoryData: any[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        inventoryData.push({
          id: doc.id,
          name: data.name,
          quantity: data.quantity || 0,
          threshold: data.threshold || 10,
          unit: data.unit || 'pieces',
        });
      });
      setInventoryItems(inventoryData);

      // Check for low stock items and create notifications
      const lowStockItems = inventoryData.filter(item => item.quantity <= item.threshold);
      const newNotifications = lowStockItems.map(item => ({
        id: `low_stock_${item.id}`,
        type: 'low_stock' as const,
        title: 'Low Stock Alert',
        message: `${item.name}: Only ${item.quantity} ${item.unit} remaining (threshold: ${item.threshold})`,
        timestamp: new Date(),
      }));

      // Only show notifications for items that weren't already alerted
      const existingNotificationIds = notifications.map(n => n.id);
      const newAlerts = newNotifications.filter(n => !existingNotificationIds.includes(n.id));

      if (newAlerts.length > 0 && currentRole === 'manager') {
        newAlerts.forEach(alert => {
          showNotification(alert.title, alert.message);
        });
        setNotifications(prev => [...prev, ...newAlerts]);
      }
    });

    return () => unsubscribe();
  }, [currentRole, notifications]);

  // Update table status based on active orders
  useEffect(() => {
    if (tables.length > 0) {
      const activeOrderTableNumbers = orders
        // Consider only truly active orders. Free tables for paid/cancelled/confirmed.
        .filter(order => ["pending", "in-kitchen", "at-bar", "ready", "picked"].includes(order.status))
        .map(order => order.tableNumber);

      const updatedTables = tables.map(table => {
        const newStatus = activeOrderTableNumbers.includes(table.number) ? "occupied" : "available";
        // Only update if status changed
        if (table.status !== newStatus) {
          // Update Firestore asynchronously
          updateTableStatusInFirestore(table.number, newStatus);
        }
        return {
          ...table,
          status: newStatus as "available" | "occupied"
        };
      });

      setTables(updatedTables);
    }
  }, [orders, tables.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) => ({
          ...order,
          timeElapsed: `${Math.floor((Date.now() - order.createdAt.getTime()) / 60000)}m`,
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setCurrentRole(null);
    setCurrentScreen("default");
  };

  const updateTableStatusInFirestore = async (tableNumber: number, status: "available" | "occupied") => {
    try {
      const tablesQuery = query(collection(db, 'tables'), where('number', '==', tableNumber));
      const tablesSnapshot = await getDocs(tablesQuery);

      if (!tablesSnapshot.empty) {
        const tableDoc = tablesSnapshot.docs[0];
        await updateDoc(tableDoc.ref, { status });
      }
    } catch (error) {
      console.error('Error updating table status in Firestore:', error);
    }
  };

  const checkInventoryAvailability = async (items: CartItem[]) => {
    // Fetch menu items to get inventory requirements
    const menuQuery = query(collection(db, 'menu'));
    const menuSnapshot = await getDocs(menuQuery);
    const menuItems: any[] = [];
    menuSnapshot.forEach(doc => {
      const data = doc.data();
      menuItems.push({ id: doc.id, ...data });
    });

    // Fetch current inventory levels
    const inventoryQuery = query(collection(db, 'inventory'));
    const inventorySnapshot = await getDocs(inventoryQuery);
    const inventoryLevels: { [key: string]: number } = {};
    inventorySnapshot.forEach(doc => {
      const data = doc.data();
      inventoryLevels[doc.id] = data.quantity || 0;
    });

    // Check availability for each cart item
    const unavailableItems: string[] = [];
    const inventoryDeductions: { [inventoryId: string]: number } = {};

    for (const item of items) {
      const menuItem = menuItems.find(menu => menu.name === item.name);
      if (menuItem && menuItem.inventoryRequirements) {
        for (const req of menuItem.inventoryRequirements) {
          const requiredQuantity = req.quantity * item.quantity;
          const availableQuantity = inventoryLevels[req.inventoryId] || 0;

          if (availableQuantity < requiredQuantity) {
            unavailableItems.push(`${item.name} (insufficient ${req.inventoryName})`);
          } else {
            // Accumulate deductions
            inventoryDeductions[req.inventoryId] = (inventoryDeductions[req.inventoryId] || 0) + requiredQuantity;
          }
        }
      }
    }

    return { unavailableItems, inventoryDeductions };
  };

  const deductInventory = async (inventoryDeductions: { [inventoryId: string]: number }, orderId: string) => {
    const deductionPromises = Object.entries(inventoryDeductions).map(async ([inventoryId, deduction]) => {
      const inventoryRef = doc(db, 'inventory', inventoryId);
      const inventoryDoc = await getDoc(inventoryRef);
      if (inventoryDoc.exists()) {
        const currentQuantity = inventoryDoc.data().quantity || 0;
        const newQuantity = Math.max(0, currentQuantity - deduction);

        await updateDoc(inventoryRef, {
          quantity: newQuantity,
          lastUpdated: new Date(),
        });

        // Log inventory transaction
        await addDoc(collection(db, 'inventory_transactions'), {
          inventoryId,
          inventoryName: inventoryDoc.data().name,
          type: 'deduction',
          quantity: deduction,
          previousQuantity: currentQuantity,
          newQuantity,
          orderId,
          timestamp: new Date(),
        });

        // Log activity
        await logActivity({
          role: 'System',
          description: `Inventory deducted: ${deduction} units from ${inventoryDoc.data().name}`,
          orderId,
        });
      }
    });

    await Promise.all(deductionPromises);
  };

  const restoreInventory = async (orderId: string) => {
    try {
      // Find all inventory transactions for this order
      const transactionsQuery = query(
        collection(db, 'inventory_transactions'),
        where('orderId', '==', orderId),
        where('type', '==', 'deduction')
      );
      const transactionsSnapshot = await getDocs(transactionsQuery);

      const restorationPromises = transactionsSnapshot.docs.map(async (transactionDoc) => {
        const transaction = transactionDoc.data();
        const inventoryRef = doc(db, 'inventory', transaction.inventoryId);
        const inventoryDoc = await getDoc(inventoryRef);

        if (inventoryDoc.exists()) {
          const currentQuantity = inventoryDoc.data().quantity || 0;
          const restoredQuantity = currentQuantity + transaction.quantity;

          await updateDoc(inventoryRef, {
            quantity: restoredQuantity,
            lastUpdated: new Date(),
          });

          // Log restoration transaction
          await addDoc(collection(db, 'inventory_transactions'), {
            inventoryId: transaction.inventoryId,
            inventoryName: transaction.inventoryName,
            type: 'restoration',
            quantity: transaction.quantity,
            previousQuantity: currentQuantity,
            newQuantity: restoredQuantity,
            orderId,
            timestamp: new Date(),
          });
        }
      });

      await Promise.all(restorationPromises);

      await logActivity({
        role: 'System',
        description: `Inventory restored for cancelled order`,
        orderId,
      });
    } catch (error) {
      console.error('Error restoring inventory:', error);
    }
  };

  const handleSubmitOrder = async (tableNumber: number, items: CartItem[]) => {
    try {
      // Check inventory availability
      const { unavailableItems, inventoryDeductions } = await checkInventoryAvailability(items);

      if (unavailableItems.length > 0) {
        alert(`Cannot place order. Unavailable items:\n${unavailableItems.join('\n')}`);
        return;
      }

      const orderItems = items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        requiresButcher: item.category === "Food-Butcher",
        butcherReady: item.category !== "Food-Butcher",
        requiresBar: item.category === "Drinks",
        barReady: item.category !== "Drinks",
      }));

      // Determine order status based on item types
      const hasBarItems = orderItems.some(item => item.requiresBar);
      const hasKitchenItems = orderItems.some(item => item.requiresButcher || (!item.requiresButcher && !item.requiresBar));

      let orderStatus: "in-kitchen" | "at-bar";
      if (hasBarItems && !hasKitchenItems) {
        // Order contains only bar items
        orderStatus = "at-bar";
      } else {
        // Order contains kitchen items (butcher or regular food) or mixed
        orderStatus = "in-kitchen";
      }

      // Generate sequential daily order number (resets daily)
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Start of today in local timezone
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000); // Start of tomorrow

      const todayOrdersQuery = query(
        collection(db, 'orders'),
        where('createdAt', '>=', today),
        where('createdAt', '<', tomorrow)
      );

      const todayOrdersSnapshot = await getDocs(todayOrdersQuery);
      const orderNumbers = todayOrdersSnapshot.docs
        .map(doc => doc.data().orderNumber || 0)
        .filter(num => num > 0);

      const nextOrderNumber = orderNumbers.length > 0 ? Math.max(...orderNumbers) + 1 : 1;
      console.log('Creating order with number:', nextOrderNumber, 'existing numbers:', orderNumbers);

      const waiterName = currentUser?.name || 'Unknown Waiter';

      const orderData = {
        orderNumber: nextOrderNumber,
        tableNumber,
        status: orderStatus,
        waiterId: auth.currentUser?.uid,
        waiterName: waiterName,
        items: orderItems,
        timeElapsed: "0m",
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, 'orders'), orderData);

      // Deduct inventory
      await deductInventory(inventoryDeductions, docRef.id);

      // Log activity
      await logActivity({
        role: 'Waiter',
        description: `Order #${nextOrderNumber} submitted for Table ${tableNumber} (${orderStatus === 'at-bar' ? 'Bar' : 'Kitchen'})`,
        orderId: docRef.id,
        tableNumber,
      });

      setSelectedTable(null);
      setCurrentScreen("my-orders");
      // Update table status
      const updatedTables = tables.map(table =>
        table.number === tableNumber ? { ...table, status: "occupied" as const } : table
      );
      setTables(updatedTables);

      // Update table status in Firestore
      updateTableStatusInFirestore(tableNumber, "occupied");
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order. Please try again.');
    }
  };

  const handleMarkAsPaid = async (orderId: string, paymentMethod: "cash" | "mobile") => {
    try {
      const order = orders.find((o) => o.id === orderId);

      await updateDoc(doc(db, 'orders', orderId), {
        status: "paid",
        paymentMethod,
      });

      // Log activity
      if (order) {
        await logActivity({
          role: 'Waiter',
          description: `Order marked as paid - ${paymentMethod}`,
          orderId,
          tableNumber: order.tableNumber,
        });

        // Free up the table immediately on payment
        const updatedTables = tables.map(table =>
          table.number === order.tableNumber ? { ...table, status: "available" as const } : table
        );
        setTables(updatedTables);
        updateTableStatusInFirestore(order.tableNumber, "available");
      }
    } catch (error) {
      console.error('Error marking order as paid:', error);
    }
  };

  const handleMobileBankingPayment = async (orderId: string, paymentImage: File) => {
    try {
      const order = orders.find((o) => o.id === orderId);
      if (!order) {
        alert('Order not found.');
        return;
      }

      // Validate file type and size
      if (!paymentImage.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
      }

      if (paymentImage.size > 10 * 1024 * 1024) { // 10MB limit
        alert('Image file is too large. Please select an image smaller than 10MB.');
        return;
      }

      // Sanitize filename - remove spaces and special characters
      const sanitizedFileName = paymentImage.name
        .replace(/[^a-zA-Z0-9.-]/g, '_') // Replace special chars with underscore
        .toLowerCase();

      // Create unique filename
      const timestamp = Date.now();
      const fileExtension = sanitizedFileName.split('.').pop() || 'jpg';
      const uniqueFileName = `${orderId}_${timestamp}_${sanitizedFileName}`;

      console.log('Uploading file:', uniqueFileName, 'Size:', paymentImage.size, 'Type:', paymentImage.type);

      // Upload image to Firebase Storage
      const imageRef = ref(storage, `payment-proofs/${uniqueFileName}`);
      const snapshot = await uploadBytes(imageRef, paymentImage);
      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log('Upload successful, download URL:', downloadURL);

      // Update order with payment details
      await updateDoc(doc(db, 'orders', orderId), {
        status: "paid",
        paymentMethod: "mobile",
        paymentImageUrl: downloadURL,
        paymentImageName: uniqueFileName,
        paymentSubmittedAt: new Date(),
        paymentStatus: "pending_approval", // New field for cashier approval
      });

      // Log activity
      await logActivity({
        role: 'Waiter',
        description: `Mobile banking payment submitted for approval`,
        orderId,
        tableNumber: order.tableNumber,
      });

      // Free up the table immediately on mobile payment submission
      const updatedTables = tables.map(table =>
        table.number === order.tableNumber ? { ...table, status: "available" as const } : table
      );
      setTables(updatedTables);
      updateTableStatusInFirestore(order.tableNumber, "available");

      alert('Payment proof submitted successfully! Waiting for cashier approval.');
    } catch (error: any) {
      console.error('Error processing mobile banking payment:', error);

      // Provide more specific error messages
      if (error.code === 'storage/unauthorized') {
        alert('Upload failed: You do not have permission to upload files. Please check your authentication.');
      } else if (error.code === 'storage/canceled') {
        alert('Upload was cancelled.');
      } else if (error.code === 'storage/quota-exceeded') {
        alert('Upload failed: Storage quota exceeded.');
      } else if (error.code === 'storage/invalid-format') {
        alert('Upload failed: Invalid file format.');
      } else {
        alert(`Failed to submit payment: ${error.message || 'Unknown error'}`);
      }
    }
  };

  const handleConfirmPayment = async (orderId: string) => {
    try {
      await updateDoc(doc(db, 'orders', orderId), {
        status: "confirmed",
      });

      // Log activity
      const confirmedOrder = orders.find(o => o.id === orderId);
      if (confirmedOrder) {
        const totalAmount = confirmedOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const itemCount = confirmedOrder.items.reduce((sum, item) => sum + item.quantity, 0);

        await logActivity({
          role: 'Cashier',
          description: `Payment confirmed - Order #${confirmedOrder.orderNumber || orderId}, Table ${confirmedOrder.tableNumber}, $${totalAmount.toFixed(2)} (${confirmedOrder.paymentMethod}), ${itemCount} items`,
          orderId,
          tableNumber: confirmedOrder.tableNumber,
        });
      }

      // Set table to available
      const order = orders.find(o => o.id === orderId);
      if (order) {
        const updatedTables = tables.map(table =>
          table.number === order.tableNumber ? { ...table, status: "available" as const } : table
        );
        setTables(updatedTables);

        // Update table status in Firestore
        updateTableStatusInFirestore(order.tableNumber, "available");
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
    }
  };

  const handleApproveMobilePayment = async (orderId: string) => {
    try {
      await updateDoc(doc(db, 'orders', orderId), {
        paymentStatus: "approved",
        status: "confirmed",
      });

      // Log activity
      const approvedOrder = orders.find(o => o.id === orderId);
      if (approvedOrder) {
        const totalAmount = approvedOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

        await logActivity({
          role: 'Cashier',
          description: `Mobile banking payment approved - Order #${approvedOrder.orderNumber || orderId}, Table ${approvedOrder.tableNumber}, $${totalAmount.toFixed(2)}`,
          orderId,
          tableNumber: approvedOrder.tableNumber,
        });
      }

      // Set table to available
      const order = orders.find(o => o.id === orderId);
      if (order) {
        const updatedTables = tables.map(table =>
          table.number === order.tableNumber ? { ...table, status: "available" as const } : table
        );
        setTables(updatedTables);

        // Update table status in Firestore
        updateTableStatusInFirestore(order.tableNumber, "available");
      }
    } catch (error) {
      console.error('Error approving mobile payment:', error);
    }
  };

  const handleRejectMobilePayment = async (orderId: string) => {
    try {
      await updateDoc(doc(db, 'orders', orderId), {
        paymentStatus: "rejected",
        status: "ready", // Send back to waiter
      });

      // Log activity
      const rejectedOrder = orders.find(o => o.id === orderId);
      if (rejectedOrder) {
        await logActivity({
          role: 'Cashier',
          description: `Mobile banking payment rejected - Order #${rejectedOrder.orderNumber || orderId}, Table ${rejectedOrder.tableNumber}`,
          orderId,
          tableNumber: rejectedOrder.tableNumber,
        });
      }
    } catch (error) {
      console.error('Error rejecting mobile payment:', error);
    }
  };

  const handlePickUp = async (orderId: string) => {
    try {
      await updateDoc(doc(db, 'orders', orderId), {
        status: "picked",
      });

      // Log activity
      const pickedOrder = orders.find(o => o.id === orderId);
      if (pickedOrder) {
        await logActivity({
          role: 'Waiter',
          description: `Order picked up from Table ${pickedOrder.tableNumber}`,
          orderId,
          tableNumber: pickedOrder.tableNumber,
        });
      }
    } catch (error) {
      console.error('Error picking up order:', error);
    }
  };

  const handleCancelOrder = async (orderId: string) => {
    try {
      const order = orders.find(o => o.id === orderId);
      if (!order) return;

      if (!confirm(`Are you sure you want to cancel order for Table ${order.tableNumber}?`)) {
        return;
      }

      // Restore inventory
      await restoreInventory(orderId);

      // Update order status
      await updateDoc(doc(db, 'orders', orderId), {
        status: "cancelled",
      });

      // Free up the table
      const updatedTables = tables.map(table =>
        table.number === order.tableNumber ? { ...table, status: "available" as const } : table
      );
      setTables(updatedTables);
      updateTableStatusInFirestore(order.tableNumber, "available");

      // Log activity
      await logActivity({
        role: 'Waiter',
        description: `Order cancelled for Table ${order.tableNumber}`,
        orderId,
        tableNumber: order.tableNumber,
      });

    } catch (error) {
      console.error('Error cancelling order:', error);
      alert('Failed to cancel order. Please try again.');
    }
  };

  const handleAddTable = async () => {
    const tableNumber = prompt("Enter table number:");
    if (tableNumber && !isNaN(Number(tableNumber))) {
      const num = Number(tableNumber);
      // Check if table number already exists
      const existingTable = tables.find(table => table.number === num);
      if (existingTable) {
        alert(`Table ${num} already exists.`);
        return;
      }

      try {
        // Add the new table to Firestore
        await addDoc(collection(db, 'tables'), {
          number: num,
          status: "available"
        });

        // Update local state
        setTables([...tables, { number: num, status: "available" }]);
        alert(`Table ${num} has been added successfully.`);
      } catch (error) {
        console.error('Error adding table:', error);
        alert('Failed to add table. Please try again.');
      }
    } else if (tableNumber) {
      alert("Please enter a valid number.");
    }
  };

  const handleDismissNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  // Floating refresh button to manually refresh without pull-to-refresh
  const RefreshFab = () => (
    <button
      onClick={() => window.location.reload()}
      aria-label="Refresh"
      className="fixed bottom-20 right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg"
      title="Refresh"
    >
      <RefreshCcw className="w-5 h-5" />
    </button>
  );

  if (authInitializing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <img src="/icons/icon-192.png" alt="VRM" width="72" height="72" />
          <div className="animate-spin h-6 w-6 rounded-full border-2 border-gray-300 border-t-blue-600" />
        </div>
      </div>
    );
  }

  if (userStatus === 'pending') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Account Pending Approval</h1>
          <p className="text-gray-600 mb-4">Your registration is being reviewed by a manager. Please wait for approval to access the system.</p>
          <button
            onClick={handleLogout}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  if (!currentRole) {
    return <LoginScreen />;
  }

  // Manager View
  if (currentRole === "manager") {
    return (
      <div className="min-h-screen bg-gray-50">
        <RefreshFab />
        {currentScreen === "default" && <ManagerDashboard notifications={notifications} onDismissNotification={handleDismissNotification} />}
        {currentScreen === "menu" && <MenuManagement />}
        {currentScreen === "inventory" && <InventoryManagement />}
        {currentScreen === "staff" && <StaffManagement />}
        {currentScreen === "history" && <ManagerHistory />}

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="flex justify-around">
            <button
              onClick={() => setCurrentScreen("default")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "default" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="mt-1">Dashboard</span>
            </button>
            <button
              onClick={() => setCurrentScreen("menu")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "menu" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span className="mt-1">Menu</span>
            </button>
            <button
              onClick={() => setCurrentScreen("inventory")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "inventory" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Package className="w-5 h-5" />
              <span className="mt-1">Inventory</span>
            </button>
            <button
              onClick={() => setCurrentScreen("staff")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "staff" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Users className="w-5 h-5" />
              <span className="mt-1">Staff</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 flex flex-col items-center py-3 text-gray-600"
            >
              <LogOut className="w-5 h-5" />
              <span className="mt-1">Logout</span>
            </button>
          </div>
        </nav>
      </div>
    );
  }

  // Waiter View
  if (currentRole === "waiter") {
    if (selectedTable !== null) {
      return (
        <NewOrder
          tableNumber={selectedTable}
          onBack={() => setSelectedTable(null)}
          onSubmitOrder={handleSubmitOrder}
          onLogout={handleLogout}
        />
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <RefreshFab />
        {currentScreen === "default" && (
          <Tables tables={tables} onSelectTable={setSelectedTable} onAddTable={handleAddTable} />
        )}
        {currentScreen === "ready-orders" && (
          <ReadyOrders
            orders={orders.filter(order => order.status === "ready")}
            onMarkAsPaid={handleMarkAsPaid}
            onMobileBankingPayment={handleMobileBankingPayment}
          />
        )}
        {currentScreen === "my-orders" && (
          <MyOrders orders={orders} onMarkAsPaid={handleMarkAsPaid} onPickUp={handlePickUp} onCancelOrder={handleCancelOrder} />
        )}
        {currentScreen === "history" && <WaiterHistory />}

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="flex justify-around">
            <button
              onClick={() => setCurrentScreen("default")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "default" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Table2 className="w-5 h-5" />
              <span className="mt-1">Tables</span>
            </button>
            <button
              onClick={() => setCurrentScreen("ready-orders")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "ready-orders" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="mt-1">Ready</span>
            </button>
            <button
              onClick={() => setCurrentScreen("my-orders")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "my-orders" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span className="mt-1">Orders</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 flex flex-col items-center py-3 text-gray-600"
            >
              <LogOut className="w-5 h-5" />
              <span className="mt-1">Logout</span>
            </button>
          </div>
        </nav>
      </div>
    );
  }

  // Cashier View
  if (currentRole === "cashier") {
    return (
      <div className="min-h-screen bg-gray-50">
        <RefreshFab />
        {currentScreen === "default" && (
          <PendingConfirmation
            orders={orders}
            onConfirmPayment={handleConfirmPayment}
            onApproveMobilePayment={handleApproveMobilePayment}
            onRejectMobilePayment={handleRejectMobilePayment}
          />
        )}
        {currentScreen === "history" && <CashierHistory />}

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="flex justify-around">
            <button
              onClick={() => setCurrentScreen("default")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "default" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <DollarSign className="w-5 h-5" />
              <span className="mt-1">Pending</span>
            </button>
            <button
              onClick={() => setCurrentScreen("history")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "history" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <History className="w-5 h-5" />
              <span className="mt-1">History</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 flex flex-col items-center py-3 text-gray-600"
            >
              <LogOut className="w-5 h-5" />
              <span className="mt-1">Logout</span>
            </button>
          </div>
        </nav>
      </div>
    );
  }

  // Butcher View
  if (currentRole === "butcher") {
    return (
      <>
        <ButcherWorkstation orders={orders} onLogout={handleLogout} />
        <RefreshFab />
      </>
    );
  }

  // Kitchen View
  if (currentRole === "kitchen") {
    return (
      <>
        <KitchenWorkstation orders={orders} onLogout={handleLogout} />
        <RefreshFab />
      </>
    );
  }

  // Bar View
  if (currentRole === "bar") {
    return (
      <>
        <BarWorkstation orders={orders} onLogout={handleLogout} />
        <RefreshFab />
      </>
    );
  }

  return null;
}

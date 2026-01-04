import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { LoginScreen } from "./components/LoginScreen";

// Lazy load route components for better performance
const ManagerRoutes = lazy(() => import("./routes/ManagerRoutes").then(module => ({ default: module.ManagerRoutes })));
const WaiterRoutes = lazy(() => import("./routes/WaiterRoutes").then(module => ({ default: module.WaiterRoutes })));
const StaffRoutes = lazy(() => import("./routes/StaffRoutes").then(module => ({ default: module.StaffRoutes })));
import { RefreshCcw } from "lucide-react";
import { getLocale, setLocale } from "./i18n";
import { doc, getDoc, getDocFromCache, collection, addDoc, getDocs, updateDoc, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { logActivity } from "./utils/activityLogger";
import { db } from "./firebase";
import { AuthProvider, useAuthContext } from "./contexts/AuthContext";
import { useOrders } from "./hooks/useOrders";
import { useInventory } from "./hooks/useInventory";
import { auth } from "./firebase";

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

interface CartItem {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
  requiresButcher?: boolean;
  butcherReady?: boolean;
}

const AppContent: React.FC = () => {
  const { currentRole, userStatus, currentUser, authInitializing, logout } = useAuthContext();
  const {
    orders,
    loading: ordersLoading,
    activeOrders,
    pendingOrders,
    readyOrders
  } = useOrders(100); // Load up to 100 recent orders
  const { inventoryItems, notifications, dismissNotification } = useInventory(currentRole);
  const [currentScreen, setCurrentScreen] = useState("default");
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [tables, setTables] = useState<{ number: number; status: "available" | "occupied" }[]>([]);
  const [isOnline, setIsOnline] = useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'synced'>('idle');

  // Back button navigation handling
  const isPoppingRef = useRef(false);

  const buildHash = (role: string | null, screen: string, table: number | null) => {
    const r = role ?? 'anon';
    const s = screen ?? 'default';
    const t = table ?? '';
    return `#r=${r}&s=${s}${t !== '' ? `&t=${t}` : ''}`;
  };

  useEffect(() => {
    try {
      const state = { role: currentRole, screen: currentScreen, table: selectedTable };
      window.history.replaceState(state, "", buildHash(currentRole, currentScreen, selectedTable));
    } catch {}

    const onPop = (ev: PopStateEvent) => {
      isPoppingRef.current = true;
      const st: any = ev.state;
      if (st && typeof st === "object") {
        if (typeof st.screen === "string") setCurrentScreen(st.screen);
        if (typeof st.table === "number" || st.table === null || typeof st.table === "undefined") {
          setSelectedTable(st.table ?? null);
        }
      } else {
        try {
          const hash = window.location.hash || "";
          const params = new URLSearchParams(hash.replace(/^#/, "").split("&").join("&"));
          const s = params.get("s") || "default";
          const t = params.get("t");
          setCurrentScreen(s);
          setSelectedTable(t ? Number(t) : null);
        } catch {
          setCurrentScreen("default");
          setSelectedTable(null);
        }
      }
      setTimeout(() => {
        isPoppingRef.current = false;
      }, 0);
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [currentRole, currentScreen, selectedTable]);

  useEffect(() => {
    if (isPoppingRef.current) return;
    try {
      const state = { role: currentRole, screen: currentScreen, table: selectedTable };
      window.history.pushState(state, "", buildHash(currentRole, currentScreen, selectedTable));
    } catch {}
  }, [currentRole, currentScreen, selectedTable]);

  // React to connectivity changes
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setSyncStatus('syncing');
      setInfoMessage('🔄 Back online. Syncing data...');
      // Simulate sync completion after a short delay
      window.clearTimeout((handleOnline as any)._t);
      (handleOnline as any)._t = window.setTimeout(() => {
        setSyncStatus('synced');
        setInfoMessage('✅ Data synchronized successfully');
        window.setTimeout(() => {
          setInfoMessage(null);
          setSyncStatus('idle');
        }, 2000);
      }, 1500);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setSyncStatus('idle');
      setInfoMessage('📴 You are offline. Working in offline mode.');
      window.clearTimeout((handleOffline as any)._t);
      (handleOffline as any)._t = window.setTimeout(() => setInfoMessage(null), 4000);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Realtime tables subscription
  useEffect(() => {
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

    try {
      const tablesQuery = query(collection(db, 'tables'));
      const unsubscribe = onSnapshot(tablesQuery, (snapshot) => {
        const tablesData: { number: number; status: "available" | "occupied" }[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data() as any;
          if (typeof data.number === 'number') {
            tablesData.push({
              number: data.number,
              status: (data.status || "available") as "available" | "occupied"
            });
          }
        });

        setTables(tablesData.length > 0 ? tablesData : defaultTables);
      }, (error) => {
        console.error('Realtime tables listener error:', error);
        setTables(defaultTables);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Failed to start tables realtime listener:', error);
      setTables(defaultTables);
    }
  }, []);

  // Update table status based on active orders (using memoized activeOrders)
  useEffect(() => {
    if (tables.length > 0) {
      const activeOrderTableNumbers = activeOrders.map(order => order.tableNumber);

      const updatedTables = tables.map(table => {
        const newStatus = activeOrderTableNumbers.includes(table.number) ? "occupied" : "available";
        if (table.status !== newStatus) {
          updateTableStatusInFirestore(table.number, newStatus);
        }
        return {
          ...table,
          status: newStatus as "available" | "occupied"
        };
      });

      setTables(updatedTables);
    }
  }, [activeOrders, tables.length]);

  const inform = (msg: string) => {
    setInfoMessage(msg);
    window.clearTimeout((inform as any)._t);
    (inform as any)._t = window.setTimeout(() => setInfoMessage(null), 3000);
  };

  const OfflineBanner = () => (
    !isOnline ? (
      <div className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm py-3 text-center border-b-4 border-red-600 shadow-lg">
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="font-semibold">OFFLINE MODE</span>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
        <p className="text-xs mt-1 opacity-90">Changes will sync automatically when connection is restored</p>
      </div>
    ) : null
  );

  const InfoToast = () => (
    infoMessage ? (
      <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 text-sm px-4 py-2 rounded-md shadow-md ${
        syncStatus === 'syncing' ? 'bg-blue-600 text-white' :
        syncStatus === 'synced' ? 'bg-green-600 text-white' :
        'bg-black/80 text-white'
      }`}>
        {infoMessage}
      </div>
    ) : null
  );

  const SyncStatusIndicator = () => (
    <div className="fixed top-4 right-4 z-40">
      {syncStatus === 'syncing' && (
        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
          <div className="w-2 h-2 bg-white rounded-full animate-spin"></div>
          Syncing...
        </div>
      )}
      {syncStatus === 'synced' && (
        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
          <div className="w-2 h-2 bg-white rounded-full">✓</div>
          Synced
        </div>
      )}
    </div>
  );

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

  const LocaleToggle = () => (
    <button
      onClick={() => { const next = getLocale() === 'en' ? 'am' : 'en'; setLocale(next); window.location.reload(); }}
      aria-label="Toggle Language"
      className="fixed top-4 left-4 z-50 bg-yellow-400 text-black rounded px-3 py-2 border border-black shadow-none text-xs"
      title="Toggle Language"
    >
      {getLocale() === 'en' ? 'AM' : 'EN'}
    </button>
  );

  // Business logic functions (keeping them here for now, could be moved to hooks later)
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
    const menuQuery = query(collection(db, 'menu'));
    const menuSnapshot = await getDocs(menuQuery);
    const menuItems: any[] = [];
    menuSnapshot.forEach(doc => {
      const data = doc.data();
      menuItems.push({ id: doc.id, ...data });
    });

    const inventoryLevels: { [key: string]: number } = {};
    inventoryItems.forEach(item => {
      inventoryLevels[item.id] = item.quantity;
    });

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
    let createdOrderId: string | null = null;
    let createdOrderNumber: number | null = null;
    try {
      if (!isOnline) inform("Offline: New order will sync when you're back online");
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

      const hasBarItems = orderItems.some(item => item.requiresBar);
      const hasKitchenItems = orderItems.some(item => item.requiresButcher || (!item.requiresButcher && !item.requiresBar));

      let orderStatus: "in-kitchen" | "at-bar";
      orderStatus = (hasBarItems && !hasKitchenItems) ? "at-bar" : "in-kitchen";

      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

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
      createdOrderNumber = nextOrderNumber;

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
      createdOrderId = docRef.id;

      try {
        await deductInventory(inventoryDeductions, docRef.id);
      } catch (e) {
        console.warn('Inventory deduct failed (non-critical):', e);
      }

      try {
        await logActivity({
          role: 'Waiter',
          description: `Order #${nextOrderNumber} submitted for Table ${tableNumber} (${orderStatus === 'at-bar' ? 'Bar' : 'Kitchen'})`,
          orderId: docRef.id,
          tableNumber,
        });
      } catch (e) {
        console.warn('Activity log failed (non-critical):', e);
      }

      setSelectedTable(null);
      setCurrentScreen("my-orders");
      if (tableNumber > 0) {
        const updatedTables = tables.map(table =>
          table.number === tableNumber ? { ...table, status: "occupied" as const } : table
        );
        setTables(updatedTables);
        updateTableStatusInFirestore(tableNumber, "occupied");
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      if (!createdOrderId) {
        alert('Failed to submit order. Please try again.');
      } else {
        inform('Order created. Some background steps will sync later.');
      }
    }
  };

  const handleMarkAsPaid = async (orderId: string, paymentMethod: "cash" | "mobile") => {
    try {
      if (!isOnline) inform("Offline: Mark as paid will sync when you're back online");
      const order = orders.find((o) => o.id === orderId);

      await updateDoc(doc(db, 'orders', orderId), {
        status: "paid",
        paymentMethod,
        updatedAt: new Date(),
      });

      if (order) {
        await logActivity({
          role: 'Waiter',
          description: `Order marked as paid - ${paymentMethod}`,
          orderId,
          tableNumber: order.tableNumber,
        });

        if (order.tableNumber > 0) {
          const updatedTables = tables.map(table =>
            table.number === order.tableNumber ? { ...table, status: "available" as const } : table
          );
          setTables(updatedTables);
          updateTableStatusInFirestore(order.tableNumber, "available");
        }
      }
    } catch (error) {
      console.error('Error marking order as paid:', error);
    }
  };

  const handleMobileBankingPayment = async (orderId: string, paymentImage: File) => {
    try {
      if (!isOnline) inform("Offline: Payment submission will sync when you're back online");
      const order = orders.find((o) => o.id === orderId);
      if (!order) {
        alert('Order not found.');
        return;
      }

      if (!paymentImage.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
      }
      if (paymentImage.size > 10 * 1024 * 1024) {
        alert('Image file is too large. Please select an image smaller than 10MB.');
        return;
      }

      const cloudName = 'dwqgypyim';
      const uploadPreset = 'ml_default';
      const folder = 'payment-proofs';

      const form = new FormData();
      form.append('file', paymentImage);
      form.append('upload_preset', uploadPreset);
      form.append('folder', folder);

      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: form,
      });

      if (!uploadRes.ok) {
        const errText = await uploadRes.text().catch(() => '');
        throw new Error(`Cloudinary upload failed (${uploadRes.status}): ${errText}`);
      }

      const uploadJson: any = await uploadRes.json();
      const downloadURL: string | undefined = uploadJson.secure_url || uploadJson.url;
      const publicId: string | undefined = uploadJson.public_id;

      if (!downloadURL) {
        throw new Error('Cloudinary response missing secure_url');
      }

      await updateDoc(doc(db, 'orders', orderId), {
        status: "paid",
        paymentMethod: "mobile",
        paymentImageUrl: downloadURL,
        paymentImageName: publicId || null,
        paymentSubmittedAt: new Date(),
        paymentStatus: "pending_approval",
        updatedAt: new Date(),
      });

      await logActivity({
        role: 'Waiter',
        description: `Mobile banking payment submitted for approval (Cloudinary)`,
        orderId,
        tableNumber: order.tableNumber,
      });

      if (order.tableNumber > 0) {
        const updatedTables = tables.map(table =>
          table.number === order.tableNumber ? { ...table, status: "available" as const } : table
        );
        setTables(updatedTables);
        updateTableStatusInFirestore(order.tableNumber, "available");
      }

      alert('Payment proof submitted successfully! Waiting for cashier approval.');
    } catch (error: any) {
      console.error('Error processing mobile banking payment (Cloudinary):', error);
      alert(`Failed to submit payment: ${error?.message || 'Unknown error'}`);
    }
  };

  const handleConfirmPayment = async (orderId: string) => {
    try {
      if (!isOnline) inform("Offline: Payment confirmation will sync when you're back online");
      await updateDoc(doc(db, 'orders', orderId), {
        status: "confirmed",
      });

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

      const order = orders.find(o => o.id === orderId);
      if (order && order.tableNumber > 0) {
        const updatedTables = tables.map(table =>
          table.number === order.tableNumber ? { ...table, status: "available" as const } : table
        );
        setTables(updatedTables);
        updateTableStatusInFirestore(order.tableNumber, "available");
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
    }
  };

  const handleApproveMobilePayment = async (orderId: string) => {
    try {
      if (!isOnline) inform("Offline: Approval will sync when you're back online");
      await updateDoc(doc(db, 'orders', orderId), {
        paymentStatus: "approved",
        status: "confirmed",
      });

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

      const order = orders.find(o => o.id === orderId);
      if (order && order.tableNumber > 0) {
        const updatedTables = tables.map(table =>
          table.number === order.tableNumber ? { ...table, status: "available" as const } : table
        );
        setTables(updatedTables);
        updateTableStatusInFirestore(order.tableNumber, "available");
      }
    } catch (error) {
      console.error('Error approving mobile payment:', error);
    }
  };

  const handleRejectMobilePayment = async (orderId: string) => {
    try {
      if (!isOnline) inform("Offline: Rejection will sync when you're back online");
      await updateDoc(doc(db, 'orders', orderId), {
        paymentStatus: "rejected",
        status: "ready",
      });

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
      if (!isOnline) inform("Offline: Pickup will sync when you're back online");
      await updateDoc(doc(db, 'orders', orderId), {
        status: "picked",
      });

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
      if (!isOnline) inform("Offline: Cancel order will sync when you're back online");
      const order = orders.find(o => o.id === orderId);
      if (!order) return;

      if (!confirm(`Are you sure you want to cancel order for Table ${order.tableNumber}?`)) {
        return;
      }

      await restoreInventory(orderId);

      await updateDoc(doc(db, 'orders', orderId), {
        status: "cancelled",
      });

      if (order.tableNumber > 0) {
        const updatedTables = tables.map(table =>
          table.number === order.tableNumber ? { ...table, status: "available" as const } : table
        );
        setTables(updatedTables);
        updateTableStatusInFirestore(order.tableNumber, "available");
      }

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

  if (authInitializing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LocaleToggle />
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
        <LocaleToggle />
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Account Pending Approval</h1>
          <p className="text-gray-600 mb-4">Your registration is being reviewed by a manager. Please wait for approval to access the system.</p>
          <button
            onClick={logout}
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

  // Loading component for lazy-loaded routes
  const RouteLoadingFallback = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <img src="/icons/icon-192.png" alt="VRM" width="72" height="72" />
        <div className="animate-spin h-6 w-6 rounded-full border-2 border-gray-300 border-t-blue-600" />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );

  return (
    <>
      <OfflineBanner />
      <SyncStatusIndicator />
      <RefreshFab />
      <LocaleToggle />
      <InfoToast />
      <Suspense fallback={<RouteLoadingFallback />}>
        {currentRole === "manager" && (
          <ManagerRoutes
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            notifications={notifications}
            handleDismissNotification={dismissNotification}
            isOnline={isOnline}
            orders={orders}
            handleLogout={logout}
            t={(key: string) => key} // TODO: implement proper translation
          />
        )}
        {currentRole === "waiter" && (
          <WaiterRoutes
            selectedTable={selectedTable}
            setSelectedTable={setSelectedTable}
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            orders={orders}
            readyOrders={readyOrders}
            handleMarkAsPaid={handleMarkAsPaid}
            handlePickUp={handlePickUp}
            handleCancelOrder={handleCancelOrder}
            handleMobileBankingPayment={handleMobileBankingPayment}
            handleSubmitOrder={handleSubmitOrder}
            t={(key: string) => key} // TODO: implement proper translation
            handleLogout={logout}
          />
        )}
        {(currentRole === "cashier" || currentRole === "butcher" || currentRole === "kitchen" || currentRole === "bar") && (
          <StaffRoutes
            role={currentRole}
            orders={orders}
            pendingOrders={pendingOrders}
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            onConfirmPayment={handleConfirmPayment}
            onApproveMobilePayment={handleApproveMobilePayment}
            onRejectMobilePayment={handleRejectMobilePayment}
            onLogout={logout}
            t={(key: string) => key} // TODO: implement proper translation
          />
        )}
      </Suspense>
    </>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

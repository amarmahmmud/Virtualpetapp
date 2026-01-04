import { useState, useEffect, useMemo, useCallback } from "react";
import { collection, query, orderBy, onSnapshot, updateDoc, doc, limit, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export interface Order {
  id: string;
  orderNumber?: number;
  tableNumber: number;
  status: "pending" | "in-kitchen" | "at-bar" | "ready" | "paid" | "confirmed" | "picked";
  items: {
    name: string;
    quantity: number;
    price: number;
    requiresButcher?: boolean;
    butcherReady?: boolean;
    requiresBar?: boolean;
    barReady?: boolean;
  }[];
  timeElapsed: string;
  createdAt: Date;
  paymentMethod?: "cash" | "mobile";
  waiterName?: string;
  paymentImageUrl?: string;
  paymentImageName?: string;
  paymentSubmittedAt?: Date;
  paymentStatus?: "pending_approval" | "approved" | "rejected";
}

export const useOrders = (pageSize: number = 50, statusFilter?: string) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState<any>(null);

  useEffect(() => {
    // Optimized compound query with status filtering and pagination
    let ordersQuery = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));

    // Add status filter if specified (compound query for better performance)
    if (statusFilter) {
      ordersQuery = query(
        collection(db, 'orders'),
        where('status', '==', statusFilter),
        orderBy('createdAt', 'desc')
      );
    }

    // Add pagination limit
    ordersQuery = query(ordersQuery, limit(pageSize));

    const unsubscribe = onSnapshot(ordersQuery, async (snapshot) => {
      setLoading(false);
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
      setHasMore(snapshot.size === pageSize); // Check if there might be more data

      // Store the last document for pagination
      if (!snapshot.empty) {
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      }
    });

    return () => unsubscribe();
  }, [pageSize, statusFilter]);

  // Load more orders for pagination
  const loadMore = useCallback(async () => {
    if (!hasMore || !lastDoc) return;

    setLoading(true);
    try {
      let loadMoreQuery = query(
        collection(db, 'orders'),
        orderBy('createdAt', 'desc')
      );

      if (statusFilter) {
        loadMoreQuery = query(
          collection(db, 'orders'),
          where('status', '==', statusFilter),
          orderBy('createdAt', 'desc')
        );
      }

      loadMoreQuery = query(
        loadMoreQuery,
        limit(pageSize)
      );

      const snapshot = await getDocs(loadMoreQuery);
      const newOrders: Order[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
        newOrders.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
        } as Order);
      });

      setOrders(prev => [...prev, ...newOrders]);
      setHasMore(snapshot.size === pageSize);

      if (!snapshot.empty) {
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      }
    } catch (error) {
      console.error('Error loading more orders:', error);
    } finally {
      setLoading(false);
    }
  }, [hasMore, lastDoc, pageSize, statusFilter]);

  // Update timeElapsed every 10 seconds
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

  // Memoized computed values for common order filtering operations
  const activeOrders = useMemo(() =>
    orders.filter(order => ["pending", "in-kitchen", "at-bar", "ready", "picked"].includes(order.status)),
    [orders]
  );

  const pendingOrders = useMemo(() =>
    orders.filter(order => order.status === "paid"),
    [orders]
  );

  const readyOrders = useMemo(() =>
    orders.filter(order => order.status === "ready"),
    [orders]
  );

  const ordersByStatus = useMemo(() => {
    const grouped: Record<string, Order[]> = {};
    orders.forEach(order => {
      if (!grouped[order.status]) {
        grouped[order.status] = [];
      }
      grouped[order.status].push(order);
    });
    return grouped;
  }, [orders]);

  const recentOrders = useMemo(() =>
    orders.slice(0, 10), // Most recent 10 orders
    [orders]
  );

  return {
    orders,
    loading,
    hasMore,
    loadMore,
    // Memoized filtered collections
    activeOrders,
    pendingOrders,
    readyOrders,
    ordersByStatus,
    recentOrders,
  };
};
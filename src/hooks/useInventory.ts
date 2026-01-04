import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  threshold: number;
  unit: string;
}

export interface Notification {
  id: string;
  type: 'low_stock';
  title: string;
  message: string;
  timestamp: Date;
}

export const useInventory = (currentRole: string | null) => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const inventoryQuery = query(collection(db, 'inventory'));
    const unsubscribe = onSnapshot(inventoryQuery, (snapshot) => {
      const inventoryData: InventoryItem[] = [];
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
        // In a real app, you'd show browser notifications here
        // showNotification(alert.title, alert.message);
        setNotifications(prev => [...prev, ...newAlerts]);
      }
    });

    return () => unsubscribe();
  }, [currentRole, notifications]);

  const dismissNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return { inventoryItems, notifications, dismissNotification };
};
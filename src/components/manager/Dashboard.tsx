import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { DollarSign, ShoppingBag, TrendingUp, Bell, X } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { db } from "../../firebase";

interface Order {
  id: string;
  tableNumber: number;
  status: string;
  items: { name: string; quantity: number; price: number }[];
  createdAt: Date;
  paymentMethod?: string;
}

interface Notification {
  id: string;
  type: 'low_stock';
  title: string;
  message: string;
  timestamp: Date;
}

interface ManagerDashboardProps {
  notifications: Notification[];
  onDismissNotification: (id: string) => void;
  isOnline: boolean;
  ordersData?: Order[];
}

export function ManagerDashboard({ notifications, onDismissNotification, isOnline, ordersData }: ManagerDashboardProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // Use orders from props when provided; otherwise subscribe to Firestore
  useEffect(() => {
    // If parent passes ordersData, prefer it and skip subscription
    if (ordersData && Array.isArray(ordersData)) {
      setOrders(ordersData as Order[]);
      setLoading(false);
      return;
    }

    const ordersQuery = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
      const _orders: Order[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        _orders.push({
          id: doc.id,
          ...data,
          createdAt: (data as any).createdAt?.toDate?.() || new Date(),
        } as Order);
      });
      setOrders(_orders);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [ordersData]);

  // Calculate today's metrics
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todaysOrders = orders.filter(order => {
    const orderDate = new Date(order.createdAt);
    orderDate.setHours(0, 0, 0, 0);
    return orderDate.getTime() === today.getTime() && order.status === 'confirmed';
  });

  const todaysSales = todaysOrders.reduce((sum, order) =>
    sum + order.items.reduce((itemSum, item) => itemSum + (item.price * item.quantity), 0), 0
  );

  const totalOrders = todaysOrders.length;
  const avgOrderValue = totalOrders > 0 ? todaysSales / totalOrders : 0;

  // Calculate weekly sales data
  const weeklySales = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    date.setHours(0, 0, 0, 0);

    const dayOrders = orders.filter(order => {
      const orderDate = new Date(order.createdAt);
      orderDate.setHours(0, 0, 0, 0);
      return orderDate.getTime() === date.getTime() && order.status === 'confirmed';
    });

    const daySales = dayOrders.reduce((sum, order) =>
      sum + order.items.reduce((itemSum, item) => itemSum + (item.price * item.quantity), 0), 0
    );

    weeklySales.push({
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      sales: Math.round(daySales)
    });
  }

  // Calculate popular items today
  const itemCounts: { [key: string]: number } = {};
  todaysOrders.forEach(order => {
    order.items.forEach(item => {
      itemCounts[item.name] = (itemCounts[item.name] || 0) + item.quantity;
    });
  });

  const popularItems = Object.entries(itemCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .map(([name, count]) => ({ name, orders: count }));

  // If fully offline and we have no data at all, show an offline message
  if (!isOnline && orders.length === 0) {
    return (
      <div className="p-4 pb-20">
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <p className="text-gray-600">You are offline. Dashboard data will be available when you reconnect.</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-4 pb-20">
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4 pb-20">
      <div className="flex items-center justify-between">
        <h2>Dashboard</h2>
        {notifications.length > 0 && (
          <div className="relative">
            <Bell className="w-6 h-6 text-red-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.length}
            </span>
          </div>
        )}
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <Card className="p-4 bg-red-50 border-red-200">
          <h3 className="text-red-800 font-medium mb-3 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Alerts ({notifications.length})
          </h3>
          <div className="space-y-2">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start justify-between p-3 bg-white rounded border">
                <div>
                  <p className="font-medium text-red-800">{notification.title}</p>
                  <p className="text-red-700 text-sm">{notification.message}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    {notification.timestamp.toLocaleTimeString()}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDismissNotification(notification.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Today's Sales</p>
              <p className="mt-2">${todaysSales.toFixed(2)}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Orders</p>
              <p className="mt-2">{totalOrders}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Avg. Order Value</p>
              <p className="mt-2">${avgOrderValue.toFixed(2)}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-4">
        <h3 className="mb-4">Weekly Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklySales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value}`, 'Sales']} />
            <Bar dataKey="sales" fill="#007AFF" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-4">
        <h3 className="mb-4">Popular Items Today</h3>
        <div className="space-y-3">
          {popularItems.length > 0 ? (
            popularItems.map((item, index) => (
              <div key={item.name} className="flex justify-between items-center pb-2 border-b last:border-b-0">
                <span>{item.name}</span>
                <span className="text-gray-600">{item.orders} orders</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">No orders today yet</p>
          )}
        </div>
      </Card>
    </div>
  );
}

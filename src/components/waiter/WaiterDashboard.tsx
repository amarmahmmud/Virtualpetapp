import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Clock, CheckCircle, AlertCircle, Plus } from "lucide-react";

interface Order {
  id: string;
  orderNumber?: number;
  tableNumber: number;
  status: "pending" | "in-kitchen" | "at-bar" | "ready" | "paid" | "confirmed" | "picked";
  items: { name: string; quantity: number; price: number }[];
  timeElapsed: string;
  createdAt: Date;
  waiterName?: string;
  pickedUpBy?: string;
}

interface WaiterDashboardProps {
  orders: Order[];
  readyOrders: Order[];
  onCreateOrder: () => void;
  onViewReadyOrders: () => void;
  onViewMyOrders: () => void;
}

export const WaiterDashboard: React.FC<WaiterDashboardProps> = ({
  orders,
  readyOrders,
  onCreateOrder,
  onViewReadyOrders,
  onViewMyOrders,
}) => {
  // Calculate quick stats for waiter
  const activeOrders = orders.filter(order =>
    ["pending", "in-kitchen", "at-bar", "ready"].includes(order.status)
  );

  const myRecentOrders = orders
    .filter(order => order.status === "picked" || order.status === "paid" || order.status === "confirmed")
    .slice(0, 3); // Show last 3 completed orders

  const totalActiveTables = new Set(activeOrders.map(order => order.tableNumber)).size;

  return (
    <div className="p-4 space-y-4 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Waiter Dashboard</h2>
        <div className="text-sm text-gray-600">
          {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{activeOrders.length}</p>
              <p className="text-sm text-gray-600">Active Orders</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{readyOrders.length}</p>
              <p className="text-sm text-gray-600">Ready to Serve</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-4">
        <h3 className="font-medium mb-3">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-2">
          <Button
            onClick={onCreateOrder}
            className="w-full justify-start"
            size="lg"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Order
          </Button>

          {readyOrders.length > 0 && (
            <Button
              onClick={onViewReadyOrders}
              variant="outline"
              className="w-full justify-start border-green-200 text-green-700 hover:bg-green-50"
              size="lg"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Serve Ready Orders ({readyOrders.length})
            </Button>
          )}

          <Button
            onClick={onViewMyOrders}
            variant="outline"
            className="w-full justify-start"
            size="lg"
          >
            <Clock className="w-4 h-4 mr-2" />
            View My Orders
          </Button>
        </div>
      </Card>

      {/* Active Tables Summary */}
      {totalActiveTables > 0 && (
        <Card className="p-4">
          <h3 className="font-medium mb-3">Active Tables</h3>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-orange-500" />
            <span className="text-sm">
              {totalActiveTables} table{totalActiveTables !== 1 ? 's' : ''} currently have active orders
            </span>
          </div>
        </Card>
      )}

      {/* Recent Activity */}
      {myRecentOrders.length > 0 && (
        <Card className="p-4">
          <h3 className="font-medium mb-3">Recent Activity</h3>
          <div className="space-y-2">
            {myRecentOrders.map((order) => (
              <div key={order.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <div>
                  <p className="font-medium">Order #{order.orderNumber || order.id}</p>
                  <p className="text-sm text-gray-600">Table {order.tableNumber}</p>
                  {order.waiterName && <p className="text-xs text-gray-500">Waiter: {order.waiterName}</p>}
                  {order.pickedUpBy && <p className="text-xs text-gray-500">Picked by: {order.pickedUpBy}</p>}
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">
                    {order.status === 'picked' ? 'Served' :
                     order.status === 'paid' ? 'Paid' :
                     order.status === 'confirmed' ? 'Completed' : order.status}
                  </p>
                  <p className="text-xs text-gray-500">
                    {order.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
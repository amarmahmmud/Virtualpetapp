import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChefHat, Clock, AlertTriangle } from "lucide-react";

interface Order {
  id: string;
  orderNumber?: number;
  tableNumber: number;
  status: "pending" | "in-kitchen" | "at-bar" | "ready" | "paid" | "confirmed" | "picked";
  items: { name: string; quantity: number; price: number; requiresButcher?: boolean; butcherReady?: boolean; requiresBar?: boolean; barReady?: boolean }[];
  timeElapsed: string;
  createdAt: Date;
  waiterName?: string;
}

interface KitchenDashboardProps {
  orders: Order[];
  onViewWorkstation: () => void;
}

export const KitchenDashboard: React.FC<KitchenDashboardProps> = ({
  orders,
  onViewWorkstation,
}) => {
  const kitchenOrders = orders.filter(order => order.status === "in-kitchen");

  // Calculate production summary
  const productionSummary: Record<string, number> = {};
  kitchenOrders.forEach((order) => {
    order.items.forEach((item) => {
      productionSummary[item.name] = (productionSummary[item.name] || 0) + item.quantity;
    });
  });

  // Find orders that have been waiting too long (>10 minutes)
  const urgentOrders = kitchenOrders.filter(order => {
    const minutes = Math.floor((Date.now() - order.createdAt.getTime()) / 60000);
    return minutes > 10;
  });

  // Calculate efficiency metrics
  const avgWaitTime = kitchenOrders.length > 0
    ? kitchenOrders.reduce((sum, order) => {
        const minutes = Math.floor((Date.now() - order.createdAt.getTime()) / 60000);
        return sum + minutes;
      }, 0) / kitchenOrders.length
    : 0;

  return (
    <div className="p-4 space-y-4 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Kitchen Dashboard</h2>
        <div className="text-sm text-gray-600">
          {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{kitchenOrders.length}</p>
              <p className="text-sm text-gray-600">Orders in Kitchen</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{Math.round(avgWaitTime)}m</p>
              <p className="text-sm text-gray-600">Avg Wait Time</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Production Summary */}
      <Card className="p-4">
        <h3 className="font-medium mb-3">Current Production Load</h3>
        <div className="space-y-2">
          {Object.entries(productionSummary).length > 0 ? (
            Object.entries(productionSummary)
              .sort(([,a], [,b]) => b - a)
              .slice(0, 5) // Show top 5 items
              .map(([item, count]) => (
                <div key={item} className="flex justify-between items-center">
                  <span className="font-medium">{item}</span>
                  <Badge variant="secondary">{count} needed</Badge>
                </div>
              ))
          ) : (
            <p className="text-gray-500 text-center py-4">No active orders</p>
          )}
        </div>
      </Card>

      {/* Urgent Orders Alert */}
      {urgentOrders.length > 0 && (
        <Card className="p-4 border-red-200 bg-red-50">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="font-medium text-red-800">Urgent Orders</h3>
          </div>
          <div className="space-y-2">
            {urgentOrders.slice(0, 3).map((order) => (
              <div key={order.id} className="flex justify-between items-center p-2 bg-white rounded">
                <div>
                  <p className="font-medium">Order #{order.orderNumber || order.id}</p>
                  <p className="text-sm text-gray-600">Table {order.tableNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-red-600">
                    {Math.floor((Date.now() - order.createdAt.getTime()) / 60000)}m waiting
                  </p>
                </div>
              </div>
            ))}
            {urgentOrders.length > 3 && (
              <p className="text-sm text-red-600 text-center">
                +{urgentOrders.length - 3} more urgent orders
              </p>
            )}
          </div>
        </Card>
      )}

      {/* Quick Actions */}
      <Card className="p-4">
        <h3 className="font-medium mb-3">Actions</h3>
        <button
          onClick={onViewWorkstation}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-lg text-lg font-medium"
        >
          Open Kitchen Workstation
        </button>
      </Card>
    </div>
  );
};
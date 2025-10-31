import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { HistoryListItem } from "../HistoryListItem";
import { History, ChefHat, Clock } from "lucide-react";
import { Badge } from "../ui/badge";

interface KitchenOrderItem {
  name: string;
  quantity: number;
  requiresButcher: boolean;
  butcherReady: boolean;
}

interface KitchenOrder {
  id: string;
  tableNumber: number;
  items: KitchenOrderItem[];
  createdAt: Date;
}

const initialOrders: KitchenOrder[] = [
  {
    id: "101",
    tableNumber: 5,
    items: [
      { name: "Steak", quantity: 1, requiresButcher: true, butcherReady: false },
      { name: "Caesar Salad", quantity: 1, requiresButcher: false, butcherReady: true },
    ],
    createdAt: new Date(Date.now() - 5 * 60000),
  },
  {
    id: "102",
    tableNumber: 3,
    items: [
      { name: "Steak", quantity: 2, requiresButcher: true, butcherReady: true },
      { name: "Ribs", quantity: 1, requiresButcher: true, butcherReady: false },
    ],
    createdAt: new Date(Date.now() - 2 * 60000),
  },
];

const historyData = [
  { timestamp: "10:38 AM", description: "Order 98 marked ready for pickup" },
  { timestamp: "10:30 AM", description: "Order 97 marked ready for pickup" },
  { timestamp: "10:15 AM", description: "Order 96 marked ready for pickup" },
];

export function KitchenWorkstation() {
  const [orders, setOrders] = useState<KitchenOrder[]>(initialOrders);

  const getProductionSummary = () => {
    const summary: Record<string, number> = {};
    orders.forEach((order) => {
      order.items.forEach((item) => {
        summary[item.name] = (summary[item.name] || 0) + item.quantity;
      });
    });
    return summary;
  };

  const getTimeElapsed = (createdAt: Date) => {
    const minutes = Math.floor((Date.now() - createdAt.getTime()) / 60000);
    return `${minutes}m`;
  };

  const getTimerColor = (createdAt: Date) => {
    const minutes = Math.floor((Date.now() - createdAt.getTime()) / 60000);
    if (minutes < 5) return "text-green-600";
    if (minutes < 10) return "text-orange-600";
    return "text-red-600";
  };

  const canMarkReady = (order: KitchenOrder) => {
    return order.items.every((item) => !item.requiresButcher || item.butcherReady);
  };

  const handleMarkReady = (orderId: string) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  const summary = getProductionSummary();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <h2>Kitchen Workstation</h2>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <History className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Activity History</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-2">
              {historyData.map((item, index) => (
                <HistoryListItem
                  key={index}
                  timestamp={item.timestamp}
                  description={item.description}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4 bg-red-50 border-red-200">
          <h3 className="mb-3">Production Summary</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(summary).map(([item, count]) => (
              <Badge key={item} className="bg-red-600 text-white border-0 px-4 py-2">
                {item}: {count}
              </Badge>
            ))}
          </div>
        </Card>

        <div>
          <h3 className="mb-3">Order Queue</h3>
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p>Order #{order.id}</p>
                    <p className="text-gray-600">Table {order.tableNumber}</p>
                  </div>
                  <div className={`flex items-center gap-1 ${getTimerColor(order.createdAt)}`}>
                    <Clock className="w-4 h-4" />
                    <span>{getTimeElapsed(order.createdAt)}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded"
                    >
                      <span>{item.quantity}x {item.name}</span>
                      {item.requiresButcher && (
                        <Badge
                          className={`${
                            item.butcherReady
                              ? "bg-green-600 text-white"
                              : "bg-orange-600 text-white"
                          } border-0`}
                        >
                          {item.butcherReady ? "Ready to Cook" : "Waiting for Butcher"}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!canMarkReady(order)}
                  onClick={() => handleMarkReady(order.id)}
                >
                  Ready for Pickup
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

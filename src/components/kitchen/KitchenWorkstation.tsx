import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { HistoryListItem } from "../HistoryListItem";
import { History, ChefHat, Clock, LogOut, RefreshCcw } from "lucide-react";
import { Badge } from "../ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { logActivity } from "../../utils/activityLogger";

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
}

const historyData = [
  { timestamp: "10:38 AM", description: "Order 98 marked ready for pickup" },
  { timestamp: "10:30 AM", description: "Order 97 marked ready for pickup" },
  { timestamp: "10:15 AM", description: "Order 96 marked ready for pickup" },
];

interface KitchenWorkstationProps {
  orders: Order[];
  onLogout: () => void;
}

export function KitchenWorkstation({ orders, onLogout }: KitchenWorkstationProps) {
  const kitchenOrders = orders.filter(order => order.status === "in-kitchen");

  // Get completed orders (ready for pickup or later)
  const getCompletedOrders = () => {
    return orders
      .filter(order => order.status === 'ready' || order.status === 'paid' || order.status === 'confirmed' || order.status === 'picked')
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime()); // Oldest first
  };

  // Create batches of 10 orders each
  const createBatches = (orderList: Order[]) => {
    const batches = [];
    for (let i = 0; i < orderList.length; i += 10) {
      batches.push(orderList.slice(i, i + 10));
    }
    return batches;
  };

  // Calculate batch summary (item counts)
  const getBatchSummary = (batchOrders: Order[]) => {
    const summary: Record<string, number> = {};
    batchOrders.forEach(order => {
      order.items.forEach(item => {
        summary[item.name] = (summary[item.name] || 0) + item.quantity;
      });
    });
    return summary;
  };

  const completedOrders = getCompletedOrders();
  const completedBatches = createBatches(completedOrders);

  const getProductionSummary = () => {
    const summary: Record<string, number> = {};
    kitchenOrders.forEach((order) => {
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

  const canMarkReady = (order: Order) => {
    return order.items.every((item) => {
      const requiresButcher = item.requiresButcher !== undefined ? item.requiresButcher : false;
      const butcherReady = item.butcherReady !== undefined ? item.butcherReady : true;
      const requiresBar = item.requiresBar !== undefined ? item.requiresBar : false;
      const barReady = item.barReady !== undefined ? item.barReady : true;
      return (!requiresButcher || butcherReady) && (!requiresBar || barReady);
    });
  };

  const handleMarkReady = async (orderId: string) => {
    try {
      const order = orders.find(o => o.id === orderId);
      await updateDoc(doc(db, 'orders', orderId), {
        status: "ready",
      });

      // Log activity
      if (order) {
        await logActivity({
          role: 'Kitchen',
          description: `Order marked ready for pickup`,
          orderId,
          tableNumber: order.tableNumber,
        });
      }
    } catch (error) {
      console.error('Error marking order ready:', error);
    }
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
        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <History className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[90vw] max-w-4xl">
              <SheetHeader>
                <SheetTitle>🍳 Kitchen History (Completed Orders)</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4 max-h-[80vh] overflow-y-auto">
                <Accordion type="single" collapsible>
                  {completedBatches.map((batch, batchIndex) => {
                    const batchSummary = getBatchSummary(batch);
                    const summaryText = Object.entries(batchSummary)
                      .map(([item, count]) => `${item}: ${count}`)
                      .join(', ');

                    return (
                      <AccordionItem key={`kitchen-history-batch-${batchIndex}`} value={`kitchen-history-batch-${batchIndex}`}>
                        <AccordionTrigger>
                          History Batch {batchIndex + 1} [{summaryText}] (from {batch.length} Orders)
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            {batch.map((order) => (
                              <Card key={order.id} className="p-3 opacity-75">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-medium">
                                    Order #{order.orderNumber || order.id} - Table {order.tableNumber} - {order.waiterName || 'Unknown Waiter'}
                                  </span>
                                  <Badge className="bg-green-600">{order.status}</Badge>
                                </div>
                                <div className="space-y-1">
                                  {order.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="text-sm text-gray-600">
                                      ✓ {item.quantity}x {item.name}
                                    </div>
                                  ))}
                                </div>
                              </Card>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                  {completedBatches.length === 0 && (
                    <div className="text-center text-gray-500 py-4">
                      No completed kitchen orders yet
                    </div>
                  )}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
          <Button variant="outline" size="sm" onClick={onLogout}>
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
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
            {kitchenOrders.map((order) => (
              <Card key={order.id} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p>Order #{order.orderNumber || order.id}</p>
                    <p className="text-gray-600">Table {order.tableNumber} - {order.waiterName || 'Unknown Waiter'}</p>
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
                      {((item.requiresButcher && !item.butcherReady) || (item.requiresBar && !item.barReady)) && (
                        <Badge className="bg-orange-600 text-white border-0">
                          {(item.requiresButcher && !item.butcherReady) ? "Waiting for Butcher" :
                           (item.requiresBar && !item.barReady) ? "Waiting for Bar" :
                           "Ready to Cook"}
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
        <button
          onClick={() => window.location.reload()}
          aria-label="Refresh"
          className="fixed bottom-20 right-4 bg-red-600 text-white rounded-full p-3 shadow-lg"
          title="Refresh"
        >
          <RefreshCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

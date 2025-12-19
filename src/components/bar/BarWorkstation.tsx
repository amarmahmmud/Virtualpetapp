import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { HistoryListItem } from "../HistoryListItem";
import { History, Wine, LogOut, RefreshCcw } from "lucide-react";
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

interface BarWorkstationProps {
  orders: Order[];
  onLogout: () => void;
}

const historyData = [
  { timestamp: "10:45 AM", description: "Soda (x2) for Order 101 prepped" },
  { timestamp: "10:32 AM", description: "Fresh Juice (x1) for Order 102 prepped" },
];

export function BarWorkstation({ orders, onLogout }: BarWorkstationProps) {

  const handleReady = async (orderId: string, itemName: string) => {
    try {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        const updatedItems = order.items.map(item => {
          if (item.name === itemName) {
            // Ensure bar fields exist and mark as ready
            return {
              ...item,
              requiresBar: true,
              barReady: true
            };
          }
          return item;
        });

        // Check if all bar items are now ready
        const allBarItemsReady = updatedItems
          .filter(item => item.requiresBar)
          .every(item => item.barReady);

        // If all bar items are ready, change order status to "ready"
        const newStatus = allBarItemsReady ? "ready" : order.status;

        await updateDoc(doc(db, 'orders', orderId), {
          items: updatedItems,
          status: newStatus,
        });

        // Log activity
        const readyItem = order.items.find(i => i.name === itemName);
        if (readyItem) {
          await logActivity({
            role: 'Bar',
            description: `${itemName} (${readyItem.quantity}x) ready`,
            orderId,
            tableNumber: order.tableNumber,
          });

          // Log when order becomes ready for pickup
          if (allBarItemsReady && newStatus === "ready") {
            await logActivity({
              role: 'Bar',
              description: `Order ready for pickup`,
              orderId,
              tableNumber: order.tableNumber,
            });
          }
        }
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const handleOrderReady = async (orderId: string) => {
    try {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        const updatedItems = order.items.map(item => {
          if (item.requiresBar && !item.barReady) {
            // Mark all bar items as ready
            return {
              ...item,
              requiresBar: true,
              barReady: true
            };
          }
          return item;
        });

        await updateDoc(doc(db, 'orders', orderId), {
          items: updatedItems,
          status: "ready",
        });

        // Log activity
        await logActivity({
          role: 'Bar',
          description: `Order marked ready for pickup`,
          orderId,
          tableNumber: order.tableNumber,
        });
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const getBarItems = () => {
    const items: { orderId: string; itemName: string; quantity: number }[] = [];
    orders.forEach(order => {
      // Show orders that are at-bar (bar orders) or in-kitchen (mixed orders with bar items)
      if (order.status === 'at-bar' || order.status === 'in-kitchen') {
        order.items.forEach(item => {
          // Handle both new orders (with bar fields) and legacy orders (without bar fields)
          const requiresBar = item.requiresBar !== undefined ? item.requiresBar : false;
          const barReady = item.barReady !== undefined ? item.barReady : true;

          if (requiresBar && !barReady) {
            items.push({
              orderId: order.id,
              itemName: item.name,
              quantity: item.quantity,
            });
          }
        });
      }
    });
    return items;
  };

  const getProductionSummary = () => {
    const summary: Record<string, number> = {};
    getBarItems().forEach((item) => {
      summary[item.itemName] = (summary[item.itemName] || 0) + item.quantity;
    });
    return summary;
  };

  const groupedByOrder = getBarItems().reduce((acc, item) => {
    if (!acc[item.orderId]) {
      acc[item.orderId] = [];
    }
    acc[item.orderId].push(item);
    return acc;
  }, {} as Record<string, { orderId: string; itemName: string; quantity: number }[]>);

  // Get completed orders (ready for pickup or later)
  const getCompletedOrders = () => {
    return orders
      .filter(order => order.items.some(item => item.requiresBar))
      .filter(order => order.items.every(item =>
        !item.requiresBar ||
        (item.barReady !== undefined ? item.barReady : false)
      ))
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
        if ((item.requiresBar !== undefined ? item.requiresBar : false) &&
            !(item.barReady !== undefined ? item.barReady : false)) {
          summary[item.name] = (summary[item.name] || 0) + item.quantity;
        }
      });
    });
    return summary;
  };

  const summary = getProductionSummary();
  const completedOrders = getCompletedOrders();
  const completedBatches = createBatches(completedOrders);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
            <Wine className="w-6 h-6 text-white" />
          </div>
          <h2>Bar Workstation</h2>
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
                <SheetTitle>🍷 Bar History (Completed Orders)</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4 max-h-[80vh] overflow-y-auto">
                <Accordion type="single" collapsible>
                  {completedBatches.map((batch, batchIndex) => {
                    const batchSummary = getBatchSummary(batch);
                    const summaryText = Object.entries(batchSummary)
                      .map(([item, count]) => `${item}: ${count}`)
                      .join(', ');

                    return (
                      <AccordionItem key={`bar-history-batch-${batchIndex}`} value={`bar-history-batch-${batchIndex}`}>
                        <AccordionTrigger>
                          History Batch {batchIndex + 1} [{summaryText}] (from {batch.length} Orders)
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            {batch.map((order) => {
                              const barItems = order.items.filter(item => item.requiresBar);
                              const totalBarItems = barItems.reduce((sum, item) => sum + item.quantity, 0);
                              const itemSummary = barItems.map(item => `${item.quantity}x ${item.name}`).join(', ');

                              return (
                                <Card key={order.id} className="p-3 opacity-75">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium">
                                      Order #{order.orderNumber || order.id} - Table {order.tableNumber} - {order.waiterName || 'Unknown Waiter'}
                                    </span>
                                    <Badge className="bg-green-600">Completed</Badge>
                                  </div>
                                  <div className="text-sm text-gray-600 mb-1">
                                    ✓ {totalBarItems} drink{totalBarItems !== 1 ? 's' : ''} ready: {itemSummary}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {order.createdAt.toLocaleDateString()} at {order.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                  </div>
                                </Card>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                  {completedBatches.length === 0 && (
                    <div className="text-center text-gray-500 py-4">
                      No completed bar orders yet
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
        <Card className="p-4 bg-purple-50 border-purple-200">
          <h3 className="mb-3">Production Summary</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(summary).map(([item, count]) => (
              <Badge key={item} className="bg-purple-600 text-white border-0 px-4 py-2">
                {item}: {count}
              </Badge>
            ))}
          </div>
        </Card>

        <div>
          <h3 className="mb-3">To-Do List</h3>
          <div className="space-y-4">
            {Object.entries(groupedByOrder).map(([orderId, orderItems]) => (
              <Card key={orderId} className="p-4">
                <p className="mb-3 text-gray-600">Order #{orders.find(o => o.id === orderId)?.orderNumber || orderId}</p>
                <div className="space-y-2 mb-4">
                  {orderItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded"
                    >
                      <span>{item.quantity}x {item.itemName}</span>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleReady(item.orderId, item.itemName)}
                      >
                        Ready
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleOrderReady(orderId)}
                >
                  Mark Order Ready
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <button
          onClick={() => window.location.reload()}
          aria-label="Refresh"
          className="fixed bottom-20 right-4 bg-purple-600 text-white rounded-full p-3 shadow-lg"
          title="Refresh"
        >
          <RefreshCcw className="w-5 h-5" />
        </button>
        <button
          onClick={() => window.location.reload()}
          aria-label="Refresh"
          className="fixed bottom-20 right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg"
          title="Refresh"
        >
          <RefreshCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
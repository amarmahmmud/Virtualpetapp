import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { HistoryListItem } from "../HistoryListItem";
import { History, ChefHat, LogOut, Plus, Minus, RefreshCcw } from "lucide-react";
import { Badge } from "../ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { updateDoc, doc, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { logActivity } from "../../utils/activityLogger";
import { auth } from "../../firebase";
import { getLocale } from "../../i18n";

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

interface ButcherWorkstationProps {
  orders: Order[];
  onLogout: () => void;
}

const historyData = [
  { timestamp: "10:45 AM", description: "Steak (x1) for Order 101 prepped" },
  { timestamp: "10:32 AM", description: "Ribs (x2) for Order 99 prepped" },
  { timestamp: "10:20 AM", description: "Steak (x3) for Order 98 prepped" },
];

export function ButcherWorkstation({ orders, onLogout }: ButcherWorkstationProps) {
  const [butcherMenuItems, setButcherMenuItems] = useState<{id: string, name: string}[]>([]);
  const [selectedItemType, setSelectedItemType] = useState<string>("");
  const [prepQuantity, setPrepQuantity] = useState<number>(1);

  const lc = getLocale();
  const L = {
    title: lc === 'am' ? 'የቡችር የስራ ጣቢያ' : 'Butcher Workstation',
    historyTitle: lc === 'am' ? '📚 ታሪክ (የተጠናቀቁ ትዕዛዞች)' : '📚 History (Completed Orders)',
    productionSummary: lc === 'am' ? 'የምርት ማጠቃለያ' : 'Production Summary',
    todoTitle: lc === 'am' ? '📋 የሚደረጉ (በመጠባበቅ ላይ) ትዕዛዞች' : '📋 To-Do List (Pending Orders)',
    completed: lc === 'am' ? 'ተጠናቋል' : 'Completed',
    prepped: lc === 'am' ? 'ተዘጋጀ' : 'Prepped',
    order: lc === 'am' ? 'ትዕዛዝ #' : 'Order #',
    table: lc === 'am' ? 'ጠረጴዛ' : 'Table',
    waiter: lc === 'am' ? 'አገልጋይ' : 'Waiter',
    unknownWaiter: lc === 'am' ? 'ያልታወቀ አገልጋይ' : 'Unknown Waiter',
    historyBatch: lc === 'am' ? 'የታሪክ ጥቅል' : 'History Batch',
    fromOrders: (n: number) => lc === 'am' ? `ከ ${n} ትዕዛዞች` : `from ${n} Orders`,
    noCompleted: lc === 'am' ? 'የተጠናቀቁ ቡችር ትዕዛዞች የሉም' : 'No completed butcher orders yet',
    noPending: lc === 'am' ? 'የቡችር ዝግጅት የሚፈልጉ ትዕዛዞች የሉም' : 'No pending orders requiring butcher preparation',
    waitingForButcher: lc === 'am' ? 'በቡችር ላይ በመጠባበቅ ላይ' : 'Waiting for Butcher',
    waitingForBar: lc === 'am' ? 'በባር ላይ በመጠባበቅ ላይ' : 'Waiting for Bar',
  };

  // Fetch butcher menu items
  useEffect(() => {
    const menuQuery = query(collection(db, 'menu'), orderBy('name'));
    const unsubscribe = onSnapshot(menuQuery, (snapshot) => {
      const butcherItems = snapshot.docs
        .map(doc => ({ id: doc.id, name: doc.data().name, category: doc.data().category }))
        .filter(item => item.category === 'Food-Butcher');
      setButcherMenuItems(butcherItems);
    });

    return () => unsubscribe();
  }, []);

  const handleManualPrep = async () => {
    if (!selectedItemType || prepQuantity <= 0) return;

    try {
      // Find all pending butcher items of the selected type, ordered by creation time
      const pendingItems = orders
        .filter(order => order.status === 'in-kitchen')
        .flatMap(order =>
          order.items
            .map((item, index) => ({
              orderId: order.id,
              itemName: item.name,
              itemIndex: index,
              quantity: item.quantity,
              requiresButcher: item.requiresButcher || false,
              butcherReady: item.butcherReady || false,
              createdAt: order.createdAt
            }))
            .filter(item => item.itemName === selectedItemType && item.requiresButcher && !item.butcherReady)
        )
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime()); // Oldest first

      // Calculate total available quantity for validation
      const totalAvailable = pendingItems.reduce((sum, item) => sum + item.quantity, 0);

      if (prepQuantity > totalAvailable) {
        alert(`Cannot prep ${prepQuantity} items. Only ${totalAvailable} ${selectedItemType} items are currently pending.`);
        return;
      }

      // Process the oldest items up to the requested quantity
      let remainingQuantity = prepQuantity;
      const itemsToUpdate: {orderId: string, itemIndex: number}[] = [];

      for (const item of pendingItems) {
        if (remainingQuantity <= 0) break;

        const quantityToPrep = Math.min(remainingQuantity, item.quantity);
        remainingQuantity -= quantityToPrep;

        itemsToUpdate.push({
          orderId: item.orderId,
          itemIndex: item.itemIndex
        });
      }

      // Update the items in Firestore
      for (const update of itemsToUpdate) {
        const order = orders.find(o => o.id === update.orderId);
        if (order) {
          const updatedItems = [...order.items];
          updatedItems[update.itemIndex] = {
            ...updatedItems[update.itemIndex],
            butcherReady: true
          };

          await updateDoc(doc(db, 'orders', update.orderId), {
            items: updatedItems,
          });

          // Log activity
          await logActivity({
            role: 'Butcher',
            description: `${updatedItems[update.itemIndex].name} (${updatedItems[update.itemIndex].quantity}x) prepped via manual control`,
            orderId: update.orderId,
            tableNumber: order.tableNumber,
          });
        }
      }

      // Reset form
      setSelectedItemType("");
      setPrepQuantity(1);

    } catch (error) {
      console.error('Error in manual prep:', error);
    }
  };

  const handlePrepped = async (orderId: string, itemName: string) => {
    try {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        const updatedItems = order.items.map(item => {
          if (item.name === itemName) {
            // Ensure butcher fields exist and mark as ready
            return {
              ...item,
              requiresButcher: true,
              butcherReady: true
            };
          }
          return item;
        });

        await updateDoc(doc(db, 'orders', orderId), {
          items: updatedItems,
        });

        // Log activity
        const preppedItem = order.items.find(i => i.name === itemName);
        if (preppedItem) {
          await logActivity({
            role: 'Butcher',
            description: `${itemName} (${preppedItem.quantity}x) prepped`,
            orderId,
            tableNumber: order.tableNumber,
          });
        }
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const getButcherItems = () => {
    const items: { orderId: string; itemName: string; quantity: number; tableNumber: number; waiterName?: string }[] = [];
    orders.forEach(order => {
      // Only show orders that are in-kitchen (being prepared)
      if (order.status === 'in-kitchen') {
        order.items.forEach(item => {
          // Handle both new orders (with butcher fields) and legacy orders (without butcher fields)
          const requiresButcher = item.requiresButcher !== undefined ? item.requiresButcher : false;
          const butcherReady = item.butcherReady !== undefined ? item.butcherReady : true;

          if (requiresButcher && !butcherReady) {
            items.push({
              orderId: order.id,
              itemName: item.name,
              quantity: item.quantity,
              tableNumber: order.tableNumber,
              waiterName: order.waiterName,
            });
          }
        });
      }
    });
    return items;
  };

  const getProductionSummary = () => {
    const summary: Record<string, number> = {};
    getButcherItems().forEach((item) => {
      summary[item.itemName] = (summary[item.itemName] || 0) + item.quantity;
    });
    return summary;
  };

  const summary = getProductionSummary();

  // Get pending orders (have butcher items that aren't ready)
  const getPendingOrders = () => {
    return orders
      .filter(order => order.status === 'in-kitchen')
      .filter(order => order.items.some(item =>
        (item.requiresButcher !== undefined ? item.requiresButcher : false) &&
        !(item.butcherReady !== undefined ? item.butcherReady : false)
      ))
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime()); // Oldest first
  };

  // Get completed orders (all butcher items are ready)
  const getCompletedOrders = () => {
    return orders
      .filter(order => order.items.some(item => item.requiresButcher))
      .filter(order => order.items.every(item =>
        !item.requiresButcher ||
        (item.butcherReady !== undefined ? item.butcherReady : false)
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
        if ((item.requiresButcher !== undefined ? item.requiresButcher : false) &&
            !(item.butcherReady !== undefined ? item.butcherReady : false)) {
          summary[item.name] = (summary[item.name] || 0) + item.quantity;
        }
      });
    });
    return summary;
  };

  const pendingOrders = getPendingOrders();
  const completedOrders = getCompletedOrders();
  const pendingBatches = createBatches(pendingOrders);
  const completedBatches = createBatches(completedOrders);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <h2>{L.title}</h2>
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
                <SheetTitle>{L.historyTitle}</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4 max-h-[80vh] overflow-y-auto">
                <Accordion type="single" collapsible>
                  {completedBatches.map((batch, batchIndex) => {
                    const batchSummary = getBatchSummary(batch);
                    const summaryText = Object.entries(batchSummary)
                      .map(([item, count]) => `${item}: ${count}`)
                      .join(', ');

                    return (
                      <AccordionItem key={`sheet-history-batch-${batchIndex}`} value={`sheet-history-batch-${batchIndex}`}>
                        <AccordionTrigger>
                          {L.historyBatch} {batchIndex + 1} [{summaryText}] ({L.fromOrders(batch.length)})
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            {batch.map((order) => (
                              <Card key={order.id} className="p-3 opacity-75">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-medium">
                                    {L.order}{order.orderNumber || order.id} - {L.table} {order.tableNumber} - {order.waiterName || L.unknownWaiter}
                                  </span>
                                  <Badge className="bg-green-600">{L.completed}</Badge>
                                </div>
                                <div className="space-y-1">
                                  {order.items
                                    .filter(item => item.requiresButcher)
                                    .map((item, itemIndex) => (
                                      <div key={itemIndex} className="text-sm text-gray-600">
                                        ✓ {item.quantity}x {item.name} (completed)
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
                      {L.noCompleted}
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
        {/* Manual Preparation Control Panel */}
        <Card className="p-4 bg-blue-50 border-blue-200">
          <h3 className="mb-3">🔪 Manual Preparation Control</h3>
          <div className="flex items-center gap-3">
            <Select value={selectedItemType} onValueChange={setSelectedItemType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select item type" />
              </SelectTrigger>
              <SelectContent>
                {butcherMenuItems.map((item) => (
                  <SelectItem key={item.id} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPrepQuantity(Math.max(1, prepQuantity - 1))}
                disabled={prepQuantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{prepQuantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPrepQuantity(prepQuantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={handleManualPrep}
              disabled={!selectedItemType}
            >
              PREPPED
            </Button>
          </div>
        </Card>

        <Card className="p-4 bg-orange-50 border-orange-200">
          <h3 className="mb-3">Production Summary</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(summary).map(([item, count]) => (
              <Badge key={item} className="bg-orange-600 text-white border-0 px-4 py-2">
                {item}: {count}
              </Badge>
            ))}
          </div>
        </Card>

        {/* To-Do List with Batching */}
        <div>
          <h3 className="mb-3">{L.todoTitle}</h3>
          <Accordion type="single" collapsible>
            {pendingBatches.map((batch, batchIndex) => {
              const batchSummary = getBatchSummary(batch);
              const summaryText = Object.entries(batchSummary)
                .map(([item, count]) => `${item}: ${count}`)
                .join(', ');

              return (
                <AccordionItem key={`batch-${batchIndex}`} value={`batch-${batchIndex}`}>
                  <AccordionTrigger>
                    Batch {batchIndex + 1} [{summaryText}] (from {batch.length} Orders)
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {batch.map((order) => (
                        <Card key={order.id} className="p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">
                              {L.order}{order.orderNumber || order.id} - {L.table} {order.tableNumber} - {order.waiterName || L.unknownWaiter}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {order.items
                              .filter(item =>
                                (item.requiresButcher !== undefined ? item.requiresButcher : false) &&
                                !(item.butcherReady !== undefined ? item.butcherReady : false)
                              )
                              .map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="flex items-center justify-between p-2 bg-gray-50 rounded"
                                >
                                  <span>{item.quantity}x {item.name}</span>
                                  <Button
                                    size="sm"
                                    className="bg-green-600 hover:bg-green-700"
                                    onClick={() => handlePrepped(order.id, item.name)}
                                  >
                                    {L.prepped}
                                  </Button>
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
            {pendingBatches.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                {L.noPending}
              </div>
            )}
          </Accordion>
        </div>

        <button
          onClick={() => window.location.reload()}
          aria-label="Refresh"
          className="fixed bottom-20 right-4 bg-orange-600 text-white rounded-full p-3 shadow-lg"
          title="Refresh"
        >
          <RefreshCcw className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
}

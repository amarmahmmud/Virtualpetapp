import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { DollarSign, Smartphone } from "lucide-react";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

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

export function CashierHistory() {
  const [confirmedOrders, setConfirmedOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ordersQuery = query(
      collection(db, 'orders'),
      where('status', '==', 'confirmed'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
      const ordersData: Order[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        ordersData.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
        } as Order);
      });
      setConfirmedOrders(ordersData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Create batches of 10 orders each
  const createBatches = (orderList: Order[]) => {
    const batches = [];
    for (let i = 0; i < orderList.length; i += 10) {
      batches.push(orderList.slice(i, i + 10));
    }
    return batches;
  };

  // Calculate batch summary (total amount and payment methods)
  const getBatchSummary = (batchOrders: Order[]) => {
    const totalAmount = batchOrders.reduce((sum, order) =>
      sum + order.items.reduce((itemSum, item) => itemSum + item.price * item.quantity, 0), 0
    );
    const cashCount = batchOrders.filter(order => order.paymentMethod === 'cash').length;
    const mobileCount = batchOrders.filter(order => order.paymentMethod === 'mobile').length;
    return { totalAmount, cashCount, mobileCount };
  };

  const batches = createBatches(confirmedOrders);

  if (loading) {
    return (
      <div className="p-4 space-y-4 pb-20">
        <h2>My Activity History</h2>
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading activity history...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4 pb-20">
      <h2>My Activity History</h2>

      {confirmedOrders.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          No confirmed payments yet
        </div>
      ) : (
        <Accordion type="single" collapsible>
          {batches.map((batch, batchIndex) => {
            const batchSummary = getBatchSummary(batch);
            const summaryText = `$${batchSummary.totalAmount.toFixed(2)} (${batchSummary.cashCount} Cash, ${batchSummary.mobileCount} Mobile)`;

            return (
              <AccordionItem key={`cashier-batch-${batchIndex}`} value={`cashier-batch-${batchIndex}`}>
                <AccordionTrigger>
                  History Batch {batchIndex + 1} [{summaryText}] (from {batch.length} Orders)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    {batch.map((order) => {
                      const totalAmount = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
                      const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
                      const itemSummary = order.items.map(item => `${item.quantity}x ${item.name}`).join(', ');

                      return (
                        <Card key={order.id} className="p-3 opacity-75">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">
                              Order #{order.orderNumber || order.id} - Table {order.tableNumber} - {order.waiterName || 'Unknown Waiter'}
                            </span>
                            <Badge className="bg-green-600">Confirmed</Badge>
                          </div>
                          <div className="space-y-1 mb-2">
                            <div className="text-sm text-gray-600">
                              ✓ {itemCount} items: {itemSummary}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Total: ${totalAmount.toFixed(2)}</span>
                              <Badge className={`${
                                order.paymentMethod === "cash" ? "bg-green-600" : "bg-blue-600"
                              } text-white border-0 flex items-center gap-1`}>
                                {order.paymentMethod === "cash" ? (
                                  <>
                                    <DollarSign className="w-3 h-3" />
                                    Cash
                                  </>
                                ) : (
                                  <>
                                    <Smartphone className="w-3 h-3" />
                                    Mobile Banking
                                  </>
                                )}
                              </Badge>
                            </div>
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
          {batches.length === 0 && (
            <div className="text-center text-gray-500 py-4">
              No confirmed payments yet
            </div>
          )}
        </Accordion>
      )}
    </div>
  );
}

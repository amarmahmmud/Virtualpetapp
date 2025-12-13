import { useState } from "react";
import { OrderCard } from "../OrderCard";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";

interface Order {
  id: string;
  orderNumber?: number;
  tableNumber: number;
  status: "pending" | "in-kitchen" | "at-bar" | "ready" | "picked" | "paid" | "confirmed";
  items: { name: string; quantity: number; price: number }[];
  timeElapsed: string;
  createdAt: Date;
}

interface MyOrdersProps {
  orders: Order[];
  onMarkAsPaid: (orderId: string, paymentMethod: "cash" | "mobile") => void;
  onPickUp: (orderId: string) => void;
  onCancelOrder?: (orderId: string) => void;
}

export function MyOrders({ orders, onMarkAsPaid, onPickUp, onCancelOrder }: MyOrdersProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const getTotalPrice = (items: { price: number; quantity: number }[]) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleMarkAsPaid = (method: "cash" | "mobile") => {
    if (selectedOrder) {
      onMarkAsPaid(selectedOrder.id, method);
      setShowPaymentOptions(false);
      setSelectedOrder(null);
    }
  };

  const activeOrders = orders.filter(
    (order) => order.status !== "confirmed"
  );

  return (
    <div className="p-4 space-y-4 pb-20">
      <h2>My Orders</h2>

      {activeOrders.length === 0 ? (
        <Card className="p-8 text-center text-gray-500">
          No active orders
        </Card>
      ) : (
        <div className="space-y-3">
          {activeOrders.map((order) => (
            <OrderCard
              key={order.id}
              orderId={order.id}
              orderNumber={order.orderNumber}
              tableNumber={order.tableNumber}
              status={order.status}
              itemCount={order.items.length}
              timeElapsed={order.timeElapsed}
              onClick={() => setSelectedOrder(order)}
            />
          ))}
        </div>
      )}

      <Dialog open={!!selectedOrder && !showPaymentOptions} onOpenChange={(open) => !open && setSelectedOrder(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order #{selectedOrder?.orderNumber || selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Table {selectedOrder.tableNumber}</p>
                <Badge className={`mt-2 ${
                  selectedOrder.status === "ready" ? "bg-green-500" :
                  selectedOrder.status === "picked" ? "bg-blue-500" :
                  selectedOrder.status === "in-kitchen" ? "bg-orange-500" :
                  "bg-gray-500"
                } text-white border-0`}>
                  {selectedOrder.status === "ready" ? "Ready for Pickup" :
                   selectedOrder.status === "picked" ? "Picked Up" :
                   selectedOrder.status === "in-kitchen" ? "In Kitchen" :
                   selectedOrder.status === "paid" ? "Paid" : "Pending"}
                </Badge>
              </div>

              <div>
                <p className="mb-2">Items:</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-gray-700">
                      <span>{item.quantity}x {item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>${getTotalPrice(selectedOrder.items).toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2">
                {selectedOrder.status !== "paid" && selectedOrder.status !== "confirmed" && onCancelOrder && (
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() => onCancelOrder(selectedOrder.id)}
                  >
                    Cancel Order
                  </Button>
                )}
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    alert(`Bill generated for Order #${selectedOrder.orderNumber || selectedOrder.id}\nTotal: $${getTotalPrice(selectedOrder.items).toFixed(2)}`);
                  }}
                >
                  Generate Final Bill
                </Button>
                {selectedOrder.status === "ready" && (
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => onPickUp(selectedOrder.id)}
                  >
                    Pick Up
                  </Button>
                )}
                {(selectedOrder.status === "picked" || selectedOrder.status === "paid") && (
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => setShowPaymentOptions(true)}
                  >
                    {selectedOrder.status === "paid" ? "Paid" : "Mark as Paid"}
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showPaymentOptions} onOpenChange={setShowPaymentOptions}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Payment Method</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleMarkAsPaid("cash")}
            >
              Cash
            </Button>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => handleMarkAsPaid("mobile")}
            >
              Mobile Banking
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

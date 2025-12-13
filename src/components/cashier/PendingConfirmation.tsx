import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { DollarSign, Smartphone, Check, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface Order {
  id: string;
  orderNumber?: number;
  tableNumber: number;
  status: "pending" | "in-kitchen" | "at-bar" | "ready" | "picked" | "paid" | "confirmed";
  items: { name: string; quantity: number; price: number }[];
  timeElapsed: string;
  createdAt: Date;
  paymentMethod?: "cash" | "mobile";
  waiterName?: string;
  paymentImageUrl?: string;
  paymentImageName?: string;
  paymentSubmittedAt?: Date;
  paymentStatus?: "pending_approval" | "approved" | "rejected";
}

interface PendingConfirmationProps {
  orders: Order[];
  onConfirmPayment: (orderId: string) => void;
  onApproveMobilePayment: (orderId: string) => void;
  onRejectMobilePayment: (orderId: string) => void;
}

export function PendingConfirmation({ orders, onConfirmPayment, onApproveMobilePayment, onRejectMobilePayment }: PendingConfirmationProps) {
  // Get orders that need confirmation (cash payments or mobile banking pending approval)
  const ordersNeedingConfirmation = orders.filter(order =>
    order.status === "paid" && (
      order.paymentMethod === "cash" ||
      (order.paymentMethod === "mobile" && order.paymentStatus === "pending_approval")
    )
  );

  const getTotalPrice = (items: { price: number; quantity: number }[]) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4 space-y-4 pb-20">
      <h2>Pending Payment Confirmation</h2>

      {ordersNeedingConfirmation.length === 0 ? (
        <Card className="p-8 text-center text-gray-500">
          No pending confirmations
        </Card>
      ) : (
        <div className="space-y-3">
          {ordersNeedingConfirmation.map((order) => (
            <Card key={order.id} className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p>Order #{order.orderNumber || order.id}</p>
                    <p className="text-gray-600 mt-1">Table {order.tableNumber}</p>
                    {order.waiterName && (
                      <p className="text-gray-600 text-sm">Waiter: {order.waiterName}</p>
                    )}
                  </div>
                  <Badge className={`${
                    order.paymentMethod === "cash" ? "bg-green-600" : "bg-blue-600"
                  } text-white border-0`}>
                    {order.paymentMethod === "cash" ? (
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3" />
                        Cash
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Smartphone className="w-3 h-3" />
                        Mobile Banking
                      </span>
                    )}
                  </Badge>
                </div>

                <div className="border-t pt-3">
                  <p className="text-gray-600">Total Amount</p>
                  <p className="mt-1">${getTotalPrice(order.items).toFixed(2)}</p>
                </div>

                {order.paymentMethod === "mobile" && order.paymentImageUrl && (
                  <div className="border-t pt-3">
                    <p className="text-gray-600 mb-2">Payment Proof:</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          View Payment Image
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Payment Proof - Order #{order.orderNumber || order.id}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <img
                            src={order.paymentImageUrl}
                            alt="Payment proof"
                            className="w-full rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}

                <div className="flex gap-2">
                  {order.paymentMethod === "mobile" && order.paymentStatus === "pending_approval" ? (
                    <>
                      <Button
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={() => onApproveMobilePayment(order.id)}
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        variant="destructive"
                        className="flex-1"
                        onClick={() => onRejectMobilePayment(order.id)}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => onConfirmPayment(order.id)}
                    >
                      Confirm Payment
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

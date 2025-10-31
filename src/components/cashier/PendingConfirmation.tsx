import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { DollarSign, Smartphone } from "lucide-react";

interface PendingOrder {
  id: string;
  tableNumber: number;
  totalAmount: number;
  paymentMethod: "cash" | "mobile";
}

interface PendingConfirmationProps {
  pendingOrders: PendingOrder[];
  onConfirmPayment: (orderId: string) => void;
}

export function PendingConfirmation({ pendingOrders, onConfirmPayment }: PendingConfirmationProps) {
  return (
    <div className="p-4 space-y-4 pb-20">
      <h2>Pending Payment Confirmation</h2>

      {pendingOrders.length === 0 ? (
        <Card className="p-8 text-center text-gray-500">
          No pending confirmations
        </Card>
      ) : (
        <div className="space-y-3">
          {pendingOrders.map((order) => (
            <Card key={order.id} className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p>Order #{order.id}</p>
                    <p className="text-gray-600 mt-1">Table {order.tableNumber}</p>
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
                  <p className="mt-1">${order.totalAmount.toFixed(2)}</p>
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => onConfirmPayment(order.id)}
                >
                  Confirm Payment
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

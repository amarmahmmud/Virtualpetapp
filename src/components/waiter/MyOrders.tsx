import { useState, useRef } from "react";
import { OrderCard } from "../OrderCard";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { getLocale } from "../../i18n";

interface Order {
  id: string;
  orderNumber?: number;
  tableNumber: number;
  status: "pending" | "in-kitchen" | "at-bar" | "ready" | "picked" | "paid" | "confirmed";
  items: { name: string; quantity: number; price: number }[];
  timeElapsed: string;
  createdAt: Date;
  waiterName?: string;
  pickedUpBy?: string;
}

interface MyOrdersProps {
  orders: Order[];
  onMarkAsPaid: (orderId: string, paymentMethod: "cash" | "mobile") => void;
  onPickUp: (orderId: string) => void;
  onCancelOrder?: (orderId: string) => void;
  onMobileBankingPayment: (orderId: string, paymentImage: File) => Promise<void> | void;
}

export function MyOrders({ orders, onMarkAsPaid, onPickUp, onCancelOrder, onMobileBankingPayment }: MyOrdersProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const lc = getLocale();
  const L = {
    title: lc === 'am' ? 'የእኔ ትዕዛዞች' : 'My Orders',
    table: lc === 'am' ? '' : '',
    items: lc === 'am' ? 'አይነቶች' : 'Items',
    total: lc === 'am' ? 'ጠቅላላ' : 'Total',
    empty: lc === 'am' ? 'ምንም ትዕዛዞች የሉም' : 'No active orders',
    cancelOrder: lc === 'am' ? 'ትዕዛዙን ሰርዝ' : 'Cancel Order',
    generateBill: lc === 'am' ? 'የመጨረሻ ሂሳብ' : 'Generate Final Bill',
    pickUp: lc === 'am' ? 'ውሰድ' : 'Pick Up',
    markAsPaid: lc === 'am' ? 'እንደተከፈለ ምልክት አድርግ' : 'Mark as Paid',
    paid: lc === 'am' ? 'ክፍያ ተከፍሏል' : 'Paid',
    paymentMethodTitle: lc === 'am' ? 'የክፍያ ዘዴን ይምረጡ' : 'Select Payment Method',
    cash: lc === 'am' ? 'ጥሬ ገንዘብ' : 'Cash',
    mobileUpload: lc === 'am' ? 'ሞባይል ባንክ ክፍያ (ማስረጃ ያስገቡ)' : 'Mobile Banking (Upload Proof)',
  };
  const STATUS = {
    ready: lc === 'am' ? 'ለመውሰድ ዝግጁ ነው' : 'Ready for Pickup',
    picked: lc === 'am' ? 'ተወሰደ' : 'Picked Up',
    inKitchen: lc === 'am' ? 'ማዕድ ቤት ውስጥ' : 'In Kitchen',
    paid: lc === 'am' ? 'ክፍያ ተከፍሏል' : 'Paid',
    pending: lc === 'am' ? 'በመጠባበቅ ላይ' : 'Pending',
  };


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
      <h2>{L.title}</h2>

      {activeOrders.length === 0 ? (
        <Card className="p-8 text-center text-gray-500">
          {L.empty}
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
              waiterName={order.waiterName}
              pickedUpBy={order.pickedUpBy}
              onClick={() => setSelectedOrder(order)}
            />
          ))}
        </div>
      )}

      <Dialog open={!!selectedOrder && !showPaymentOptions} onOpenChange={(open: boolean) => { if (!open) setSelectedOrder(null); }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order #{selectedOrder?.orderNumber || selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">{L.table} {selectedOrder.tableNumber}</p>
                <Badge className={`mt-2 ${
                  selectedOrder.status === "ready" ? "bg-green-500" :
                  selectedOrder.status === "picked" ? "bg-blue-500" :
                  selectedOrder.status === "in-kitchen" ? "bg-orange-500" :
                  selectedOrder.status === "paid" ? "bg-green-600" :
                  "bg-gray-500"
                } text-white border-0`}>
                  {selectedOrder.status === "ready" ? STATUS.ready :
                   selectedOrder.status === "picked" ? STATUS.picked :
                   selectedOrder.status === "in-kitchen" ? STATUS.inKitchen :
                   selectedOrder.status === "paid" ? STATUS.paid : STATUS.pending}
                </Badge>
              </div>

              <div>
                <p className="mb-2">{L.items}:</p>
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
                  <span>{L.total}:</span>
                  <span>${getTotalPrice(selectedOrder.items).toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2">
                {selectedOrder.status !== "paid" && selectedOrder.status !== "confirmed" && onCancelOrder && (
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() => {
                      onCancelOrder(selectedOrder.id);
                      setShowPaymentOptions(false);
                      setSelectedOrder(null);
                    }}
                  >
                    {L.cancelOrder}
                  </Button>
                )}
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    alert(`${lc === 'am'
                      ? `ለትዕዛዝ #${selectedOrder.orderNumber || selectedOrder.id} መጨረሻ ቢል ተፈጥሯል\n${L.total}: $${getTotalPrice(selectedOrder.items).toFixed(2)}`
                      : `Bill generated for Order #${selectedOrder.orderNumber || selectedOrder.id}\n${L.total}: $${getTotalPrice(selectedOrder.items).toFixed(2)}`
                    }`);
                    setShowPaymentOptions(false);
                    setSelectedOrder(null);
                  }}
                >
                  {L.generateBill}
                </Button>
                {selectedOrder.status === "ready" && (
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => {
                      onPickUp(selectedOrder.id);
                      setSelectedOrder(null);
                    }}
                  >
                    {L.pickUp}
                  </Button>
                )}
                {(selectedOrder.status === "picked" || selectedOrder.status === "paid") && (
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => setShowPaymentOptions(true)}
                  >
                    {selectedOrder.status === "paid" ? L.paid : L.markAsPaid}
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
            <DialogTitle>{L.paymentMethodTitle}</DialogTitle>
          </DialogHeader>

          {/* Hidden file input for mobile banking proof */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file && selectedOrder) {
                try {
                  await onMobileBankingPayment(selectedOrder.id, file);
                } finally {
                  // Close the payment options + detail dialog for snappy UX
                  setShowPaymentOptions(false);
                  setSelectedOrder(null);
                  // reset input value to allow re-uploading same file next time
                  e.currentTarget.value = "";
                }
              }
            }}
          />

          <div className="space-y-3">
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleMarkAsPaid("cash")}
            >
              {L.cash}
            </Button>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                fileInputRef.current?.click();
              }}
            >
              {L.mobileUpload}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

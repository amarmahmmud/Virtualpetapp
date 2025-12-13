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

interface ReadyOrdersProps {
  orders: Order[];
  onMarkAsPaid: (orderId: string, paymentMethod: "cash" | "mobile") => void;
  onMobileBankingPayment: (orderId: string, paymentImage: File) => void;
}

export function ReadyOrders({ orders, onMarkAsPaid, onMobileBankingPayment }: ReadyOrdersProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showMobileBanking, setShowMobileBanking] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMobileBankingSubmit = () => {
    if (selectedOrder && selectedImage) {
      onMobileBankingPayment(selectedOrder.id, selectedImage);
      setShowMobileBanking(false);
      setShowPaymentOptions(false);
      setSelectedOrder(null);
      setSelectedImage(null);
      setImagePreview(null);
    }
  };

  const openCamera = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment'; // Opens camera on mobile
    input.onchange = (e) => handleImageSelect(e as any);
    input.click();
  };

  const openGallery = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => handleImageSelect(e as any);
    input.click();
  };

  return (
    <div className="p-4 space-y-4 pb-20">
      <h2>Ready Orders</h2>

      {orders.length === 0 ? (
        <Card className="p-8 text-center text-gray-500">
          No ready orders
        </Card>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => (
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
                <Badge className="mt-2 bg-green-500 text-white border-0">
                  Ready for Pickup
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
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    alert(`Bill generated for Order #${selectedOrder.orderNumber || selectedOrder.id}\nTotal: $${getTotalPrice(selectedOrder.items).toFixed(2)}`);
                  }}
                >
                  Generate Bill
                </Button>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => setShowPaymentOptions(true)}
                >
                  Mark as Paid
                </Button>
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
              onClick={() => {
                setShowPaymentOptions(false);
                setShowMobileBanking(true);
              }}
            >
              Mobile Banking
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showMobileBanking} onOpenChange={(open) => {
        if (!open) {
          setShowMobileBanking(false);
          setSelectedImage(null);
          setImagePreview(null);
        }
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mobile Banking Payment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">Please capture or select the mobile banking payment proof:</p>

            {!imagePreview ? (
              <div className="space-y-3">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={openCamera}
                >
                  📷 Open Camera
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={openGallery}
                >
                  🖼️ Choose from Gallery
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="border rounded-lg p-2">
                  <img
                    src={imagePreview}
                    alt="Payment proof"
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setSelectedImage(null);
                      setImagePreview(null);
                    }}
                  >
                    Retake
                  </Button>
                  <Button
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={handleMobileBankingSubmit}
                  >
                    Submit Payment
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
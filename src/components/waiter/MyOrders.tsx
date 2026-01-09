import React from "react";
import { useState, useRef, useEffect } from "react";
import { OrderCard } from "../OrderCard";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { getLocale } from "../../i18n";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { t } from "../../i18n";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

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

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl?: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

interface MyOrdersProps {
  orders: Order[];
  onMarkAsPaid: (orderId: string, paymentMethod: "cash" | "mobile") => void;
  onPickUp: (orderId: string) => void;
  onCancelOrder?: (orderId: string) => void;
  onMobileBankingPayment: (orderId: string, paymentImage: File) => Promise<void> | void;
  onUpdateOrder: (orderId: string, additionalItems: CartItem[]) => void;
}

export function MyOrders({ orders, onMarkAsPaid, onPickUp, onCancelOrder, onMobileBankingPayment, onUpdateOrder }: MyOrdersProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showAddItems, setShowAddItems] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'food' | 'drinks' | 'desserts'>('food');

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

  // Fetch menu items from Firebase
  useEffect(() => {
    const menuQuery = query(collection(db, 'menu'), orderBy('name'));
    const unsubscribe = onSnapshot(menuQuery, (snapshot) => {
      const menuData: MenuItem[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        menuData.push({
          id: doc.id,
          name: data.name,
          price: data.price,
          category: data.category,
          imageUrl: data.imageUrl,
        });
      });
      setMenuItems(menuData);
    });

    return () => unsubscribe();
  }, []);


  const getTotalPrice = (items: { price: number; quantity: number }[]) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(
      cart
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const getCartTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  const getCartTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = () => {
    if (selectedOrder) {
      onUpdateOrder(selectedOrder.id, cart);
      setCart([]);
      setShowAddItems(false);
      setSelectedOrder(null);
    }
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

      <Dialog open={!!selectedOrder && !showPaymentOptions} onOpenChange={(open: boolean) => { if (!open) { if (showAddItems) setShowAddItems(false); else setSelectedOrder(null); } }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{showAddItems ? `Add Items to Order #${selectedOrder?.orderNumber || selectedOrder?.id}` : `Order #${selectedOrder?.orderNumber || selectedOrder?.id}`}</DialogTitle>
          </DialogHeader>
          {showAddItems ? (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search menu items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => setSelectedCategory('food')}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${selectedCategory === 'food' ? 'bg-orange-600 text-white shadow-md' : 'bg-white border border-gray-200 hover:border-orange-300'}`}
                >
                  🥘 Food
                </Button>
                <Button
                  onClick={() => setSelectedCategory('drinks')}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${selectedCategory === 'drinks' ? 'bg-purple-600 text-white shadow-md' : 'bg-white border border-gray-200 hover:border-purple-300'}`}
                >
                  🍹 Drinks
                </Button>
                <Button
                  onClick={() => setSelectedCategory('desserts')}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${selectedCategory === 'desserts' ? 'bg-amber-600 text-white shadow-md' : 'bg-white border border-gray-200 hover:border-amber-300'}`}
                >
                  🍰 Desserts
                </Button>
              </div>
              {(() => {
                const categoriesToShow = selectedCategory === 'food' ? ['Food-Butcher', 'Food'] : selectedCategory === 'drinks' ? ['Drinks'] : ['Desserts'];
                return categoriesToShow.map((category) => {
                  const itemsInCategory = filteredItems.filter((item) => item.category === category);
                  if (itemsInCategory.length === 0) return null;
                  return (
                    <div key={category} className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">{category}</h3>
                      <div className="space-y-3">
                        {itemsInCategory.map((item) => (
                          <Card
                            key={item.id}
                            className="p-4 cursor-pointer hover:bg-gray-50"
                            onClick={() => addToCart(item)}
                          >
                            <div className="flex flex-col items-center gap-3">
                              {item.imageUrl ? (
                                <img
                                  src={item.imageUrl}
                                  alt={item.name}
                                  width={100}
                                  height={100}
                                  className="h-[100px] w-[100px] object-contain rounded border flex-shrink-0"
                                />
                              ) : (
                                <div className="h-[100px] w-[100px] rounded border bg-gray-100 flex items-center justify-center text-gray-400 text-xs flex-shrink-0">
                                  No Image
                                </div>
                              )}
                              <div className="text-center min-w-0">
                                <p className="text-sm font-medium truncate">{item.name}</p>
                                <p className="text-sm text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                              </div>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                Add
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                });
              })()}
              {cart.length > 0 && (
                <div className="mt-4 p-4 bg-white border-t">
                  <h3 className="text-lg font-semibold mb-3">Cart ({getCartTotalItems()} items)</h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {cart.map((item) => (
                      <Card key={item.id} className="p-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            {item.imageUrl ? (
                              <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="h-10 w-10 object-cover rounded border flex-shrink-0"
                              />
                            ) : (
                              <div className="h-10 w-10 rounded border bg-gray-100 flex items-center justify-center text-gray-400 text-xs flex-shrink-0">
                                No Image
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="truncate">{item.name}</p>
                              <p className="text-gray-600">${item.price.toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              -
                            </Button>
                            <span>{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t">
                    <div className="flex justify-between mb-3">
                      <span>Total:</span>
                      <span>${getCartTotalPrice().toFixed(2)}</span>
                    </div>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={handleSubmit}
                    >
                      Add to Order
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : selectedOrder && (
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

              {selectedOrder.status !== "confirmed" && (
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => setShowAddItems(true)}
                >
                  Add Items
                </Button>
              )}

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

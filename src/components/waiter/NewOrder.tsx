import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Search, ShoppingCart, ArrowLeft } from "lucide-react";
import { Badge } from "../ui/badge";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

interface NewOrderProps {
  tableNumber: number;
  onBack: () => void;
  onSubmitOrder: (tableNumber: number, items: CartItem[]) => void;
}

const menuItems: MenuItem[] = [
  { id: "1", name: "Grilled Steak", price: 24.99, category: "Food" },
  { id: "2", name: "BBQ Ribs", price: 22.99, category: "Food" },
  { id: "3", name: "Caesar Salad", price: 12.99, category: "Food" },
  { id: "4", name: "Pasta Carbonara", price: 16.99, category: "Food" },
  { id: "5", name: "Soda", price: 2.99, category: "Drinks" },
  { id: "6", name: "Fresh Juice", price: 4.99, category: "Drinks" },
  { id: "7", name: "Coffee", price: 3.99, category: "Drinks" },
  { id: "8", name: "Chocolate Cake", price: 8.99, category: "Desserts" },
  { id: "9", name: "Ice Cream", price: 6.99, category: "Desserts" },
];

export function NewOrder({ tableNumber, onBack, onSubmitOrder }: NewOrderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [sheetOpen, setSheetOpen] = useState(false);

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

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = () => {
    onSubmitOrder(tableNumber, cart);
    setCart([]);
    onBack();
  };

  return (
    <div className="pb-24">
      <div className="p-4 bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h2>New Order - Table {tableNumber}</h2>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="Food" className="p-4">
        <TabsList className="w-full">
          <TabsTrigger value="Food" className="flex-1">Food</TabsTrigger>
          <TabsTrigger value="Drinks" className="flex-1">Drinks</TabsTrigger>
          <TabsTrigger value="Desserts" className="flex-1">Desserts</TabsTrigger>
        </TabsList>

        {["Food", "Drinks", "Desserts"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-3 mt-4">
            {filteredItems
              .filter((item) => item.category === category)
              .map((item) => (
                <Card
                  key={item.id}
                  className="p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => addToCart(item)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p>{item.name}</p>
                      <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Add
                    </Button>
                  </div>
                </Card>
              ))}
          </TabsContent>
        ))}
      </Tabs>

      {cart.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 p-4 bg-white border-t">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <ShoppingCart className="w-4 h-4 mr-2" />
                View Cart ({getTotalItems()} items)
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader>
                <SheetTitle>Order Cart - Table {tableNumber}</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-3 overflow-y-auto max-h-[calc(80vh-200px)]">
                {cart.map((item) => (
                  <Card key={item.id} className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p>{item.name}</p>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-3">
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
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
                <div className="flex justify-between mb-3">
                  <span>Total:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleSubmit}
                >
                  Submit Order
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </div>
  );
}

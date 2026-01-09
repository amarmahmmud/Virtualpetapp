import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Search, ShoppingCart, ArrowLeft, LogOut } from "lucide-react";
import { Badge } from "../ui/badge";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { t } from "../../i18n";

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

interface NewOrderProps {
  tableNumber: number;
  onBack: () => void;
  onSubmitOrder: (tableNumber: number, items: CartItem[]) => void;
  onLogout: () => void;
}

export function NewOrder({ tableNumber, onBack, onSubmitOrder, onLogout }: NewOrderProps) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<'food' | 'drinks' | 'desserts'>('food');

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
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

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

  if (loading) {
    return (
      <div className="pb-24">
        <div className="p-4 bg-white border-b sticky top-0 z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h2>{t('createOrder')}{tableNumber > 0 ? ` - ${t('table')} ${tableNumber}` : ''}</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={onLogout} className="text-gray-600">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading menu...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <div className="p-4 bg-white border-b sticky top-0 z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h2>{t('createOrder')}{tableNumber > 0 ? ` - ${t('table')} ${tableNumber}` : ''}</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onLogout} className="text-gray-600">
            <LogOut className="w-4 h-4" />
          </Button>
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

      <div className="p-4">
        <div className="flex gap-2 mb-4">
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
      </div>

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
                <SheetTitle>{t('order')}{tableNumber > 0 ? ` - ${t('table')} ${tableNumber}` : ''}</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-3 overflow-y-auto max-h-[calc(80vh-200px)]">
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


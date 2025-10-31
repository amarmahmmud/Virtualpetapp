import { useState, useEffect } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { ManagerDashboard } from "./components/manager/Dashboard";
import { MenuManagement } from "./components/manager/MenuManagement";
import { InventoryManagement } from "./components/manager/InventoryManagement";
import { StaffManagement } from "./components/manager/StaffManagement";
import { ManagerHistory } from "./components/manager/ManagerHistory";
import { Tables } from "./components/waiter/Tables";
import { NewOrder } from "./components/waiter/NewOrder";
import { MyOrders } from "./components/waiter/MyOrders";
import { WaiterHistory } from "./components/waiter/WaiterHistory";
import { PendingConfirmation } from "./components/cashier/PendingConfirmation";
import { CashierHistory } from "./components/cashier/CashierHistory";
import { ButcherWorkstation } from "./components/butcher/ButcherWorkstation";
import { KitchenWorkstation } from "./components/kitchen/KitchenWorkstation";
import { LayoutDashboard, UtensilsCrossed, Package, Users, History, Table2, ShoppingBag, DollarSign } from "lucide-react";

type Role = "manager" | "waiter" | "cashier" | "butcher" | "kitchen" | null;

interface CartItem {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
}

interface Order {
  id: string;
  tableNumber: number;
  status: "pending" | "in-kitchen" | "ready" | "paid" | "confirmed";
  items: { name: string; quantity: number; price: number }[];
  timeElapsed: string;
  createdAt: Date;
  paymentMethod?: "cash" | "mobile";
}

interface PendingOrder {
  id: string;
  tableNumber: number;
  totalAmount: number;
  paymentMethod: "cash" | "mobile";
}

const userRoles: Record<string, Role> = {
  "manager@bistro.com": "manager",
  "waiter@bistro.com": "waiter",
  "cashier@bistro.com": "cashier",
  "butcher@bistro.com": "butcher",
  "kitchen@bistro.com": "kitchen",
};

export default function App() {
  const [currentRole, setCurrentRole] = useState<Role>(null);
  const [currentScreen, setCurrentScreen] = useState("default");
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "98",
      tableNumber: 2,
      status: "ready",
      items: [
        { name: "Grilled Steak", quantity: 1, price: 24.99 },
        { name: "Caesar Salad", quantity: 1, price: 12.99 },
      ],
      timeElapsed: "12m",
      createdAt: new Date(Date.now() - 12 * 60000),
    },
    {
      id: "99",
      tableNumber: 5,
      status: "in-kitchen",
      items: [
        { name: "BBQ Ribs", quantity: 2, price: 22.99 },
      ],
      timeElapsed: "8m",
      createdAt: new Date(Date.now() - 8 * 60000),
    },
  ]);
  const [pendingOrders, setPendingOrders] = useState<PendingOrder[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) => ({
          ...order,
          timeElapsed: `${Math.floor((Date.now() - order.createdAt.getTime()) / 60000)}m`,
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = (email: string, password: string) => {
    const role = userRoles[email];
    if (role) {
      setCurrentRole(role);
      setCurrentScreen("default");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setCurrentRole(null);
    setCurrentScreen("default");
  };

  const handleSubmitOrder = (tableNumber: number, items: CartItem[]) => {
    const newOrder: Order = {
      id: (Math.floor(Math.random() * 900) + 100).toString(),
      tableNumber,
      status: "in-kitchen",
      items: items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      timeElapsed: "0m",
      createdAt: new Date(),
    };
    setOrders([...orders, newOrder]);
    setSelectedTable(null);
    setCurrentScreen("my-orders");
  };

  const handleMarkAsPaid = (orderId: string, paymentMethod: "cash" | "mobile") => {
    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? { ...order, status: "paid" as const, paymentMethod }
          : order
      )
    );

    const order = orders.find((o) => o.id === orderId);
    if (order) {
      const totalAmount = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setPendingOrders([
        ...pendingOrders,
        {
          id: orderId,
          tableNumber: order.tableNumber,
          totalAmount,
          paymentMethod,
        },
      ]);
    }
  };

  const handleConfirmPayment = (orderId: string) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: "confirmed" as const } : order
      )
    );
    setPendingOrders(pendingOrders.filter((order) => order.id !== orderId));
  };

  if (!currentRole) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Manager View
  if (currentRole === "manager") {
    return (
      <div className="min-h-screen bg-gray-50">
        {currentScreen === "default" && <ManagerDashboard />}
        {currentScreen === "menu" && <MenuManagement />}
        {currentScreen === "inventory" && <InventoryManagement />}
        {currentScreen === "staff" && <StaffManagement />}
        {currentScreen === "history" && <ManagerHistory />}

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="flex justify-around">
            <button
              onClick={() => setCurrentScreen("default")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "default" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="mt-1">Dashboard</span>
            </button>
            <button
              onClick={() => setCurrentScreen("menu")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "menu" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span className="mt-1">Menu</span>
            </button>
            <button
              onClick={() => setCurrentScreen("inventory")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "inventory" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Package className="w-5 h-5" />
              <span className="mt-1">Inventory</span>
            </button>
            <button
              onClick={() => setCurrentScreen("staff")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "staff" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Users className="w-5 h-5" />
              <span className="mt-1">Staff</span>
            </button>
            <button
              onClick={() => setCurrentScreen("history")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "history" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <History className="w-5 h-5" />
              <span className="mt-1">History</span>
            </button>
          </div>
        </nav>
      </div>
    );
  }

  // Waiter View
  if (currentRole === "waiter") {
    if (selectedTable !== null) {
      return (
        <NewOrder
          tableNumber={selectedTable}
          onBack={() => setSelectedTable(null)}
          onSubmitOrder={handleSubmitOrder}
        />
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        {currentScreen === "default" && (
          <Tables onSelectTable={setSelectedTable} />
        )}
        {currentScreen === "my-orders" && (
          <MyOrders orders={orders} onMarkAsPaid={handleMarkAsPaid} />
        )}
        {currentScreen === "history" && <WaiterHistory />}

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="flex justify-around">
            <button
              onClick={() => setCurrentScreen("default")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "default" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Table2 className="w-5 h-5" />
              <span className="mt-1">Tables</span>
            </button>
            <button
              onClick={() => setCurrentScreen("my-orders")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "my-orders" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="mt-1">My Orders</span>
            </button>
            <button
              onClick={() => setCurrentScreen("history")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "history" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <History className="w-5 h-5" />
              <span className="mt-1">History</span>
            </button>
          </div>
        </nav>
      </div>
    );
  }

  // Cashier View
  if (currentRole === "cashier") {
    return (
      <div className="min-h-screen bg-gray-50">
        {currentScreen === "default" && (
          <PendingConfirmation
            pendingOrders={pendingOrders}
            onConfirmPayment={handleConfirmPayment}
          />
        )}
        {currentScreen === "history" && <CashierHistory />}

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="flex justify-around">
            <button
              onClick={() => setCurrentScreen("default")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "default" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <DollarSign className="w-5 h-5" />
              <span className="mt-1">Pending</span>
            </button>
            <button
              onClick={() => setCurrentScreen("history")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "history" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <History className="w-5 h-5" />
              <span className="mt-1">History</span>
            </button>
          </div>
        </nav>
      </div>
    );
  }

  // Butcher View
  if (currentRole === "butcher") {
    return <ButcherWorkstation />;
  }

  // Kitchen View
  if (currentRole === "kitchen") {
    return <KitchenWorkstation />;
  }

  return null;
}

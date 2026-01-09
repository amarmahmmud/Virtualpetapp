import React from "react";
import { NewOrder } from "../components/waiter/NewOrder";
import { MyOrders } from "../components/waiter/MyOrders";
import { ReadyOrders } from "../components/waiter/ReadyOrders";
import { WaiterDashboard } from "../components/waiter/WaiterDashboard";
import { UtensilsCrossed, ShoppingBag, LogOut } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
  requiresButcher?: boolean;
  butcherReady?: boolean;
}

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
  paymentImageUrl?: string;
  paymentImageName?: string;
  paymentSubmittedAt?: Date;
  paymentStatus?: "pending_approval" | "approved" | "rejected";
  pickedUpBy?: string;
  pickedUpAt?: Date;
}

interface WaiterRoutesProps {
  selectedTable: number | null;
  setSelectedTable: (table: number | null) => void;
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
  orders: Order[];
  readyOrders: Order[];
  handleMarkAsPaid: (orderId: string, paymentMethod: "cash" | "mobile") => void;
  handlePickUp: (orderId: string) => void;
  handleCancelOrder: (orderId: string) => void;
  handleMobileBankingPayment: (orderId: string, paymentImage: File) => void;
  handleSubmitOrder: (tableNumber: number, items: CartItem[]) => void;
  t: (key: string) => string;
  handleLogout: () => void;
}

export const WaiterRoutes: React.FC<WaiterRoutesProps> = ({
  selectedTable,
  setSelectedTable,
  currentScreen,
  setCurrentScreen,
  orders,
  readyOrders,
  handleMarkAsPaid,
  handlePickUp,
  handleCancelOrder,
  handleMobileBankingPayment,
  handleSubmitOrder,
  t,
  handleLogout,
}) => {
  if (selectedTable !== null) {
    return (
      <NewOrder
        tableNumber={selectedTable}
        onBack={() => setSelectedTable(null)}
        onSubmitOrder={handleSubmitOrder}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === "default" && (
        <WaiterDashboard
          orders={orders}
          readyOrders={readyOrders}
          onCreateOrder={() => setSelectedTable(0)}
          onViewReadyOrders={() => setCurrentScreen("ready-orders")}
          onViewMyOrders={() => setCurrentScreen("my-orders")}
        />
      )}
      {currentScreen === "ready-orders" && (
        <ReadyOrders
          orders={readyOrders}
          onMarkAsPaid={handleMarkAsPaid}
          onMobileBankingPayment={handleMobileBankingPayment}
          onPickUp={handlePickUp}
        />
      )}
      {currentScreen === "my-orders" && (
        <MyOrders
          orders={orders}
          onMarkAsPaid={handleMarkAsPaid}
          onPickUp={handlePickUp}
          onCancelOrder={handleCancelOrder}
          onMobileBankingPayment={handleMobileBankingPayment}
        />
      )}

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around">
          <button
            onClick={() => setSelectedTable(0)}
            className={`flex-1 flex flex-col items-center py-3 ${
              selectedTable === 0 ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span className="mt-1">{t('createOrder')}</span>
          </button>
          <button
            onClick={() => setCurrentScreen("ready-orders")}
            className={`flex-1 flex flex-col items-center py-3 ${
              currentScreen === "ready-orders" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="mt-1">{t('ready')}</span>
          </button>
          <button
            onClick={() => setCurrentScreen("my-orders")}
            className={`flex-1 flex flex-col items-center py-3 ${
              currentScreen === "my-orders" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span className="mt-1">{t('orders')}</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex-1 flex flex-col items-center py-3 text-gray-600"
          >
            <LogOut className="w-5 h-5" />
            <span className="mt-1">{t('logout')}</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
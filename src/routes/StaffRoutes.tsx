import React from "react";
import { PendingConfirmation } from "../components/cashier/PendingConfirmation";
import { CashierHistory } from "../components/cashier/CashierHistory";
import { ButcherWorkstation } from "../components/butcher/ButcherWorkstation";
import { KitchenWorkstation } from "../components/kitchen/KitchenWorkstation";
import { BarWorkstation } from "../components/bar/BarWorkstation";
import { DollarSign, History } from "lucide-react";

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
}

interface StaffRoutesProps {
  role: "cashier" | "butcher" | "kitchen" | "bar";
  orders: Order[];
  pendingOrders: Order[];
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
  onConfirmPayment: (orderId: string) => void;
  onApproveMobilePayment: (orderId: string) => void;
  onRejectMobilePayment: (orderId: string) => void;
  onLogout: () => void;
  t: (key: string) => string;
}

export const StaffRoutes: React.FC<StaffRoutesProps> = ({
  role,
  orders,
  pendingOrders,
  currentScreen,
  setCurrentScreen,
  onConfirmPayment,
  onApproveMobilePayment,
  onRejectMobilePayment,
  onLogout,
  t,
}) => {
  if (role === "cashier") {
    return (
      <div className="min-h-screen bg-gray-50">
        {currentScreen === "default" && (
          <PendingConfirmation
            orders={pendingOrders}
            onConfirmPayment={onConfirmPayment}
            onApproveMobilePayment={onApproveMobilePayment}
            onRejectMobilePayment={onRejectMobilePayment}
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
              <span className="mt-1">{t('pending')}</span>
            </button>
            <button
              onClick={() => setCurrentScreen("history")}
              className={`flex-1 flex flex-col items-center py-3 ${
                currentScreen === "history" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <History className="w-5 h-5" />
              <span className="mt-1">{t('history')}</span>
            </button>
          </div>
        </nav>
      </div>
    );
  }

  if (role === "butcher") {
    return <ButcherWorkstation orders={orders} onLogout={onLogout} />;
  }

  if (role === "kitchen") {
    return <KitchenWorkstation orders={orders} onLogout={onLogout} />;
  }

  if (role === "bar") {
    return <BarWorkstation orders={orders} onLogout={onLogout} />;
  }

  return null;
};
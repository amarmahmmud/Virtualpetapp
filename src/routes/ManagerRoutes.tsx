import { ManagerDashboard } from "../components/manager/Dashboard";
import { MenuManagement } from "../components/manager/MenuManagement";
import { InventoryManagement } from "../components/manager/InventoryManagement";
import { StaffManagement } from "../components/manager/StaffManagement";
import { ManagerHistory } from "../components/manager/ManagerHistory";
import { LayoutDashboard, UtensilsCrossed, Package, Users, History, LogOut } from "lucide-react";

interface ManagerRoutesProps {
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
  notifications: { id: string; type: 'low_stock'; title: string; message: string; timestamp: Date }[];
  handleDismissNotification: (id: string) => void;
  isOnline: boolean;
  orders: any[];
  handleLogout: () => void;
  t: (key: string) => string;
}

export const ManagerRoutes: React.FC<ManagerRoutesProps> = ({
  currentScreen,
  setCurrentScreen,
  notifications,
  handleDismissNotification,
  isOnline,
  orders,
  handleLogout,
  t,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === "default" && (
        <ManagerDashboard
          notifications={notifications}
          onDismissNotification={handleDismissNotification}
          isOnline={isOnline}
          ordersData={orders}
        />
      )}
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
            <span className="mt-1">{t('dashboard')}</span>
          </button>
          <button
            onClick={() => setCurrentScreen("menu")}
            className={`flex-1 flex flex-col items-center py-3 ${
              currentScreen === "menu" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span className="mt-1">{t('menu')}</span>
          </button>
          <button
            onClick={() => setCurrentScreen("inventory")}
            className={`flex-1 flex flex-col items-center py-3 ${
              currentScreen === "inventory" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <Package className="w-5 h-5" />
            <span className="mt-1">{t('inventory')}</span>
          </button>
          <button
            onClick={() => setCurrentScreen("staff")}
            className={`flex-1 flex flex-col items-center py-3 ${
              currentScreen === "staff" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="mt-1">{t('staff')}</span>
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
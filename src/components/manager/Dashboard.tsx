import { Card } from "../ui/card";
import { DollarSign, ShoppingBag, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { day: "Mon", sales: 2400 },
  { day: "Tue", sales: 1398 },
  { day: "Wed", sales: 9800 },
  { day: "Thu", sales: 3908 },
  { day: "Fri", sales: 4800 },
  { day: "Sat", sales: 3800 },
  { day: "Sun", sales: 4300 },
];

export function ManagerDashboard() {
  return (
    <div className="p-4 space-y-4 pb-20">
      <h2>Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Today's Sales</p>
              <p className="mt-2">$4,350</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Orders</p>
              <p className="mt-2">47</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Avg. Order Value</p>
              <p className="mt-2">$92.55</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-4">
        <h3 className="mb-4">Weekly Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#007AFF" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-4">
        <h3 className="mb-4">Popular Items Today</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-2 border-b">
            <span>Grilled Steak</span>
            <span className="text-gray-600">24 orders</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span>Caesar Salad</span>
            <span className="text-gray-600">18 orders</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span>Chocolate Cake</span>
            <span className="text-gray-600">15 orders</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

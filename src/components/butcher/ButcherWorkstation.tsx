import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { HistoryListItem } from "../HistoryListItem";
import { History, ChefHat } from "lucide-react";
import { Badge } from "../ui/badge";

interface ButcherItem {
  orderId: string;
  itemName: string;
  quantity: number;
}

const initialItems: ButcherItem[] = [
  { orderId: "101", itemName: "Steak", quantity: 1 },
  { orderId: "102", itemName: "Steak", quantity: 2 },
  { orderId: "102", itemName: "Ribs", quantity: 1 },
  { orderId: "103", itemName: "Steak", quantity: 1 },
];

const historyData = [
  { timestamp: "10:45 AM", description: "Steak (x1) for Order 101 prepped" },
  { timestamp: "10:32 AM", description: "Ribs (x2) for Order 99 prepped" },
  { timestamp: "10:20 AM", description: "Steak (x3) for Order 98 prepped" },
];

export function ButcherWorkstation() {
  const [items, setItems] = useState<ButcherItem[]>(initialItems);

  const handlePrepped = (orderId: string, itemName: string) => {
    setItems(items.filter(
      (item) => !(item.orderId === orderId && item.itemName === itemName)
    ));
  };

  const getProductionSummary = () => {
    const summary: Record<string, number> = {};
    items.forEach((item) => {
      summary[item.itemName] = (summary[item.itemName] || 0) + item.quantity;
    });
    return summary;
  };

  const groupedByOrder = items.reduce((acc, item) => {
    if (!acc[item.orderId]) {
      acc[item.orderId] = [];
    }
    acc[item.orderId].push(item);
    return acc;
  }, {} as Record<string, ButcherItem[]>);

  const summary = getProductionSummary();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <h2>Butcher Workstation</h2>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <History className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Activity History</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-2">
              {historyData.map((item, index) => (
                <HistoryListItem
                  key={index}
                  timestamp={item.timestamp}
                  description={item.description}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4 bg-orange-50 border-orange-200">
          <h3 className="mb-3">Production Summary</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(summary).map(([item, count]) => (
              <Badge key={item} className="bg-orange-600 text-white border-0 px-4 py-2">
                {item}: {count}
              </Badge>
            ))}
          </div>
        </Card>

        <div>
          <h3 className="mb-3">To-Do List</h3>
          <div className="space-y-4">
            {Object.entries(groupedByOrder).map(([orderId, orderItems]) => (
              <Card key={orderId} className="p-4">
                <p className="mb-3 text-gray-600">Order #{orderId}</p>
                <div className="space-y-2">
                  {orderItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded"
                    >
                      <span>{item.quantity}x {item.itemName}</span>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handlePrepped(item.orderId, item.itemName)}
                      >
                        Prepped
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Clock } from "lucide-react";
import { Button } from "./ui/button";

interface OrderCardProps {
  orderId: string;
  orderNumber?: number;
  tableNumber: number;
  status: "pending" | "in-kitchen" | "at-bar" | "ready" | "picked" | "paid" | "confirmed";
  itemCount: number;
  timeElapsed: string;
  waiterName?: string;
  pickedUpBy?: string;
  onClick?: () => void;
  onPickUp?: (orderId: string) => void;
}

const statusColors = {
  pending: "bg-orange-500",
  "in-kitchen": "bg-orange-500",
  "at-bar": "bg-purple-500",
  ready: "bg-green-500",
  picked: "bg-purple-500",
  paid: "bg-blue-500",
  confirmed: "bg-gray-500",
};

const statusLabels = {
  pending: "Pending",
  "in-kitchen": "In Kitchen",
  "at-bar": "At Bar",
  ready: "Ready for Pickup",
  picked: "Picked Up",
  paid: "Paid",
  confirmed: "Confirmed",
};

export function OrderCard({
  orderId,
  orderNumber,
  tableNumber,
  status,
  itemCount,
  timeElapsed,
  waiterName,
  pickedUpBy,
  onClick,
  onPickUp,
}: OrderCardProps) {
  const handlePickUpClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPickUp) {
      onPickUp(orderId);
    }
  };

  return (
    <Card
      className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-gray-500">Order #{orderNumber || orderId}</p>
          <p className="mt-1">Table {tableNumber}</p>
          {waiterName && <p className="text-sm text-gray-600">Waiter: {waiterName}</p>}
          {pickedUpBy && <p className="text-sm text-gray-600">Picked by: {pickedUpBy}</p>}
        </div>
        <Badge className={`${statusColors[status]} text-white border-0`}>
          {statusLabels[status]}
        </Badge>
      </div>
      <div className="flex items-center justify-between mt-3 text-gray-600">
        <span>{itemCount} items</span>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{timeElapsed}</span>
        </div>
      </div>
      {status === 'ready' && onPickUp && (
        <Button
          className="w-full mt-4 bg-orange-600 hover:bg-orange-700"
          onClick={handlePickUpClick}
        >
          Mark as Picked
        </Button>
      )}
    </Card>
  );
}

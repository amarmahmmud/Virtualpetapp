import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Clock } from "lucide-react";

interface OrderCardProps {
  orderId: string;
  tableNumber: number;
  status: "pending" | "in-kitchen" | "ready" | "paid" | "confirmed";
  itemCount: number;
  timeElapsed: string;
  onClick?: () => void;
}

const statusColors = {
  pending: "bg-orange-500",
  "in-kitchen": "bg-orange-500",
  ready: "bg-green-500",
  paid: "bg-blue-500",
  confirmed: "bg-gray-500",
};

const statusLabels = {
  pending: "Pending",
  "in-kitchen": "In Kitchen",
  ready: "Ready for Pickup",
  paid: "Paid",
  confirmed: "Confirmed",
};

export function OrderCard({
  orderId,
  tableNumber,
  status,
  itemCount,
  timeElapsed,
  onClick,
}: OrderCardProps) {
  return (
    <Card
      className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-gray-500">Order #{orderId}</p>
          <p className="mt-1">Table {tableNumber}</p>
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
    </Card>
  );
}

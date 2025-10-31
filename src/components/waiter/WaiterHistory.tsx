import { HistoryListItem } from "../HistoryListItem";

const waiterHistoryData = [
  { timestamp: "10:45 AM", description: "Order 101 submitted for Table 5" },
  { timestamp: "10:35 AM", description: "Payment for Order 98 marked as paid - Cash" },
  { timestamp: "10:28 AM", description: "Order 99 submitted for Table 3" },
  { timestamp: "10:15 AM", description: "Payment for Order 96 marked as paid - Mobile Banking" },
  { timestamp: "10:05 AM", description: "Order 97 submitted for Table 1" },
  { timestamp: "09:50 AM", description: "Payment for Order 95 marked as paid - Cash" },
];

export function WaiterHistory() {
  return (
    <div className="p-4 space-y-4 pb-20">
      <h2>My Activity History</h2>

      <div className="space-y-2">
        {waiterHistoryData.map((item, index) => (
          <HistoryListItem
            key={index}
            timestamp={item.timestamp}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

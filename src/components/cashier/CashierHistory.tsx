import { HistoryListItem } from "../HistoryListItem";

const cashierHistoryData = [
  { timestamp: "10:40 AM", description: "Payment for Order 98 confirmed - Cash" },
  { timestamp: "10:15 AM", description: "Payment for Order 96 confirmed - Mobile Banking" },
  { timestamp: "09:50 AM", description: "Payment for Order 95 confirmed - Cash" },
  { timestamp: "09:30 AM", description: "Payment for Order 93 confirmed - Mobile Banking" },
  { timestamp: "09:10 AM", description: "Payment for Order 91 confirmed - Cash" },
];

export function CashierHistory() {
  return (
    <div className="p-4 space-y-4 pb-20">
      <h2>My Activity History</h2>

      <div className="space-y-2">
        {cashierHistoryData.map((item, index) => (
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

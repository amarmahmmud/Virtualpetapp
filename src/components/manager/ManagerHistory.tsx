import { useState } from "react";
import { HistoryListItem } from "../HistoryListItem";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const historyData = [
  { timestamp: "10:45 AM", role: "Butcher", description: "Steak (x1) for Order 101 prepped" },
  { timestamp: "10:43 AM", role: "Waiter", description: "Order 101 submitted for Table 5" },
  { timestamp: "10:40 AM", role: "Cashier", description: "Payment for Order 98 confirmed - Cash" },
  { timestamp: "10:38 AM", role: "Kitchen", description: "Order 98 marked ready for pickup" },
  { timestamp: "10:35 AM", role: "Waiter", description: "Order 98 marked as paid" },
  { timestamp: "10:32 AM", role: "Butcher", description: "Ribs (x2) for Order 99 prepped" },
  { timestamp: "10:30 AM", role: "Kitchen", description: "Order 97 marked ready for pickup" },
  { timestamp: "10:28 AM", role: "Waiter", description: "Order 99 submitted for Table 3" },
];

export function ManagerHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const filteredHistory = historyData.filter((item) => {
    const matchesSearch = item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || item.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="p-4 space-y-4 pb-20">
      <h2>Activity History</h2>

      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search history..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-32">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="Waiter">Waiter</SelectItem>
            <SelectItem value="Cashier">Cashier</SelectItem>
            <SelectItem value="Butcher">Butcher</SelectItem>
            <SelectItem value="Kitchen">Kitchen</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        {filteredHistory.map((item, index) => (
          <HistoryListItem
            key={index}
            timestamp={item.timestamp}
            description={item.description}
            role={item.role}
          />
        ))}
      </div>
    </div>
  );
}

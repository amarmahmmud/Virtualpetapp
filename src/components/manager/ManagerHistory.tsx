import { useState, useEffect } from "react";
import { HistoryListItem } from "../HistoryListItem";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../firebase";

interface Activity {
  id: string;
  timestamp: Date;
  role: string;
  description: string;
}

export function ManagerHistory() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Fetch activities from Firebase
  useEffect(() => {
    const activitiesQuery = query(
      collection(db, 'activities'),
      orderBy('timestamp', 'desc'),
      limit(100) // Limit to prevent loading too much data
    );

    const unsubscribe = onSnapshot(activitiesQuery, (snapshot) => {
      const activitiesData: Activity[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        activitiesData.push({
          id: doc.id,
          timestamp: data.timestamp?.toDate() || new Date(),
          role: data.role || 'Unknown',
          description: data.description || '',
        });
      });
      setActivities(activitiesData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredHistory = activities.filter((item) => {
    const matchesSearch = item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || item.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  if (loading) {
    return (
      <div className="p-4 pb-20">
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading activity history...</p>
          </div>
        </div>
      </div>
    );
  }

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
            <SelectItem value="Bar">Bar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        {filteredHistory.length > 0 ? (
          filteredHistory.map((item) => (
            <HistoryListItem
              key={item.id}
              timestamp={item.timestamp.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
              })}
              description={item.description}
              role={item.role}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No activities found matching your filters.</p>
            {activities.length === 0 && (
              <p className="text-sm mt-2">Activities will appear here as staff perform actions in the restaurant.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

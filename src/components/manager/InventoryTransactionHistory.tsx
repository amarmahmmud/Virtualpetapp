import { useState, useEffect, useMemo } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { History, Search, Filter, User, Package, TrendingUp, TrendingDown, ArrowUpDown } from "lucide-react";
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { db } from "../../firebase";

interface Transaction {
  id: string;
  inventoryId: string;
  inventoryName: string;
  type: "deduction" | "restoration" | "addition" | "adjustment";
  quantity: number;
  previousQuantity: number;
  newQuantity: number;
  orderId?: string;
  tableNumber?: number;
  userId?: string;
  userName?: string;
  userRole?: string;
  timestamp: Date;
  reason?: string;
}

interface InventoryTransactionHistoryProps {
  inventoryId?: string; // If provided, show only transactions for this specific inventory item
}

export function InventoryTransactionHistory({ inventoryId }: InventoryTransactionHistoryProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter and search state
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "deduction" | "restoration" | "addition" | "adjustment">("all");
  const [userFilter, setUserFilter] = useState("all");
  const [dateRange, setDateRange] = useState<"all" | "today" | "week" | "month">("all");
  const [sortBy, setSortBy] = useState<"timestamp" | "quantity" | "user">("timestamp");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Fetch transactions from Firebase
  useEffect(() => {
    let transactionsQuery = query(collection(db, 'inventory_transactions'), orderBy('timestamp', 'desc'));
    
    if (inventoryId) {
      transactionsQuery = query(
        collection(db, 'inventory_transactions'),
        where('inventoryId', '==', inventoryId),
        orderBy('timestamp', 'desc')
      );
    }

    const unsubscribe = onSnapshot(transactionsQuery, (snapshot) => {
      const transactionsData: Transaction[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        transactionsData.push({
          id: doc.id,
          inventoryId: data.inventoryId,
          inventoryName: data.inventoryName,
          type: data.type,
          quantity: data.quantity,
          previousQuantity: data.previousQuantity,
          newQuantity: data.newQuantity,
          orderId: data.orderId,
          tableNumber: data.tableNumber,
          userId: data.userId,
          userName: data.userName || data.staffName || "System",
          userRole: data.userRole,
          timestamp: data.timestamp?.toDate() || new Date(),
          reason: data.reason,
        });
      });
      setTransactions(transactionsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [inventoryId]);

  // Filter and sort transactions
  const filteredTransactions = useMemo(() => {
    let filtered = transactions.filter(transaction => {
      const matchesSearch = transaction.inventoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           transaction.userName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           transaction.orderId?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = typeFilter === "all" || transaction.type === typeFilter;
      
      const matchesUser = userFilter === "all" || transaction.userName === userFilter;
      
      let matchesDate = true;
      if (dateRange !== "all") {
        const now = new Date();
        const transactionDate = new Date(transaction.timestamp);
        
        switch (dateRange) {
          case "today":
            matchesDate = transactionDate.toDateString() === now.toDateString();
            break;
          case "week":
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            matchesDate = transactionDate >= weekAgo;
            break;
          case "month":
            const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            matchesDate = transactionDate >= monthAgo;
            break;
        }
      }

      return matchesSearch && matchesType && matchesUser && matchesDate;
    });

    // Sort transactions
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case "timestamp":
          aValue = a.timestamp.getTime();
          bValue = b.timestamp.getTime();
          break;
        case "quantity":
          aValue = a.quantity;
          bValue = b.quantity;
          break;
        case "user":
          aValue = a.userName || "";
          bValue = b.userName || "";
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [transactions, searchQuery, typeFilter, userFilter, dateRange, sortBy, sortOrder]);

  // Get unique users for filter
  const uniqueUsers = useMemo(() => {
    const users = new Set(transactions.map(t => t.userName).filter(Boolean));
    return Array.from(users).sort();
  }, [transactions]);

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "deduction":
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case "restoration":
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "addition":
        return <TrendingUp className="w-4 h-4 text-blue-500" />;
      case "adjustment":
        return <ArrowUpDown className="w-4 h-4 text-orange-500" />;
      default:
        return <Package className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "deduction":
        return "bg-red-50 border-red-200";
      case "restoration":
        return "bg-green-50 border-green-200";
      case "addition":
        return "bg-blue-50 border-blue-200";
      case "adjustment":
        return "bg-orange-50 border-orange-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const formatQuantityChange = (transaction: Transaction) => {
    const change = transaction.newQuantity - transaction.previousQuantity;
    const sign = change > 0 ? "+" : "";
    return `${sign}${change.toFixed(1)}`;
  };

  if (loading) {
    return (
      <div className="p-4">
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading transaction history...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5" />
          <h3 className="text-lg font-semibold">
            {inventoryId ? "Item Transaction History" : "All Transaction History"}
          </h3>
        </div>
        <Badge variant="outline" className="text-sm">
          {filteredTransactions.length} transactions
        </Badge>
      </div>

      {/* Search and Filter Controls */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search items, users, orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={typeFilter} onValueChange={(value: any) => setTypeFilter(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Transaction Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="deduction">Deductions</SelectItem>
              <SelectItem value="restoration">Restorations</SelectItem>
              <SelectItem value="addition">Additions</SelectItem>
              <SelectItem value="adjustment">Adjustments</SelectItem>
            </SelectContent>
          </Select>

          <Select value={userFilter} onValueChange={setUserFilter}>
            <SelectTrigger>
              <User className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by User" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              {uniqueUsers.map(user => (
                <SelectItem key={user} value={user}>{user}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={dateRange} onValueChange={(value: any) => setDateRange(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">Last 7 Days</SelectItem>
              <SelectItem value="month">Last 30 Days</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="timestamp">Sort by Time</SelectItem>
                <SelectItem value="quantity">Sort by Quantity</SelectItem>
                <SelectItem value="user">Sort by User</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? "↑" : "↓"}
            </Button>
          </div>
        </div>
      </Card>

      {/* Transaction Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Deductions</p>
              <p className="text-xl font-bold text-red-600">
                {transactions.filter(t => t.type === "deduction").length}
              </p>
            </div>
            <TrendingDown className="w-8 h-8 text-red-500" />
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Additions</p>
              <p className="text-xl font-bold text-green-600">
                {transactions.filter(t => t.type === "addition").length}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Order Related</p>
              <p className="text-xl font-bold text-blue-600">
                {transactions.filter(t => t.orderId).length}
              </p>
            </div>
            <Package className="w-8 h-8 text-blue-500" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Users</p>
              <p className="text-xl font-bold text-purple-600">
                {uniqueUsers.length}
              </p>
            </div>
            <User className="w-8 h-8 text-purple-500" />
          </div>
        </Card>
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {filteredTransactions.length === 0 ? (
          <Card className="p-8 text-center">
            <History className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No transactions found matching your criteria.</p>
          </Card>
        ) : (
          filteredTransactions.map((transaction) => (
            <Card key={transaction.id} className={`p-4 ${getTransactionColor(transaction.type)}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  {getTransactionIcon(transaction.type)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium">{transaction.inventoryName}</p>
                      <Badge variant="outline" className="text-xs">
                        {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Quantity Change:</span>
                        <div className="flex items-center gap-1">
                          <span>{formatQuantityChange(transaction)}</span>
                          <span className="text-xs">
                            ({transaction.previousQuantity} → {transaction.newQuantity})
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium">User:</span>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{transaction.userName}</span>
                          {transaction.userRole && (
                            <Badge variant="outline" className="text-xs ml-1">
                              {transaction.userRole}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {transaction.orderId && (
                        <div>
                          <span className="font-medium">Order:</span>
                          <div className="flex items-center gap-1">
                            <Package className="w-3 h-3" />
                            <span>#{transaction.orderId}</span>
                            {transaction.tableNumber && (
                              <span>Table {transaction.tableNumber}</span>
                            )}
                          </div>
                        </div>
                      )}

                      <div>
                        <span className="font-medium">Time:</span>
                        <div>
                          <div>{transaction.timestamp.toLocaleDateString()}</div>
                          <div className="text-xs">{transaction.timestamp.toLocaleTimeString()}</div>
                        </div>
                      </div>
                    </div>

                    {transaction.reason && (
                      <div className="mt-2 p-2 bg-white bg-opacity-50 rounded text-sm">
                        <span className="font-medium">Reason:</span> {transaction.reason}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
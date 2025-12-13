import { useState, useEffect, useMemo } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Alert, AlertDescription } from "../ui/alert";
import { ShoppingCart, TrendingDown, AlertTriangle, Calendar, Package, BarChart3 } from "lucide-react";
import { collection, onSnapshot, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  threshold: number;
  unit: string;
  lastUpdated: Date;
}

interface ReorderSuggestion {
  inventoryId: string;
  inventoryName: string;
  currentQuantity: number;
  threshold: number;
  unit: string;
  suggestedOrderQuantity: number;
  urgency: "low" | "medium" | "high" | "critical";
  reason: string;
  daysUntilStockout: number;
  averageDailyUsage: number;
  lastOrderDate?: Date;
  supplierInfo?: string;
}

interface ReorderSuggestionsProps {
  maxSuggestions?: number;
}

export function ReorderSuggestions({ maxSuggestions = 10 }: ReorderSuggestionsProps) {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [suggestions, setSuggestions] = useState<ReorderSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [urgencyFilter, setUrgencyFilter] = useState<"all" | "critical" | "high" | "medium" | "low">("all");
  const [timeframe, setTimeframe] = useState<"7" | "14" | "30">("14");

  // Fetch inventory items
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'inventory'), orderBy('name')),
      (snapshot) => {
        const items: InventoryItem[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          items.push({
            id: doc.id,
            name: data.name,
            quantity: data.quantity || 0,
            threshold: data.threshold || 10,
            unit: data.unit || 'pieces',
            lastUpdated: data.lastUpdated?.toDate() || new Date(),
          });
        });
        setInventoryItems(items);
      }
    );
    return () => unsubscribe();
  }, []);

  // Calculate reorder suggestions based on usage patterns
  const calculateReorderSuggestions = async () => {
    if (inventoryItems.length === 0) return;

    const suggestionsData: ReorderSuggestion[] = [];

    for (const item of inventoryItems) {
      // Fetch transaction history for this item to calculate usage patterns
      const transactionsQuery = query(
        collection(db, 'inventory_transactions'),
        where('inventoryId', '==', item.id),
        orderBy('timestamp', 'desc')
      );

      try {
        const transactionSnapshot = await getDocs(transactionsQuery);
        const transactions = transactionSnapshot.docs.map(doc => ({
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate() || new Date()
        }));

        // Calculate average daily usage over the past 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const recentTransactions = transactions.filter(t => t.timestamp >= thirtyDaysAgo);
        const deductionTransactions = recentTransactions.filter(t => t.type === 'deduction');

        let totalDeductions = 0;
        deductionTransactions.forEach(transaction => {
          totalDeductions += transaction.quantity || 0;
        });

        const averageDailyUsage = totalDeductions / 30;

        // Calculate days until stockout
        const daysUntilStockout = averageDailyUsage > 0 
          ? Math.floor(item.quantity / averageDailyUsage)
          : 999; // If no usage data, consider it as not needing reorder soon

        // Determine if reorder is needed
        const needsReorder = item.quantity <= item.threshold || daysUntilStockout <= parseInt(timeframe);

        if (needsReorder) {
          // Calculate suggested order quantity (enough for 30 days + buffer)
          const bufferDays = 7; // 1 week buffer
          const suggestedQuantity = Math.ceil((averageDailyUsage * (30 + bufferDays)) - item.quantity);
          const finalSuggestedQuantity = Math.max(suggestedQuantity, item.threshold * 2); // At least 2x threshold

          // Determine urgency
          let urgency: "low" | "medium" | "high" | "critical" = "low";
          if (item.quantity <= 0) {
            urgency = "critical";
          } else if (item.quantity <= item.threshold * 0.5 || daysUntilStockout <= 3) {
            urgency = "critical";
          } else if (item.quantity <= item.threshold || daysUntilStockout <= 7) {
            urgency = "high";
          } else if (daysUntilStockout <= 14) {
            urgency = "medium";
          }

          // Generate reason
          let reason = "";
          if (item.quantity <= 0) {
            reason = "Item is out of stock";
          } else if (item.quantity <= item.threshold) {
            reason = `Below reorder threshold (${item.quantity}/${item.threshold} ${item.unit})`;
          } else {
            reason = `Expected to run out in ${daysUntilStockout} days based on usage patterns`;
          }

          suggestionsData.push({
            inventoryId: item.id,
            inventoryName: item.name,
            currentQuantity: item.quantity,
            threshold: item.threshold,
            unit: item.unit,
            suggestedOrderQuantity: finalSuggestedQuantity,
            urgency,
            reason,
            daysUntilStockout,
            averageDailyUsage: Math.round(averageDailyUsage * 100) / 100,
            lastOrderDate: transactions.length > 0 ? transactions[0].timestamp : undefined,
          });
        }
      } catch (error) {
        console.error(`Error calculating suggestions for ${item.name}:`, error);
      }
    }

    // Sort by urgency and days until stockout
    suggestionsData.sort((a, b) => {
      const urgencyOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      const urgencyDiff = urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
      if (urgencyDiff !== 0) return urgencyDiff;
      return a.daysUntilStockout - b.daysUntilStockout;
    });

    setSuggestions(suggestionsData);
    setLoading(false);
  };

  useEffect(() => {
    calculateReorderSuggestions();
  }, [inventoryItems, timeframe]);

  // Filter suggestions by urgency
  const filteredSuggestions = useMemo(() => {
    if (urgencyFilter === "all") return suggestions;
    return suggestions.filter(s => s.urgency === urgencyFilter);
  }, [suggestions, urgencyFilter]);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "critical": return "bg-red-100 border-red-300 text-red-800";
      case "high": return "bg-orange-100 border-orange-300 text-orange-800";
      case "medium": return "bg-yellow-100 border-yellow-300 text-yellow-800";
      case "low": return "bg-blue-100 border-blue-300 text-blue-800";
      default: return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  const getUrgencyBadgeColor = (urgency: string) => {
    switch (urgency) {
      case "critical": return "bg-red-500 text-white";
      case "high": return "bg-orange-500 text-white";
      case "medium": return "bg-yellow-500 text-white";
      case "low": return "bg-blue-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "critical": return <AlertTriangle className="w-4 h-4" />;
      case "high": return <TrendingDown className="w-4 h-4" />;
      case "medium": return <Calendar className="w-4 h-4" />;
      case "low": return <Package className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const handleGeneratePurchaseOrder = (suggestion: ReorderSuggestion) => {
    // This would typically integrate with a purchase order system
    const purchaseOrder = {
      item: suggestion.inventoryName,
      quantity: suggestion.suggestedOrderQuantity,
      unit: suggestion.unit,
      urgency: suggestion.urgency,
      reason: suggestion.reason,
      generatedAt: new Date(),
    };

    console.log('Generated Purchase Order:', purchaseOrder);
    alert(`Purchase order generated for ${suggestion.inventoryName}:\nQuantity: ${suggestion.suggestedOrderQuantity} ${suggestion.unit}\nUrgency: ${suggestion.urgency.toUpperCase()}`);
  };

  const criticalCount = suggestions.filter(s => s.urgency === "critical").length;
  const highCount = suggestions.filter(s => s.urgency === "high").length;
  const totalItemsNeedingReorder = suggestions.length;

  if (loading) {
    return (
      <div className="p-4">
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Analyzing inventory and calculating reorder suggestions...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          <h3 className="text-lg font-semibold">Reorder Suggestions</h3>
        </div>
        <Badge variant="outline" className="text-sm">
          {filteredSuggestions.length} suggestions
        </Badge>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Critical Items</p>
              <p className="text-xl font-bold text-red-600">{criticalCount}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">High Priority</p>
              <p className="text-xl font-bold text-orange-600">{highCount}</p>
            </div>
            <TrendingDown className="w-8 h-8 text-orange-500" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Needing Reorder</p>
              <p className="text-xl font-bold text-blue-600">{totalItemsNeedingReorder}</p>
            </div>
            <ShoppingCart className="w-8 h-8 text-blue-500" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Forecast Period</p>
              <p className="text-xl font-bold text-purple-600">{timeframe} days</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-500" />
          </div>
        </Card>
      </div>

      {/* Controls */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Forecast Period:</label>
            <Select value={timeframe} onValueChange={(value: "7" | "14" | "30") => setTimeframe(value)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="14">14 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Filter by Urgency:</label>
            <Select value={urgencyFilter} onValueChange={(value: any) => setUrgencyFilter(value)}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Urgencies</SelectItem>
                <SelectItem value="critical">Critical Only</SelectItem>
                <SelectItem value="high">High & Above</SelectItem>
                <SelectItem value="medium">Medium & Above</SelectItem>
                <SelectItem value="low">Low Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={calculateReorderSuggestions} 
            variant="outline" 
            size="sm"
            className="ml-auto"
          >
            Refresh Analysis
          </Button>
        </div>
      </Card>

      {/* Critical Alert */}
      {criticalCount > 0 && (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Urgent:</strong> {criticalCount} item{criticalCount > 1 ? 's' : ''} {criticalCount > 1 ? 'are' : 'is'} out of stock or critically low. Immediate reorder recommended.
          </AlertDescription>
        </Alert>
      )}

      {/* Suggestions List */}
      <div className="space-y-3">
        {filteredSuggestions.length === 0 ? (
          <Card className="p-8 text-center">
            <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">
              {totalItemsNeedingReorder === 0 
                ? "No items need reordering based on current stock levels and usage patterns." 
                : "No suggestions match the current filter criteria."}
            </p>
          </Card>
        ) : (
          filteredSuggestions.slice(0, maxSuggestions).map((suggestion) => (
            <Card key={suggestion.inventoryId} className={`p-4 ${getUrgencyColor(suggestion.urgency)}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  {getUrgencyIcon(suggestion.urgency)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium">{suggestion.inventoryName}</h4>
                      <Badge className={`${getUrgencyBadgeColor(suggestion.urgency)} border-0 text-xs`}>
                        {suggestion.urgency.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Current Stock:</span>
                        <div className="flex items-center gap-1">
                          <span>{suggestion.currentQuantity} {suggestion.unit}</span>
                          <span className="text-gray-500">(threshold: {suggestion.threshold})</span>
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium text-gray-700">Suggested Order:</span>
                        <div className="font-medium text-green-700">
                          {suggestion.suggestedOrderQuantity} {suggestion.unit}
                        </div>
                      </div>

                      <div>
                        <span className="font-medium text-gray-700">Days Until Stockout:</span>
                        <div className="font-medium">
                          {suggestion.daysUntilStockout === 999 ? "No data" : `${suggestion.daysUntilStockout} days`}
                        </div>
                      </div>

                      <div>
                        <span className="font-medium text-gray-700">Avg. Daily Usage:</span>
                        <div>
                          {suggestion.averageDailyUsage} {suggestion.unit}/day
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 p-2 bg-white bg-opacity-50 rounded text-sm">
                      <span className="font-medium">Reason: </span>
                      {suggestion.reason}
                    </div>

                    {suggestion.lastOrderDate && (
                      <div className="mt-2 text-xs text-gray-600">
                        Last order: {suggestion.lastOrderDate.toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleGeneratePurchaseOrder(suggestion)}
                  size="sm"
                  className="ml-4"
                >
                  Generate PO
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>

      {filteredSuggestions.length > maxSuggestions && (
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Showing {maxSuggestions} of {filteredSuggestions.length} suggestions. 
            Adjust filters to see more specific items.
          </p>
        </div>
      )}
    </div>
  );
}
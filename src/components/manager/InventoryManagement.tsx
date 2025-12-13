import { useState, useEffect, useMemo } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Plus, Edit, Search, Filter, Download, Upload, History, Package } from "lucide-react";
import { Badge } from "../ui/badge";
import { collection, onSnapshot, query, orderBy, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { InventoryTransactionHistory } from "./InventoryTransactionHistory";

interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  threshold: number; // Low stock threshold
  linkedItems: string[]; // Menu items that use this ingredient
  lastUpdated: Date;
  createdAt: Date;
}


export function InventoryManagement() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingIngredient, setEditingIngredient] = useState<Ingredient | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    unit: "",
    threshold: "",
  });
  
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [stockFilter, setStockFilter] = useState<"all" | "low" | "out">("all");
  const [sortBy, setSortBy] = useState<"name" | "quantity" | "threshold" | "lastUpdated">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  
  // Bulk operations state
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [bulkOperation, setBulkOperation] = useState<"add" | "subtract" | "set" | null>(null);
  const [bulkValue, setBulkValue] = useState("");
  
  // Transaction history state
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);

  // Fetch ingredients from Firebase
  useEffect(() => {
    const ingredientsQuery = query(collection(db, 'inventory'), orderBy('name'));
    const unsubscribe = onSnapshot(ingredientsQuery, (snapshot) => {
      const ingredientsData: Ingredient[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        ingredientsData.push({
          id: doc.id,
          name: data.name || 'Unknown',
          quantity: data.quantity || 0,
          unit: data.unit || 'pieces',
          threshold: data.threshold || 10,
          linkedItems: data.linkedItems || [],
          lastUpdated: data.lastUpdated?.toDate() || new Date(),
          createdAt: data.createdAt?.toDate() || new Date(),
        });
      });
      setIngredients(ingredientsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getStockStatus = (quantity: number, threshold: number) => {
    if (quantity <= 0) return { label: "Out of Stock", color: "bg-red-600" };
    if (quantity <= threshold) return { label: "Low Stock", color: "bg-red-500" };
    if (quantity <= threshold * 2) return { label: "Medium", color: "bg-orange-500" };
    return { label: "In Stock", color: "bg-green-500" };
  };

  // Filter and sort ingredients
  const filteredAndSortedIngredients = useMemo(() => {
    let filtered = ingredients.filter(ingredient => {
      const matchesSearch = ingredient.name.toLowerCase().includes(searchQuery.toLowerCase());
      const status = getStockStatus(ingredient.quantity, ingredient.threshold);
      const matchesFilter =
        stockFilter === "all" ||
        (stockFilter === "low" && ingredient.quantity <= ingredient.threshold && ingredient.quantity > 0) ||
        (stockFilter === "out" && ingredient.quantity <= 0);
      
      return matchesSearch && matchesFilter;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case "name":
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case "quantity":
          aValue = a.quantity;
          bValue = b.quantity;
          break;
        case "threshold":
          aValue = a.threshold;
          bValue = b.threshold;
          break;
        case "lastUpdated":
          aValue = a.lastUpdated.getTime();
          bValue = b.lastUpdated.getTime();
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [ingredients, searchQuery, stockFilter, sortBy, sortOrder]);

  // Bulk operations handlers
  const handleSelectItem = (itemId: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedItems.size === filteredAndSortedIngredients.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(filteredAndSortedIngredients.map(item => item.id)));
    }
  };

  const handleBulkOperation = async () => {
    if (!bulkOperation || !bulkValue || selectedItems.size === 0) return;

    try {
      const bulkUpdatePromises = Array.from(selectedItems).map(async (itemId) => {
        const item = ingredients.find(ing => ing.id === itemId);
        if (!item) return;

        let newQuantity: number;
        switch (bulkOperation) {
          case "add":
            newQuantity = item.quantity + parseFloat(bulkValue);
            break;
          case "subtract":
            newQuantity = Math.max(0, item.quantity - parseFloat(bulkValue));
            break;
          case "set":
            newQuantity = parseFloat(bulkValue);
            break;
          default:
            return;
        }

        await updateDoc(doc(db, 'inventory', itemId), {
          quantity: newQuantity,
          lastUpdated: new Date(),
        });
      });

      await Promise.all(bulkUpdatePromises);
      setSelectedItems(new Set());
      setBulkOperation(null);
      setBulkValue("");
    } catch (error) {
      console.error('Error performing bulk operation:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingIngredient) {
        // Update existing ingredient
        await updateDoc(doc(db, 'inventory', editingIngredient.id), {
          name: formData.name,
          quantity: parseFloat(formData.quantity),
          unit: formData.unit,
          threshold: parseFloat(formData.threshold),
          lastUpdated: new Date(),
        });
      } else {
        // Add new ingredient
        await addDoc(collection(db, 'inventory'), {
          name: formData.name,
          quantity: parseFloat(formData.quantity),
          unit: formData.unit,
          threshold: parseFloat(formData.threshold),
          linkedItems: [],
          lastUpdated: new Date(),
          createdAt: new Date(),
        });
      }
      setDialogOpen(false);
      setFormData({ name: "", quantity: "", unit: "", threshold: "" });
      setEditingIngredient(null);
    } catch (error) {
      console.error('Error saving ingredient:', error);
    }
  };

  const openAddDialog = () => {
    setEditingIngredient(null);
    setFormData({ name: "", quantity: "", unit: "", threshold: "" });
    setDialogOpen(true);
  };

  const openEditDialog = (ingredient: Ingredient) => {
    setEditingIngredient(ingredient);
    setFormData({
      name: ingredient.name,
      quantity: ingredient.quantity.toString(),
      unit: ingredient.unit,
      threshold: ingredient.threshold.toString(),
    });
    setDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="p-4 pb-20">
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading inventory...</p>
          </div>
        </div>
      </div>
    );
  }

  const lowStockItems = ingredients.filter(ing => ing.quantity <= ing.threshold);

  return (
    <div className="p-4 space-y-4 pb-20">
      {lowStockItems.length > 0 && (
        <Card className="p-4 bg-red-50 border-red-200">
          <h3 className="text-red-800 font-medium mb-2">⚠️ Low Stock Alerts</h3>
          <div className="space-y-1">
            {lowStockItems.map(item => (
              <p key={item.id} className="text-red-700 text-sm">
                {item.name}: Only {item.quantity} {item.unit} remaining
              </p>
            ))}
          </div>
        </Card>
      )}

      <div className="flex items-center justify-between mb-4">
        <h2>Inventory Management</h2>
        <div className="flex gap-2">
          {selectedItems.size > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                  Bulk Update ({selectedItems.size})
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Bulk Update {selectedItems.size} Items</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label>Operation</Label>
                    <Select value={bulkOperation || ""} onValueChange={(value: "add" | "subtract" | "set") => setBulkOperation(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select operation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="add">Add Quantity</SelectItem>
                        <SelectItem value="subtract">Subtract Quantity</SelectItem>
                        <SelectItem value="set">Set Quantity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Value</Label>
                    <Input
                      type="number"
                      step="0.1"
                      value={bulkValue}
                      onChange={(e) => setBulkValue(e.target.value)}
                      placeholder="Enter value"
                    />
                  </div>
                  <Button onClick={handleBulkOperation} disabled={!bulkOperation || !bulkValue} className="w-full">
                    Apply to {selectedItems.size} items
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
          <Button 
            variant="outline" 
            onClick={() => setShowTransactionHistory(!showTransactionHistory)}
            className="bg-purple-50 text-purple-700 hover:bg-purple-100"
          >
            <History className="w-4 h-4 mr-2" />
            {showTransactionHistory ? "Hide History" : "View History"}
          </Button>
          <Button onClick={openAddDialog} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Ingredient
          </Button>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <Card className="p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={stockFilter} onValueChange={(value: "all" | "low" | "out") => setStockFilter(value)}>
            <SelectTrigger>
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="low">Low Stock</SelectItem>
              <SelectItem value="out">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={(value: "name" | "quantity" | "threshold" | "lastUpdated") => setSortBy(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="quantity">Sort by Quantity</SelectItem>
              <SelectItem value="threshold">Sort by Threshold</SelectItem>
              <SelectItem value="lastUpdated">Sort by Last Updated</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="flex items-center gap-2"
          >
            {sortOrder === "asc" ? "↑" : "↓"} {sortOrder === "asc" ? "Ascending" : "Descending"}
          </Button>
        </div>
        
        {selectedItems.size > 0 && (
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {selectedItems.size} of {filteredAndSortedIngredients.length} items selected
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setSelectedItems(new Set())}>
                Clear Selection
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={(open: boolean) => {
        setDialogOpen(open);
        if (!open) {
          setEditingIngredient(null);
          setFormData({ name: "", quantity: "", unit: "", threshold: "" });
        }
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingIngredient ? "Edit Ingredient" : "Add New Ingredient"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="ing-name">Ingredient Name</Label>
              <Input
                id="ing-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="unit">Unit</Label>
              <Input
                id="unit"
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                placeholder="e.g., kg, pieces, liters"
                required
              />
            </div>
            <div>
              <Label htmlFor="threshold">Low Stock Threshold</Label>
              <Input
                id="threshold"
                type="number"
                value={formData.threshold}
                onChange={(e) => setFormData({ ...formData, threshold: e.target.value })}
                placeholder="e.g., 10"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              {editingIngredient ? "Update Ingredient" : "Add Ingredient"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Filter Results Summary */}
      <div className="text-sm text-gray-600 mb-4">
        Showing {filteredAndSortedIngredients.length} of {ingredients.length} items
        {searchQuery && ` matching "${searchQuery}"`}
        {stockFilter !== "all" && ` filtered by ${stockFilter === "low" ? "low stock" : "out of stock"}`}
      </div>

      {/* Inventory Items List */}
      <div className="space-y-3">
        {filteredAndSortedIngredients.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500">
              {ingredients.length === 0 
                ? "No inventory items found. Add some ingredients to get started." 
                : "No items match your current filters."}
            </p>
            {ingredients.length === 0 && (
              <Button onClick={openAddDialog} className="mt-4 bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add First Ingredient
              </Button>
            )}
          </Card>
        ) : (
          <>
            {/* Select All Checkbox */}
            {filteredAndSortedIngredients.length > 0 && (
              <Card className="p-3 bg-gray-50">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedItems.size === filteredAndSortedIngredients.length && filteredAndSortedIngredients.length > 0}
                    onChange={handleSelectAll}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">
                    Select All ({filteredAndSortedIngredients.length} items)
                  </span>
                </label>
              </Card>
            )}

            {filteredAndSortedIngredients.map((ingredient) => {
              const status = getStockStatus(ingredient.quantity, ingredient.threshold);
              return (
                <Card key={ingredient.id} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <input
                        type="checkbox"
                        checked={selectedItems.has(ingredient.id)}
                        onChange={() => handleSelectItem(ingredient.id)}
                        className="mt-1 rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{ingredient.name}</p>
                        <p className="text-gray-600 mt-1">
                          {ingredient.quantity} {ingredient.unit}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Last updated: {ingredient.lastUpdated.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`${status.color} text-white border-0`}>
                        {status.label}
                      </Badge>
                      <Button variant="outline" size="sm" onClick={() => openEditDialog(ingredient)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  {ingredient.linkedItems.length > 0 && (
                    <div className="pt-3 border-t">
                      <p className="text-gray-600 mb-2">Linked to:</p>
                      <div className="flex flex-wrap gap-2">
                        {ingredient.linkedItems.map((item, idx) => (
                          <Badge key={idx} variant="outline">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </>
        )}
      </div>

      {/* Transaction History Section */}
      {showTransactionHistory && (
        <div className="mt-8 border-t pt-6">
          <InventoryTransactionHistory />
        </div>
      )}
    </div>
  );
}

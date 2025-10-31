import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Plus, Edit } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

const initialMenuItems: MenuItem[] = [
  { id: "1", name: "Grilled Steak", price: 24.99, category: "Food-Butcher" },
  { id: "2", name: "Caesar Salad", price: 12.99, category: "Food-Kitchen-Only" },
  { id: "3", name: "Chocolate Cake", price: 8.99, category: "Dessert" },
  { id: "4", name: "Soda", price: 2.99, category: "Drink" },
  { id: "5", name: "BBQ Ribs", price: 22.99, category: "Food-Butcher" },
];

export function MenuManagement() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Food-Kitchen-Only",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
      setMenuItems(
        menuItems.map((item) =>
          item.id === editingItem.id
            ? { ...item, name: formData.name, price: parseFloat(formData.price), category: formData.category }
            : item
        )
      );
    } else {
      setMenuItems([
        ...menuItems,
        {
          id: Date.now().toString(),
          name: formData.name,
          price: parseFloat(formData.price),
          category: formData.category,
        },
      ]);
    }
    setDialogOpen(false);
    setFormData({ name: "", price: "", category: "Food-Kitchen-Only" });
    setEditingItem(null);
  };

  const openAddDialog = () => {
    setEditingItem(null);
    setFormData({ name: "", price: "", category: "Food-Kitchen-Only" });
    setDialogOpen(true);
  };

  const openEditDialog = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({ name: item.name, price: item.price.toString(), category: item.category });
    setDialogOpen(true);
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <div className="p-4 space-y-4 pb-20">
      <div className="flex items-center justify-between">
        <h2>Menu Management</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingItem ? "Edit Menu Item" : "Add New Menu Item"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Item Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Food-Butcher">Food-Butcher</SelectItem>
                    <SelectItem value="Food-Kitchen-Only">Food-Kitchen-Only</SelectItem>
                    <SelectItem value="Drink">Drink</SelectItem>
                    <SelectItem value="Dessert">Dessert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                {editingItem ? "Update Item" : "Add Item"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category}>
          <h3 className="mb-3">{category}</h3>
          <div className="space-y-2">
            {items.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p>{item.name}</p>
                    <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => openEditDialog(item)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

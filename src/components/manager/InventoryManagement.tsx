import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Plus } from "lucide-react";
import { Badge } from "../ui/badge";

interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  linkedItems: string[];
}

const initialIngredients: Ingredient[] = [
  { id: "1", name: "Steak", quantity: 25, unit: "pieces", linkedItems: ["Grilled Steak"] },
  { id: "2", name: "Lettuce", quantity: 15, unit: "heads", linkedItems: ["Caesar Salad"] },
  { id: "3", name: "Ribs", quantity: 18, unit: "racks", linkedItems: ["BBQ Ribs"] },
  { id: "4", name: "Chocolate", quantity: 5, unit: "kg", linkedItems: ["Chocolate Cake"] },
];

export function InventoryManagement() {
  const [ingredients, setIngredients] = useState<Ingredient[]>(initialIngredients);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    unit: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIngredients([
      ...ingredients,
      {
        id: Date.now().toString(),
        name: formData.name,
        quantity: parseFloat(formData.quantity),
        unit: formData.unit,
        linkedItems: [],
      },
    ]);
    setDialogOpen(false);
    setFormData({ name: "", quantity: "", unit: "" });
  };

  const getStockStatus = (quantity: number) => {
    if (quantity < 10) return { label: "Low Stock", color: "bg-red-500" };
    if (quantity < 20) return { label: "Medium", color: "bg-orange-500" };
    return { label: "In Stock", color: "bg-green-500" };
  };

  return (
    <div className="p-4 space-y-4 pb-20">
      <div className="flex items-center justify-between">
        <h2>Inventory Management</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Ingredient
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Ingredient</DialogTitle>
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
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Add Ingredient
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-3">
        {ingredients.map((ingredient) => {
          const status = getStockStatus(ingredient.quantity);
          return (
            <Card key={ingredient.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p>{ingredient.name}</p>
                  <p className="text-gray-600 mt-1">
                    {ingredient.quantity} {ingredient.unit}
                  </p>
                </div>
                <Badge className={`${status.color} text-white border-0`}>
                  {status.label}
                </Badge>
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
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Plus, Edit, Trash2, Package } from "lucide-react";
import { collection, onSnapshot, query, orderBy, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

interface InventoryRequirement {
  inventoryId: string;
  inventoryName: string;
  quantity: number;
}

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl?: string;
  imagePublicId?: string;
  inventoryRequirements: InventoryRequirement[];
}

export function MenuManagement() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [inventoryItems, setInventoryItems] = useState<any[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inventoryDialogOpen, setInventoryDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Food",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [inventoryFormData, setInventoryFormData] = useState({
    inventoryId: "",
    quantity: "",
  });

  // Fetch menu items from Firebase
  useEffect(() => {
    const menuQuery = query(collection(db, 'menu'), orderBy('name'));
    const unsubscribe = onSnapshot(menuQuery, (snapshot) => {
      const menuData: MenuItem[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        menuData.push({
          id: doc.id,
          name: data.name,
          price: data.price,
          category: data.category,
          imageUrl: data.imageUrl,
          imagePublicId: data.imagePublicId,
          inventoryRequirements: data.inventoryRequirements || [],
        });
      });
      setMenuItems(menuData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch inventory items
  useEffect(() => {
    const inventoryQuery = query(collection(db, 'inventory'), orderBy('name'));
    const unsubscribe = onSnapshot(inventoryQuery, (snapshot) => {
      const inventoryData: any[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        inventoryData.push({
          id: doc.id,
          name: data.name,
          unit: data.unit,
        });
      });
      setInventoryItems(inventoryData);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Upload image to Cloudinary if a new file is selected
      let uploadedImageUrl: string | undefined;
      let uploadedPublicId: string | undefined;
  
      if (imageFile) {
        const cloudName = 'dwqgypyim';
        const uploadPreset = 'ml_default';
        const folder = 'menu-items';
  
        const form = new FormData();
        form.append('file', imageFile);
        form.append('upload_preset', uploadPreset);
        form.append('folder', folder);
  
        const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: 'POST',
          body: form,
        });
  
        if (!uploadRes.ok) {
          const errText = await uploadRes.text().catch(() => '');
          throw new Error(`Cloudinary upload failed (${uploadRes.status}): ${errText}`);
        }
  
        const uploadJson: any = await uploadRes.json();
        uploadedImageUrl = uploadJson.secure_url || uploadJson.url;
        uploadedPublicId = uploadJson.public_id;
      }
  
      if (editingItem) {
        const updatePayload: any = {
          name: formData.name,
          price: parseFloat(formData.price),
          category: formData.category,
        };
        if (uploadedImageUrl) {
          updatePayload.imageUrl = uploadedImageUrl;
          updatePayload.imagePublicId = uploadedPublicId || null;
        }
        await updateDoc(doc(db, 'menu', editingItem.id), updatePayload);
      } else {
        const payload: any = {
          name: formData.name,
          price: parseFloat(formData.price),
          category: formData.category,
          inventoryRequirements: [],
        };
        if (uploadedImageUrl) {
          payload.imageUrl = uploadedImageUrl;
          payload.imagePublicId = uploadedPublicId || null;
        }
        await addDoc(collection(db, 'menu'), payload);
      }
      setDialogOpen(false);
      setFormData({ name: "", price: "", category: "Food" });
      setEditingItem(null);
      setImageFile(null);
    } catch (error) {
      console.error('Error saving menu item:', error);
      alert((error as any)?.message || 'Failed to save menu item');
    }
  };

  const openAddDialog = () => {
    setEditingItem(null);
    setFormData({ name: "", price: "", category: "Food" });
    setDialogOpen(true);
  };

  const handleDelete = async (itemId: string) => {
    if (confirm('Are you sure you want to delete this menu item?')) {
      try {
        await deleteDoc(doc(db, 'menu', itemId));
      } catch (error) {
        console.error('Error deleting menu item:', error);
      }
    }
  };

  const openEditDialog = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({ name: item.name, price: item.price.toString(), category: item.category });
    setDialogOpen(true);
  };

  const openInventoryDialog = (item: MenuItem) => {
    setSelectedMenuItem(item);
    setInventoryDialogOpen(true);
  };

  const handleAddInventoryRequirement = async () => {
    if (!selectedMenuItem || !inventoryFormData.inventoryId || !inventoryFormData.quantity) return;

    const selectedInventory = inventoryItems.find(inv => inv.id === inventoryFormData.inventoryId);
    if (!selectedInventory) return;

    const newRequirement = {
      inventoryId: inventoryFormData.inventoryId,
      inventoryName: selectedInventory.name,
      quantity: parseFloat(inventoryFormData.quantity),
    };

    const updatedRequirements = [...selectedMenuItem.inventoryRequirements, newRequirement];

    try {
      await updateDoc(doc(db, 'menu', selectedMenuItem.id), {
        inventoryRequirements: updatedRequirements,
      });

      setInventoryFormData({ inventoryId: "", quantity: "" });
    } catch (error) {
      console.error('Error adding inventory requirement:', error);
    }
  };

  const handleRemoveInventoryRequirement = async (menuItemId: string, inventoryId: string) => {
    const menuItem = menuItems.find(item => item.id === menuItemId);
    if (!menuItem) return;

    const updatedRequirements = menuItem.inventoryRequirements.filter(req => req.inventoryId !== inventoryId);

    try {
      await updateDoc(doc(db, 'menu', menuItemId), {
        inventoryRequirements: updatedRequirements,
      });
    } catch (error) {
      console.error('Error removing inventory requirement:', error);
    }
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  if (loading) {
    return (
      <div className="p-4 pb-20">
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading menu items...</p>
          </div>
        </div>
      </div>
    );
  }

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
                    <SelectItem value="Food">Food</SelectItem>
                    <SelectItem value="Food-Butcher">Food-Butcher</SelectItem>
                    <SelectItem value="Drinks">Drinks</SelectItem>
                    <SelectItem value="Desserts">Desserts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="image">Item Image (optional)</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                />
                {editingItem?.imageUrl && !imageFile && (
                  <div className="mt-2">
                    <img src={editingItem.imageUrl} alt={editingItem.name} className="h-20 w-20 object-cover rounded border" />
                  </div>
                )}
                {imageFile && (
                  <div className="mt-2 text-sm text-gray-600">
                    Selected: {imageFile.name}
                  </div>
                )}
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
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} className="h-14 w-14 object-cover rounded border" />
                    ) : (
                      <div className="h-14 w-14 rounded border bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                        No Image
                      </div>
                    )}
                    <div>
                      <p>{item.name}</p>
                      <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => openEditDialog(item)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openInventoryDialog(item)}>
                      <Package className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Inventory Linking Dialog */}
      <Dialog open={inventoryDialogOpen} onOpenChange={setInventoryDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Manage Inventory for {selectedMenuItem?.name}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Current Inventory Requirements */}
            <div>
              <h4 className="font-medium mb-2">Current Inventory Requirements:</h4>
              {selectedMenuItem?.inventoryRequirements.length === 0 ? (
                <p className="text-gray-500 text-sm">No inventory requirements set</p>
              ) : (
                <div className="space-y-2">
                  {selectedMenuItem?.inventoryRequirements.map((req, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span>{req.inventoryName}: {req.quantity} units</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => selectedMenuItem && handleRemoveInventoryRequirement(selectedMenuItem.id, req.inventoryId)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Add New Requirement */}
            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Add Inventory Requirement:</h4>
              <div className="flex gap-2">
                <Select
                  value={inventoryFormData.inventoryId}
                  onValueChange={(value) => setInventoryFormData({ ...inventoryFormData, inventoryId: value })}
                >
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select inventory item" />
                  </SelectTrigger>
                  <SelectContent>
                    {inventoryItems
                      .filter(inv => !selectedMenuItem?.inventoryRequirements.some(req => req.inventoryId === inv.id))
                      .map((inv) => (
                        <SelectItem key={inv.id} value={inv.id}>
                          {inv.name} ({inv.unit})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  step="0.1"
                  placeholder="Quantity"
                  value={inventoryFormData.quantity}
                  onChange={(e) => setInventoryFormData({ ...inventoryFormData, quantity: e.target.value })}
                  className="w-24"
                />
                <Button onClick={handleAddInventoryRequirement} disabled={!inventoryFormData.inventoryId || !inventoryFormData.quantity}>
                  Add
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

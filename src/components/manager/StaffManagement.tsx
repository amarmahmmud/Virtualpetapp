import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Plus, Edit } from "lucide-react";
import { Badge } from "../ui/badge";

interface Staff {
  id: string;
  name: string;
  email: string;
  role: string;
}

const initialStaff: Staff[] = [
  { id: "1", name: "John Manager", email: "manager@bistro.com", role: "Manager" },
  { id: "2", name: "Sarah Waiter", email: "waiter@bistro.com", role: "Waiter" },
  { id: "3", name: "Mike Cashier", email: "cashier@bistro.com", role: "Cashier" },
  { id: "4", name: "Tom Butcher", email: "butcher@bistro.com", role: "Butcher" },
  { id: "5", name: "Lisa Kitchen", email: "kitchen@bistro.com", role: "Kitchen" },
];

const roleColors: Record<string, string> = {
  Manager: "bg-purple-500",
  Waiter: "bg-blue-500",
  Cashier: "bg-green-500",
  Butcher: "bg-orange-500",
  Kitchen: "bg-red-500",
};

export function StaffManagement() {
  const [staff, setStaff] = useState<Staff[]>(initialStaff);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Waiter",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStaff) {
      setStaff(
        staff.map((s) =>
          s.id === editingStaff.id
            ? { ...s, name: formData.name, email: formData.email, role: formData.role }
            : s
        )
      );
    } else {
      setStaff([
        ...staff,
        {
          id: Date.now().toString(),
          name: formData.name,
          email: formData.email,
          role: formData.role,
        },
      ]);
    }
    setDialogOpen(false);
    setFormData({ name: "", email: "", password: "", role: "Waiter" });
    setEditingStaff(null);
  };

  const openAddDialog = () => {
    setEditingStaff(null);
    setFormData({ name: "", email: "", password: "", role: "Waiter" });
    setDialogOpen(true);
  };

  const openEditDialog = (staff: Staff) => {
    setEditingStaff(staff);
    setFormData({ name: staff.name, email: staff.email, password: "", role: staff.role });
    setDialogOpen(true);
  };

  return (
    <div className="p-4 space-y-4 pb-20">
      <div className="flex items-center justify-between">
        <h2>Staff Management</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Staff
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingStaff ? "Edit Staff Member" : "Add New Staff Member"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="staff-name">Name</Label>
                <Input
                  id="staff-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="staff-email">Email</Label>
                <Input
                  id="staff-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="staff-password">Password</Label>
                <Input
                  id="staff-password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required={!editingStaff}
                  placeholder={editingStaff ? "Leave blank to keep current" : ""}
                />
              </div>
              <div>
                <Label htmlFor="staff-role">Role</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Manager">Manager</SelectItem>
                    <SelectItem value="Waiter">Waiter</SelectItem>
                    <SelectItem value="Cashier">Cashier</SelectItem>
                    <SelectItem value="Butcher">Butcher</SelectItem>
                    <SelectItem value="Kitchen">Kitchen</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                {editingStaff ? "Update Staff" : "Add Staff"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-3">
        {staff.map((member) => (
          <Card key={member.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p>{member.name}</p>
                <p className="text-gray-600 mt-1">{member.email}</p>
                <Badge className={`${roleColors[member.role]} text-white border-0 mt-2`}>
                  {member.role}
                </Badge>
              </div>
              <Button variant="outline" size="sm" onClick={() => openEditDialog(member)}>
                <Edit className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

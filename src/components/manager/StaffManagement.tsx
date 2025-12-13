import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Plus, Edit } from "lucide-react";
import { Badge } from "../ui/badge";
import { collection, onSnapshot, query, orderBy, addDoc, updateDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

interface Staff {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'pending' | 'approved';
}

const roleColors: Record<string, string> = {
  Manager: "bg-purple-500",
  Waiter: "bg-blue-500",
  Cashier: "bg-green-500",
  Butcher: "bg-orange-500",
  Kitchen: "bg-red-500",
  Bar: "bg-indigo-500",
};

export function StaffManagement() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Waiter",
    status: "pending" as 'pending' | 'approved',
  });

  // Fetch staff from Firebase
  useEffect(() => {
    const staffQuery = collection(db, 'staff');
    const unsubscribe = onSnapshot(staffQuery, (snapshot) => {
      const staffData: Staff[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        staffData.push({
          id: doc.id,
          name: data.name || data.email || doc.id.split('@')[0] || 'Unknown',
          email: doc.id, // email is the document ID
          role: data.role || 'Waiter',
          status: data.status || 'pending',
        });
      });
      setStaff(staffData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingStaff) {
        await updateDoc(doc(db, 'staff', editingStaff.id), {
          name: formData.name,
          role: formData.role,
          status: formData.status,
        });
      } else {
        // For new staff, add to Firestore with email as document ID
        await setDoc(doc(db, 'staff', formData.email), {
          name: formData.name,
          role: formData.role,
          status: formData.status,
        });
      }
      setDialogOpen(false);
      setFormData({ name: "", email: "", role: "Waiter", status: "pending" });
      setEditingStaff(null);
    } catch (error) {
      console.error('Error saving staff:', error);
    }
  };

  const openAddDialog = () => {
    setEditingStaff(null);
    setFormData({ name: "", email: "", role: "Waiter", status: "pending" });
    setDialogOpen(true);
  };

  const openEditDialog = (staff: Staff) => {
    setEditingStaff(staff);
    setFormData({ name: staff.name, email: staff.email, role: staff.role, status: staff.status });
    setDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="p-4 pb-20">
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading staff...</p>
          </div>
        </div>
      </div>
    );
  }

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
              {!editingStaff && (
                <p className="text-sm text-gray-600 mt-2">
                  This creates a staff record. The staff member will register themselves through the login screen.
                </p>
              )}
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
                    <SelectItem value="Bar">Bar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="staff-status">Status</Label>
                <Select value={formData.status} onValueChange={(value: 'pending' | 'approved') => setFormData({ ...formData, status: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
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
                <div className="flex gap-2 mt-2">
                  <Badge className={`${roleColors[member.role]} text-white border-0`}>
                    {member.role}
                  </Badge>
                  <Badge className={`${member.status === 'approved' ? 'bg-green-500' : 'bg-yellow-500'} text-white border-0`}>
                    {member.status === 'approved' ? 'Approved' : 'Pending'}
                  </Badge>
                </div>
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

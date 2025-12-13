import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { UtensilsCrossed } from "lucide-react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isRegistering) {
        // Registration flow
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Check if staff document already exists (created by manager)
        const staffDocRef = doc(db, 'staff', email);
        const staffDoc = await getDoc(staffDocRef);

        if (!staffDoc.exists()) {
          // Create new staff document if it doesn't exist
          await setDoc(staffDocRef, {
            name: email.split('@')[0], // Use email prefix as name
            role: 'Waiter', // Default role
            status: 'pending',
          });
        }
        // If document exists (created by manager), don't overwrite it

        setError("Account created successfully! Please wait for manager approval.");
      } else {
        // Login flow
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      if (err.code === 'auth/user-not-found' && !isRegistering) {
        setError("Account not found. Would you like to register?");
        setIsRegistering(true);
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <UtensilsCrossed className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-blue-600">BistroSync</h1>
          <p className="text-gray-600 mt-2">Restaurant Management System</p>
          <p className="text-sm text-gray-500 mt-1">
            {isRegistering ? "Create New Account" : "Staff Login"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="mt-1"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
            {loading ? "Processing..." : (isRegistering ? "Register" : "Login")}
          </Button>

          {!isRegistering && (
            <button
              type="button"
              onClick={() => setIsRegistering(true)}
              className="w-full mt-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              Don't have an account? Register here
            </button>
          )}

          {isRegistering && (
            <button
              type="button"
              onClick={() => {
                setIsRegistering(false);
                setError("");
              }}
              className="w-full mt-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              Already have an account? Login here
            </button>
          )}
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded text-gray-600 space-y-2">
          <p className="text-center mb-2 font-medium">How it works:</p>
          <p>• Register with any email/password to create account</p>
          <p>• New accounts start with "Pending" status</p>
          <p>• Manager must approve accounts before use</p>
          <p className="text-center mb-2 mt-4 font-medium">Demo Accounts (if created):</p>
          <p>Manager: manager@bistro.com / password123</p>
          <p>Waiter: waiter@bistro.com / password123</p>
          <p>Cashier: cashier@bistro.com / password123</p>
          <p>Butcher: butcher@bistro.com / password123</p>
          <p>Kitchen: kitchen@bistro.com / password123</p>
        </div>
      </Card>
    </div>
  );
}

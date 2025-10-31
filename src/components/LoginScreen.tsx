import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { UtensilsCrossed } from "lucide-react";

interface LoginScreenProps {
  onLogin: (email: string, password: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
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

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Login
          </Button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded text-gray-600 space-y-2">
          <p className="text-center mb-2">Demo Accounts:</p>
          <p>Manager: manager@bistro.com / password</p>
          <p>Waiter: waiter@bistro.com / password</p>
          <p>Cashier: cashier@bistro.com / password</p>
          <p>Butcher: butcher@bistro.com / password</p>
          <p>Kitchen: kitchen@bistro.com / password</p>
        </div>
      </Card>
    </div>
  );
}

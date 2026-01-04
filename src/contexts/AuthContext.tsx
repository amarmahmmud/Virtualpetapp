import React, { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

type Role = "manager" | "waiter" | "cashier" | "butcher" | "kitchen" | "bar" | null;

interface User {
  uid: string;
  email: string | null;
  name: string;
  role: Role;
  status: 'pending' | 'approved' | null;
}

interface AuthContextType {
  currentRole: Role;
  userStatus: 'pending' | 'approved' | null;
  currentUser: User | null;
  authInitializing: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};
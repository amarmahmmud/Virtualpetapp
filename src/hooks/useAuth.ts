import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, getDocFromCache } from "firebase/firestore";
import { auth, db } from "../firebase";

type Role = "manager" | "waiter" | "cashier" | "butcher" | "kitchen" | "bar" | null;

interface User {
  uid: string;
  email: string | null;
  name: string;
  role: Role;
  status: 'pending' | 'approved' | null;
}

export const useAuth = () => {
  const [currentRole, setCurrentRole] = useState<Role>(null);
  const [userStatus, setUserStatus] = useState<'pending' | 'approved' | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authInitializing, setAuthInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const staffRef = doc(db, 'staff', user.email!);
          // Try server first (will use cache if available when offline)
          let staffDocSnap = await getDoc(staffRef);
          // If not found (or offline without cached server attempt), fallback to explicit cache
          if (!staffDocSnap.exists()) {
            try {
              staffDocSnap = await getDocFromCache(staffRef);
            } catch {
              // ignore cache miss
            }
          }

          if (staffDocSnap && staffDocSnap.exists()) {
            const data: any = staffDocSnap.data();
            const userData: User = {
              uid: user.uid,
              email: user.email,
              name: data.name || user.displayName || user.email?.split('@')[0] || 'Unknown',
              role: data.role,
              status: data.status
            };
            setCurrentUser(userData);
            // Persist last-known staff profile for offline restore
            try {
              localStorage.setItem(
                'vrm_staff_' + user.email,
                JSON.stringify({ role: data.role, status: data.status, name: userData.name })
              );
            } catch {}

            if (data && data.status === 'approved' && data.role) {
              setCurrentRole(data.role.toLowerCase() as Role);
              setUserStatus('approved');
            } else if (data && data.status === 'pending') {
              setUserStatus('pending');
              setCurrentRole(null);
            } else if (data && data.role) {
              // Existing users without status are approved
              setCurrentRole(data.role.toLowerCase() as Role);
              setUserStatus('approved');
            } else {
              // No fields; fallback to cached last-known if any
              const cached = localStorage.getItem('vrm_staff_' + user.email);
              if (cached) {
                const c = JSON.parse(cached);
                setCurrentRole(c.role?.toLowerCase() as Role ?? null);
                setUserStatus(c.status ?? null);
              } else {
                setCurrentRole(null);
              }
            }
          } else {
            // No doc from server/cache; fallback to last-known staff for offline continuity
            const cached = localStorage.getItem('vrm_staff_' + user.email);
            if (cached) {
              const c = JSON.parse(cached);
              setCurrentUser({
                uid: user.uid,
                email: user.email,
                name: c.name || user.displayName || user.email?.split('@')[0] || 'Unknown',
                role: c.role,
                status: c.status
              });
              setCurrentRole(c.role?.toLowerCase() as Role ?? null);
              setUserStatus(c.status ?? null);
            } else {
              setCurrentRole(null);
            }
          }
        } catch (error) {
          console.error('Error fetching staff data:', error);
          // Use last-known cached role/status while offline
          const cached = localStorage.getItem('vrm_staff_' + user.email);
          if (cached) {
            const c = JSON.parse(cached);
            setCurrentRole(c.role?.toLowerCase() as Role ?? null);
            setUserStatus(c.status ?? null);
          } else {
            setCurrentRole(null);
          }
        }
      } else {
        setCurrentRole(null);
        setUserStatus(null);
        setCurrentUser(null);
      }
      setAuthInitializing(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return {
    currentRole,
    userStatus,
    currentUser,
    authInitializing,
    logout,
  };
};
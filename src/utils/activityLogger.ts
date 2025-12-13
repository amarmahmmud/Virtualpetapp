import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export interface ActivityData {
  role: string;
  description: string;
  userId?: string;
  orderId?: string;
  tableNumber?: number;
}

export async function logActivity(activity: ActivityData) {
  try {
    await addDoc(collection(db, 'activities'), {
      ...activity,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error('Error logging activity:', error);
  }
}
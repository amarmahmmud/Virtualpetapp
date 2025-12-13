import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAlxN2fpjmc-tMRFLxW4H_jtLqS7tynEQw",
  authDomain: "virtual-restaurant-app.firebaseapp.com",
  projectId: "virtual-restaurant-app",
  storageBucket: "virtual-restaurant-app.firebasestorage.app",
  messagingSenderId: "764282794302",
  appId: "1:764282794302:web:0f3114ce444d64e3833c6f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
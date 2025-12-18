import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getMessaging, getToken, onMessage, isSupported, type MessagePayload } from 'firebase/messaging';

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

/**
 * Request notification permission, register the Firebase Messaging SW,
 * and retrieve the FCM device token using the provided VAPID public key.
 */
export async function getFcmToken(): Promise<string | null> {
  try {
    const supported = await isSupported();
    if (!supported || typeof window === 'undefined' || !('Notification' in window)) {
      console.warn('FCM/push not supported in this browser.');
      return null;
    }

    if (Notification.permission !== 'granted') {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.warn('Notification permission not granted.');
        return null;
      }
    }

    // Use the main PWA service worker (public/sw.js) which imports firebase-messaging-sw.js
    const swReg = await navigator.serviceWorker.ready;

    const messaging = getMessaging(app);
    const token = await getToken(messaging, {
      vapidKey: 'BCT4O2TyyEC4HrSKZJVuuVFdtKc3ggSVA0Kv_GAjETdNb0mJQxrX306L1r5DDh--33Yn0E77B2r0iELABrk-8ww',
      serviceWorkerRegistration: swReg,
    });

    return token ?? null;
  } catch (err) {
    console.error('Failed to get FCM token', err);
    return null;
  }
}

/**
 * Foreground messages handler (when tab is focused).
 * Usage:
 *   onForegroundMessage((payload) => { ... })
 */
export async function onForegroundMessage(handler: (payload: MessagePayload) => void) {
  const supported = await isSupported();
  if (!supported) return;
  const messaging = getMessaging(app);
  onMessage(messaging, handler);
}
/* eslint-disable no-undef */
// Firebase Messaging Service Worker (enables background notifications)
// Uses Firebase compat builds for SW context

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

// IMPORTANT: Keep these values in sync with src/firebase.ts
firebase.initializeApp({
  apiKey: "AIzaSyAlxN2fpjmc-tMRFLxW4H_jtLqS7tynEQw",
  authDomain: "virtual-restaurant-app.firebaseapp.com",
  projectId: "virtual-restaurant-app",
  storageBucket: "virtual-restaurant-app.firebasestorage.app",
  messagingSenderId: "764282794302",
  appId: "1:764282794302:web:0f3114ce444d64e3833c6f"
});

const messaging = firebase.messaging();

// Make the SW take control immediately on update
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle background messages (when app is not focused or not open)
messaging.onBackgroundMessage((payload) => {
  const title =
    (payload && payload.notification && payload.notification.title) ||
    (payload && payload.data && payload.data.title) ||
    'New notification';

  const body =
    (payload && payload.notification && payload.notification.body) ||
    (payload && payload.data && payload.data.body) ||
    '';

  const icon =
    (payload && payload.notification && payload.notification.icon) ||
    // Fallback icon path (optional). Replace with a real icon under /public if available.
    '/favicon.ico';

  const data = (payload && payload.data) || {};

  self.registration.showNotification(title, {
    body,
    icon,
    data
  });
});

// Focus an existing tab or open a new one on notification click
self.addEventListener('notificationclick', (event) => {
  const targetUrl = (event.notification && event.notification.data && event.notification.data.link) || '/';
  event.notification.close();

  event.waitUntil((async () => {
    const allClients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    // Try to focus an existing client
    for (const client of allClients) {
      if ('focus' in client) {
        await client.focus();
        // Optionally pass payload to the client
        client.postMessage({ type: 'notification-clicked', data: event.notification.data || {} });
        return;
      }
    }
    // Otherwise, open a new window
    if (self.clients.openWindow) {
      await self.clients.openWindow(targetUrl);
    }
  })());
});
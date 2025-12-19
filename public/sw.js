/* PWA Service Worker with basic offline support and Firebase Messaging integration */

const CACHE = 'vrm-cache-v1';
const OFFLINE_FALLBACK_PAGE = '/index.html';

// Take control immediately on update and pre-cache minimal shell
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/manifest.webmanifest',
      ]).catch(() => {
        // Ignore caching failures (e.g., dev server)
      })
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Basic offline strategy:
// - Navigations: network first, fall back to cached index.html
// - Same-origin assets: cache falling back to network (with background cache update)
// - Cross-origin: network first, fall back to cache if present
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  let url;
  try {
    url = new URL(event.request.url);
  } catch (e) {
    // Do not intercept non-HTTP(S) schemes (e.g., data:, chrome-extension:)
    return;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return;
  }

  // SPA navigations: network-first with offline fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_FALLBACK_PAGE))
    );
    return;
  }

  // Bypass SW for Firebase/Google endpoints to avoid CORS and streaming issues (Firestore listen/storage)
  const hostname = url.hostname;
  const isFirebase = hostname.endsWith('googleapis.com')
                  || hostname.endsWith('gstatic.com')
                  || hostname.endsWith('firebaseapp.com')
                  || hostname.endsWith('firebasestorage.googleapis.com');
  if (isFirebase) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Same-origin assets: cache-first with background update
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const fetchPromise = fetch(event.request).then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, responseClone));
          return response;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Cross-origin (non-Firebase) requests: network-first, fallback to cache
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

// Include Firebase Messaging background handler to enable push when app is closed
// This expects firebase configuration code in /firebase-messaging-sw.js
importScripts('/firebase-messaging-sw.js');
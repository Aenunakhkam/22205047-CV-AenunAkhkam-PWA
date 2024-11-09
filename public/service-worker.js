const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
];

// Saat install, cache file yang dibutuhkan
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opening cache');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Menghapus cache lama saat ada versi baru
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Saat fetch, gunakan cache jika offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => caches.match('/offline.html'))
      );
    })
  );
});

// Push Notification
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  console.log('Push Notification Received:', data);
  const title = data.title || 'Notifikasi';
  const options = {
    body: data.body || 'Pesan baru!',
    icon: data.icon || '/icon.png',
    badge: data.badge || '/badge.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

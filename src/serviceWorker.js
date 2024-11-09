const CACHE_NAME = 'react-app-cache-v1';
const urlsToCache = [
  '/',               // halaman utama
  '/index.html',
  '/src/app.jsx',    // file utama React
  '/src/index.css',  // styling
  '/src/main.css',   // styling tambahan
];

// Install Service Worker dan cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets');
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Event untuk menangani request
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Jika ditemukan di cache, gunakan file cache
      if (response) {
        return response;
      }

      // Jika tidak ada di cache, ambil dari network dan cache hasilnya
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Jika offline dan request gagal, bisa ditangani disini
          return caches.match('/index.html');
        });
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

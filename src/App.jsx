import React, { useEffect } from 'react';
import Routes from './routes/routes';
import { register } from './serviceWorkerRegistration';
import { openDB } from 'idb';
import './index.css';

// Konfigurasi IndexedDB
const DB_NAME = 'myDatabase';
const DB_VERSION = 1;
const STORE_NAME = 'subscriptions';

// Fungsi untuk membuka atau membuat IndexedDB
async function initDB() {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
  return db;
}

// Fungsi untuk menyimpan data ke IndexedDB
async function saveSubscription(data) {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.add(data);
  await tx.done;
  console.log('Data berhasil disimpan di IndexedDB:', data);
}

// Fungsi untuk mendapatkan semua data dari IndexedDB
async function getAllSubscriptions() {
  const db = await initDB();
  const allData = await db.getAll(STORE_NAME);
  console.log('Semua data dari IndexedDB:', allData);
  return allData;
}

// Fungsi untuk menambahkan contoh data (agar bisa terlihat di IndexedDB)
async function addSampleData() {
  const sampleData = {
    name: 'Mas Akhkam',
    email: 'akhkam@example.com',
    subscriptionToken: 'dummy-token-123',
  };
  await saveSubscription(sampleData);
}

// Fungsi untuk Push Notifications
async function subscribeToPush() {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    const registration = await navigator.serviceWorker.ready;
    try {
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array('YBDbkgJGJQFKrO9uvlB0g8YuCaGR0RdwZfqayKOGi2J9rzAhxTfgKL7DMrkV5hWE07KroieVhCu0dXGgfZEpCXaA'),
      });
      console.log('Berlangganan Push Notifications:', subscription);
      await saveSubscription(subscription);
    } catch (error) {
      console.error('Gagal berlangganan push notifications:', error);
    }
  }
}

// Utility function untuk mengubah VAPID Key
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

function App() {
  useEffect(() => {
    // Mendaftarkan Service Worker
    register();

    // Mendaftarkan Push Notifications
    subscribeToPush();

    // Tambahkan data contoh ke IndexedDB
    addSampleData();

    // Mengecek dan menampilkan data dari IndexedDB
    getAllSubscriptions();
  }, []);

  return (
    <div>
      <Routes />
      <h1>React Portfolio with IndexedDB & Push Notifications</h1>
    </div>
  );
}

export default App;

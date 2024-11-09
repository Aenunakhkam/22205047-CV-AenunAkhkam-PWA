import { openDB } from 'idb';

const DB_NAME = 'myDatabase';
const DB_VERSION = 1;
const STORE_NAME = 'subscriptions';

// Membuka atau membuat IndexedDB
const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    }
  },
});

// Fungsi untuk menyimpan data
export async function saveSubscription(data) {
  const db = await dbPromise;
  await db.add(STORE_NAME, data);
  console.log('Data saved to IndexedDB:', data);
}

// Fungsi untuk mengambil semua data
export async function getAllSubscriptions() {
  const db = await dbPromise;
  return db.getAll(STORE_NAME);
}

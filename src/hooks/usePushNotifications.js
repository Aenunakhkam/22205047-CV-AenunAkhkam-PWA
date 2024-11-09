import { useEffect } from 'react';
import { saveSubscription } from '../db/indexedDB';
import Routes from './routes/routes';
import { register } from './serviceWorkerRegistration';

import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6SXnYxETJjLJi3f529UQz1ZhUXPK0qzY",
  authDomain: "portfolio-644aa.firebaseapp.com",
  projectId: "portfolio-644aa",
  storageBucket: "portfolio-644aa.firebasestorage.app",
  messagingSenderId: "181591094196",
  appId: "1:181591094196:web:9f39ebeca181a250b738e1",
  measurementId: "G-E75R4VD5E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function usePushNotifications() {
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'YOUR_PUBLIC_VAPID_KEY',
        })
        .then((subscription) => {
          saveSubscription(subscription);
          console.log('Subscribed to push notifications:', subscription);
        })
        .catch((err) => console.error('Failed to subscribe:', err));
      });
    }
  }, []);
}

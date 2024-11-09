importScripts('https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDrlM_zPxzZcxAnqlxgi6nwshNQJAMlNIA",
    authDomain: "portfolio-e6aa5.firebaseapp.com",
    projectId: "portfolio-e6aa5",
    storageBucket: "portfolio-e6aa5.firebasestorage.app",
    messagingSenderId: "446963937001",
    appId: "1:446963937001:web:6db4384073922fb7250a78",
    measurementId: "G-MX6GW20BJG"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // Ganti dengan path icon Anda
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

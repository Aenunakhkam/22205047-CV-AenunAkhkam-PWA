import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyDrlM_zPxzZcxAnqlxgi6nwshNQJAMlNIA",
    authDomain: "portfolio-e6aa5.firebaseapp.com",
    projectId: "portfolio-e6aa5",
    storageBucket: "portfolio-e6aa5.firebasestorage.app",
    messagingSenderId: "446963937001",
    appId: "1:446963937001:web:6db4384073922fb7250a78",
    measurementId: "G-MX6GW20BJG"
}
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };

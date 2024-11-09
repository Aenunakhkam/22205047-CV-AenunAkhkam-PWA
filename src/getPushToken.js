import { getToken } from 'firebase/messaging';
import { messaging } from './firebaseConfig';

export const requestForPushNotifications = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: 'BDfD46Z3pQfo58meKWq-S_t_B_JB9E2kA5KZDS-IeVtZEXCaUb4tAhZDKM8HHyX38WzrFkFUucoqyjfVpgxp6AA' // Replace with your actual VAPID key
    });

    if (token) {
      console.log('User token:', token);
      // Kirim token ini ke server untuk disimpan jika perlu
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error);
  }
};

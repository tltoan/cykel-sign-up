import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Your Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to add email to Firestore
export const addEmailToCollection = async (email) => {
  try {
    const docRef = await addDoc(collection(db, 'emails'), {
      email: email,
      timestamp: serverTimestamp(),
      source: 'website-signup',
    });
    console.log('Email added with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding email: ', error);
    return { success: false, error: error.message };
  }
};

export { db }; 
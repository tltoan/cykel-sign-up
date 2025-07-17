import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Your Firebase configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCTVvvtPJTRmbWCpYVHrJ33Enou3P3FmnI',
  authDomain: 'cykle-95118.firebaseapp.com',
  projectId: 'cykle-95118',
  storageBucket: 'cykle-95118.firebasestorage.app',
  messagingSenderId: '394864605068',
  appId: '1:394864605068:web:a6858eb2f530c646d408a9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to add email to Firestore
export const addEmailToCollection = async (email) => {
    try {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { success: false, error: 'Invalid email format' };
      }
  
      const docRef = await addDoc(collection(db, 'signUps'), {
        email: email.toLowerCase().trim(), // Normalize email
        timestamp: serverTimestamp(),
        source: 'website-signup',
        status: 'pending' // Add status for tracking
      });
      
      console.log('Email added with ID:', docRef.id);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding email: ', error);
      return { success: false, error: error.message };
    }
};

export { db }; 
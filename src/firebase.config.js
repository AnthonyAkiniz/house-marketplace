import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMpXoXaqbuYI5uqOYipfhupXBSXMInZjo",
  authDomain: "house-marketplace-app-146ea.firebaseapp.com",
  projectId: "house-marketplace-app-146ea",
  storageBucket: "house-marketplace-app-146ea.appspot.com",
  messagingSenderId: "552278653475",
  appId: "1:552278653475:web:8e646cf2c7d64159f60f96"
};


// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()

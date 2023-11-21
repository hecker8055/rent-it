// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rent-it-31bf3.firebaseapp.com",
  projectId: "rent-it-31bf3",
  storageBucket: "rent-it-31bf3.appspot.com",
  messagingSenderId: "388366432465",
  appId: "1:388366432465:web:9a38efa87d83f30e876df0"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
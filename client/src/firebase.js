// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate88.firebaseapp.com",
  projectId: "mern-estate88",
  storageBucket: "mern-estate88.firebasestorage.app",
  messagingSenderId: "115484976353",
  appId: "1:115484976353:web:eabfbd65729ffd43b643a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
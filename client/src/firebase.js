// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate58.firebaseapp.com",
  projectId: "mern-estate58",
  storageBucket: "mern-estate58.firebasestorage.app",
  messagingSenderId: "827240089471",
  appId: "1:827240089471:web:33b9e065f6c6b90fa9fc4a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
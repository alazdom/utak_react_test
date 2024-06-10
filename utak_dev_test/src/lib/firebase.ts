// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6wvpDNPWpku-UBkaCkCw1RyXwXoZIwms",
  authDomain: "simple-crud-menu-5ea31.firebaseapp.com",
  projectId: "simple-crud-menu-5ea31",
  storageBucket: "simple-crud-menu-5ea31.appspot.com",
  messagingSenderId: "498140354783",
  appId: "1:498140354783:web:863386243b7bc8776ef16a",
  measurementId: "G-ZKJCBF443Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
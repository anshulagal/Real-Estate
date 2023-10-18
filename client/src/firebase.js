// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//"AIzaSyCOreHL4SR3cMRRSoxvjbg70QAYpnxU-X0"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ffaea.firebaseapp.com",
  projectId: "mern-estate-ffaea",
  storageBucket: "mern-estate-ffaea.appspot.com",
  messagingSenderId: "552276026695",
  appId: "1:552276026695:web:2334b5b01d5db14f105862"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpO2ZGtZlIMFblVUcD1cBCMJVnINUpky8",
  authDomain: "fir-demo-4c898.firebaseapp.com",
  projectId: "fir-demo-4c898",
  storageBucket: "fir-demo-4c898.appspot.com",
  messagingSenderId: "966509555219",
  appId: "1:966509555219:web:2234fb0bc6b03765a859e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

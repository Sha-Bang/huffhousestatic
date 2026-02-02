import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWuQLP84izaScIG__GZ4w54r8FsOZhOWc",
  authDomain: "huff-house-web-form-01.firebaseapp.com",
  projectId: "huff-house-web-form-01",
  storageBucket: "huff-house-web-form-01.firebasestorage.app",
  messagingSenderId: "7598380944",
  appId: "1:7598380944:web:053e915bdd36998486c515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

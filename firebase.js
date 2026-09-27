// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxKl2zbAdOutaS6fwTceIgUPLOXEA5QMQ",
  authDomain: "quiz-eksporimpor.firebaseapp.com",
  projectId: "quiz-eksporimpor",
  storageBucket: "quiz-eksporimpor.firebasestorage.app",
  messagingSenderId: "756272079824",
  appId: "1:756272079824:web:d5348cd27680ff9a9fcfd5"
};

// Inisialisasi
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export agar bisa dipakai file lain
export { db, collection, addDoc, getDocs };

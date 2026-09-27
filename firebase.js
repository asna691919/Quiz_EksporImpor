// GANTI dengan konfigurasi Firebase Anda
const firebaseConfig={apiKey:'YOUR_API_KEY',authDomain:'YOUR_PROJECT.firebaseapp.com',projectId:'YOUR_PROJECT',storageBucket:'YOUR_PROJECT.appspot.com',messagingSenderId:'123',appId:'APP_ID'};
import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js';
import {getFirestore,collection,addDoc,getDocs} from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js';
const app=initializeApp(firebaseConfig);export const db=getFirestore(app);export{collection,addDoc,getDocs};
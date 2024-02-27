// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5tnk_MlEpCRjK30KoEKqg0HkmP4ImucI",
  authDomain: "noteslist-vue-fadf0.firebaseapp.com",
  projectId: "noteslist-vue-fadf0",
  storageBucket: "noteslist-vue-fadf0.appspot.com",
  messagingSenderId: "766870569911",
  appId: "1:766870569911:web:803cd59253563db9dede32",
  measurementId: "G-53JRTV0DVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
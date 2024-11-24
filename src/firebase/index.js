// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7OoMyEMBmhvTW_Wr8d-s4joqX4bTCNDY",
  authDomain: "aceedits-3be4b.firebaseapp.com",
  projectId: "aceedits-3be4b",
  storageBucket: "aceedits-3be4b.appspot.com",
  messagingSenderId: "383931764106",
  appId: "1:383931764106:web:c6fa559695862fb8750c73",
  measurementId: "G-L902GGLKNL"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, googleProvider, signInWithPopup, db, storage}
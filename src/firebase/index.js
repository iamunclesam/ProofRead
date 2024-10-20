// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsoI_GJm_maMI7lGGxhX0D0ETrzieXr9w",
  authDomain: "acestyle-846be.firebaseapp.com",
  projectId: "acestyle-846be",
  storageBucket: "acestyle-846be.appspot.com",
  messagingSenderId: "817127537081",
  appId: "1:817127537081:web:4123e45cb1cbdb3ce29e68",
  measurementId: "G-1BPSM3TD0K"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage}
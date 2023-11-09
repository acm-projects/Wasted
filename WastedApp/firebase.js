// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVABEM3uRas2WyfL7e8ppDjGFJku_Ses4",
  authDomain: "wasted-e06e2.firebaseapp.com",
  projectId: "wasted-e06e2",
  storageBucket: "wasted-e06e2.appspot.com",
  messagingSenderId: "411009541808",
  appId: "1:411009541808:web:8fd43e83b8397b45797d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDMJp0tL82YuQbeSkVDW5Fs5QuijYxMHvE",
    authDomain: "final-project--the-fort.firebaseapp.com",
    projectId: "final-project--the-fort",
    storageBucket: "final-project--the-fort.appspot.com",
    messagingSenderId: "98999507207",
    appId: "1:98999507207:web:be3ad57e7eadb8bee70da2"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// auth.currentUser.uid
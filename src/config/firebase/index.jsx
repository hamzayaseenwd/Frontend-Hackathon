import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDMJp0tL82YuQbeSkVDW5Fs5QuijYxMHvE",
  authDomain: "final-project--the-fort.firebaseapp.com",
  projectId: "final-project--the-fort",
  storageBucket: "final-project--the-fort.appspot.com",
  messagingSenderId: "98999507207",
  appId: "1:98999507207:web:be3ad57e7eadb8bee70da2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
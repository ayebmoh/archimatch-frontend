import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHIiCuoDwhbc02dLChCbUrAIKuiVBYefY",
  authDomain: "archimatch-5c66d.firebaseapp.com",
  projectId: "archimatch-5c66d",
  storageBucket: "archimatch-5c66d.appspot.com",
  messagingSenderId: "1076331771859",
  appId: "1:1076331771859:web:16da82170338c0a7b3a126",
  measurementId: "G-6GC9W9HSPD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

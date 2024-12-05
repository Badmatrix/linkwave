/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "linkwave-1ffda.firebaseapp.com",
  projectId: "linkwave-1ffda",
  storageBucket: "linkwave-1ffda.appspot.com",
  messagingSenderId: "109499012411",
  appId: "1:109499012411:web:dd3ac677fe19b0537bd31e",
  measurementId: "G-663W42P5VW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };

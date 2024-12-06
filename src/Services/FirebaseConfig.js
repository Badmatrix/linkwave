import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAG_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// measurementId: import.meta.env.VITE_FIREBASE_MESUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "linkwave-1ffda.firebaseapp.com",
  projectId: "linkwave-1ffda",
  storageBucket: "linkwave-1ffda.firebasestorage.app",
  messagingSenderId: "109499012411",
  appId: "1:109499012411:web:dd3ac677fe19b0537bd31e",
  measurementId: import.meta.env.VITE_FIREBASE_MESUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };

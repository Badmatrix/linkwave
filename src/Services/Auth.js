import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "./FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function signUp({ email, password, confirmPassword }) {
  if (password !== confirmPassword) return;
  const response = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up && create firestore document for users links
      const user = userCredential.user;
      setDoc(doc(firestore, "usersLinks", user.uid), {
        email:user.email,
        firstname: "",
        lastname: "",
        links: [],
      })
      return user;
    })
    .catch((error) => {
      throw new Error(error.code);
    });
  return response;
}

export async function login({ email, password }) {
  const response = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  return response;
}


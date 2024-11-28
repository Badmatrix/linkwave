import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "./FirebaseConfig";
import { updateProfile } from "firebase/auth";

export async function getAuthUserData(userId) {
  // const snapshot = doc(firestore, "usersLinks", userId);
  // await getDoc(snapshot)
  //   .then((data) => data.data())
  //   .catch((err) => err.message);
  
    const docRef = doc(firestore, "usersLinks", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      return ("No such document!");
    }
  
}


export async function updateUserProfile({ firstname, lastname, userId }) {
  const authUser = doc(firestore, "usersLinks", userId);
  const update = await updateDoc(authUser, {
    firstname: firstname,
    lastname: lastname,
  });
  return update;
}

export async function updateUserImage({ imageUrl }) {
  const res = await updateProfile(auth.currentUser, {
    photoURL: imageUrl,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((err) => {
      // An error occurred
      // ...
      console.log(err);
      return err;
    });
  return res;
}

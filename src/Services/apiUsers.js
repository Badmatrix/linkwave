import { doc, getDoc, updateDoc } from "firebase/firestore";
import {  firestore } from "./FirebaseConfig";
// import { updateProfile } from "firebase/auth";

export async function getAuthUserData(userId) {
  const docRef = doc(firestore, "usersLinks", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    throw new Error("invalid user...check and try again");
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
export async function updateUserLinks(userId, links) {
  // console.log(userId,links)
  const authUser = doc(firestore, "usersLinks", userId);
  const newLink = links.map((link) => {
    return { ...link, icon: link.icon?.name || link.icon };
  });
  console.log(newLink)
  const update = await updateDoc(authUser, {
    links: newLink,
  })
    .then(() => "you've added your links successfully")
    .catch((err) => err);
  return update;
}

// export async function updateUserImage({ imageUrl }) {
//   const res = await updateProfile(auth.currentUser, {
//     photoURL: imageUrl,
//   })
//     .then(() => {
//       // Profile updated!
//       // ...
//     })
//     .catch((err) => {
//       // An error occurred
//       // ...
//       console.log(err);
//       return err;
//     });
//   return res;
// }

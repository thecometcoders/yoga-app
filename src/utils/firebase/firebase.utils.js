// Config Firebase App
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCerHKb60-_-MPHi099Alq4_yYCgJi4e7M",
  authDomain: "yoga-app-37eec.firebaseapp.com",
  projectId: "yoga-app-37eec",
  storageBucket: "yoga-app-37eec.appspot.com",
  messagingSenderId: "96591663501",
  appId: "1:96591663501:web:dd09e00b081ffc616d6dc4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// config Google Auth
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// config Firestore Data Base
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }

    return userDocRef;
  }
};

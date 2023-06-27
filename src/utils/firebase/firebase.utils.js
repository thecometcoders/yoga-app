// Config Firebase App
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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
// Sign Up whit Google
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// config Firestore Data Base
export const db = getFirestore();

// create users and store in firebase (Google/Email & Password)
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }

    return userDocRef;
  }
};

export const createAuthUserWhitEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Log in whit Email & Password

export const SingInAuthUserWhitEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

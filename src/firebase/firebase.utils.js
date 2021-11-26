import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyA6b1xXO7YwWuul4z895iZ3FvGJgne7rLY",
  authDomain: "crown-store-9bc42.firebaseapp.com",
  projectId: "crown-store-9bc42",
  storageBucket: "crown-store-9bc42.appspot.com",
  messagingSenderId: "270914762231",
  appId: "1:270914762231:web:4a5aeda587aeabff1e2af2",
  measurementId: "G-DCVXGMTGYZ",
};

const app = initializeApp(config);

export const auth = getAuth();

const provider = new auth.GoogleAuthProvider();

provider.serCustomParameters({ prompt: "select_account" });

export const signInWithGooogle = () => auth.signInWithPopup(provider);

export default app;

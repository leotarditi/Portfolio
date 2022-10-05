
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCLi6M7o3g42J866wM5Lk9RiocxwM5wfHw",
  authDomain: "react-portfolio-dashboar-bf86f.firebaseapp.com",
  projectId: "react-portfolio-dashboar-bf86f",
  storageBucket: "react-portfolio-dashboar-bf86f.appspot.com",
  messagingSenderId: "1084786272078",
  appId: "1:1084786272078:web:0097ec44c0600880aba01f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
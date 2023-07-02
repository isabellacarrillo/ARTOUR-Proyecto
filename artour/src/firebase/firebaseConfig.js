//Configuración para la conexión con Firebase y Firestore

import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_rAJQFmo9HrMfdb-myUJ29BdC2n7O1lg", //import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: "artour-25768.firebaseapp.com",//import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  projectId: "artour-25768", //import.meta.env.VITE_REACT_APP_PROJECTID,
  storageBucket: "artour-25768.appspot.com",//import.meta.env.VITE_REACT_APP_STORAGEBUCKET,
  messagingSenderId: "364747753502",//import.meta.env.VITE_REACT_APP_MESSAGINGSENDERID,
  appId:  "1:364747753502:web:0ac113ab44fb59760ac60f"//import.meta.env.VITE_REACT_APP_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const facebookProvider = new FacebookAuthProvider();

export const twitterProvider = new TwitterAuthProvider();

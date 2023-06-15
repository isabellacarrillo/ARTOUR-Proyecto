//Configuración para la conexión con Firebase y Firestore

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getStorage } from "firebase/storage";
//import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_rAJQFmo9HrMfdb-myUJ29BdC2n7O1lg",
    authDomain: "artour-25768.firebaseapp.com",
    projectId: "artour-25768",
    storageBucket: "artour-25768.appspot.com",
    messagingSenderId: "364747753502",
    appId: "1:364747753502:web:0ac113ab44fb59760ac60f"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const db = getFirestore(app);
//export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" }); 
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
import {browserSessionPersistence, getAuth, setPersistence } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCrGWrS9N1i7JBEjI_2FgQvh2lxLn7WBfE",
    authDomain: "endlichkeit-jetzt.firebaseapp.com",
    projectId: "endlichkeit-jetzt",
    storageBucket: "endlichkeit-jetzt.appspot.com",
    messagingSenderId: "175502364273",
    appId: "1:175502364273:web:4d06b1b6e7965ed11515d0"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence);

export {firestore, auth};
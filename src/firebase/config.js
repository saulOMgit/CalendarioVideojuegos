// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHWiMv_KlclLrIjdPWN4xsRSnOfGrot18",
  authDomain: "videogame-calendar.firebaseapp.com",
  projectId: "videogame-calendar",
  storageBucket: "videogame-calendar.appspot.com",
  messagingSenderId: "137655325919",
  appId: "1:137655325919:web:71c4ce71aa1493639b856a",
  measurementId: "G-3ZWR8X195F"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDb = getFirestore(Firebaseapp);
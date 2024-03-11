// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOSB2piPLErv5ryNXv6ZqvnZq2Y0nEg_g",
    authDomain: "app-peliculas-crud-dwfsm2s16.firebaseapp.com",
    projectId: "app-peliculas-crud-dwfsm2s16",
    storageBucket: "app-peliculas-crud-dwfsm2s16.appspot.com",
    messagingSenderId: "492508291328",
    appId: "1:492508291328:web:f9881e0df436aba4c5d3e5"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
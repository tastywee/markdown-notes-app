// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClKiqUnI8ZSgPLz8_2ZkHdAzGPDvMEXf0",
  authDomain: "markdown-notes-app-fc397.firebaseapp.com",
  projectId: "markdown-notes-app-fc397",
  storageBucket: "markdown-notes-app-fc397.appspot.com",
  messagingSenderId: "287090113218",
  appId: "1:287090113218:web:949ae8c3e892f72459d95b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const notesCollection = collection(database, "notes");

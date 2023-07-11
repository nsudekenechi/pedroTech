// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtQsFqkAG5BOBCmY7wGvbLsOEVkrcmGdQ",
  authDomain: "pedrotech-react-a2f14.firebaseapp.com",
  projectId: "pedrotech-react-a2f14",
  storageBucket: "pedrotech-react-a2f14.appspot.com",
  messagingSenderId: "1093683733394",
  appId: "1:1093683733394:web:67c89d70aa78a5fc95174b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

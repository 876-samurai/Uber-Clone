// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBIINkDkEXAr6vKjZvn8lNArgeuGcKUqgw",
  authDomain: "uber-next-clone-live-25fa1.firebaseapp.com",
  projectId: "uber-next-clone-live-25fa1",
  storageBucket: "uber-next-clone-live-25fa1.appspot.com",
  messagingSenderId: "20487179028",
  appId: "1:20487179028:web:6627a8bcc8683e85171001"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}

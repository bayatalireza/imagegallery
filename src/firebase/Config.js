// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA740zIFXMT1wt57UFre49NhPpC-klc34Y",
  authDomain: "images-gallery-42521.firebaseapp.com",
  projectId: "images-gallery-42521",
  storageBucket: "images-gallery-42521.appspot.com",
  messagingSenderId: "327170667794",
  appId: "1:327170667794:web:639a4f7574d45ca44bafcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize  Firestore 
const db = getFirestore(app);

// Initialize  Storage 
const storage = getStorage(app);

export {db, storage}
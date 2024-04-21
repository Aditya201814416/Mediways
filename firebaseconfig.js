// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCZRnT2NBUTB70hOlfyHFn1_4MQkzjj0CA",
  authDomain: "mediway-b38cd.firebaseapp.com",
  projectId: "mediway-b38cd",
  storageBucket: "mediway-b38cd.appspot.com",
  messagingSenderId: "1051653187349",
  appId: "1:1051653187349:web:5eaa7a91bab57037e02b1c",
  measurementId: "G-WSYF7336LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const databases = getDatabase(app);

export const database = getAuth(app);

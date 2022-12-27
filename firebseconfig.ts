import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUZM2SYAnOwEWeKjLnZaCPZOfK5RmaqGg",
  authDomain: "next-auth-crud-38dfa.firebaseapp.com",
  projectId: "next-auth-crud-38dfa",
  storageBucket: "next-auth-crud-38dfa.appspot.com",
  messagingSenderId: "1049651862286",
  appId: "1:1049651862286:web:1ecf71df259778bd7b155f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

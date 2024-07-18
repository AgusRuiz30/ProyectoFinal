import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxZwjip5qVR5cB1OpMXGvs4MGszsIyKmc",
  authDomain: "proyecto-final-78dfa.firebaseapp.com",
  projectId: "proyecto-final-78dfa",
  storageBucket: "proyecto-final-78dfa.appspot.com",
  messagingSenderId: "645310594604",
  appId: "1:645310594604:web:5cec6e840571ce2a3e9b89",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

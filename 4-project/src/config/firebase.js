// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnMOmlQZbOGSv8F_1wYG7R7MBoaO81ljs",
  authDomain: "contact-1883d.firebaseapp.com",
  projectId: "contact-1883d",
  storageBucket: "contact-1883d.appspot.com",
  messagingSenderId: "210924636361",
  appId: "1:210924636361:web:ab38e82568367e977ae518"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

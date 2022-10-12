// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBilv-xpjwZcaSkMdoY458trYSA5HXj8dQ",
  authDomain: "rj-ecommerce-ch.firebaseapp.com",
  projectId: "rj-ecommerce-ch",
  storageBucket: "rj-ecommerce-ch.appspot.com",
  messagingSenderId: "342661380371",
  appId: "1:342661380371:web:8c99b7706f553a40dd42e6"
};

//? Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
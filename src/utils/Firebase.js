// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-clone-cd8f2.firebaseapp.com",
  projectId: "netflix-clone-cd8f2",
  storageBucket: "netflix-clone-cd8f2.appspot.com",
  messagingSenderId: "1089565290587",
  appId: "1:1089565290587:web:140b2384fb25329c3e0f7e",
  measurementId: "G-WHB4K6LTK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
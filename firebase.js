// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1IsmoM09PkzMDkmhT_1L2JxRLlQZ-L6w",
  authDomain: "flashcard-saas-2bb83.firebaseapp.com",
  projectId: "flashcard-saas-2bb83",
  storageBucket: "flashcard-saas-2bb83.appspot.com",
  messagingSenderId: "811971966306",
  appId: "1:811971966306:web:a04e6209429245cc0c283b",
  measurementId: "G-MM67PEX8F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}

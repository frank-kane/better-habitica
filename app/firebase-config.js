// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlBQOLmdo81-4QXfIbEwTf4m6yVEZfp5o",
  authDomain: "databasetest-68987.firebaseapp.com",
  projectId: "databasetest-68987",
  storageBucket: "databasetest-68987.appspot.com",
  messagingSenderId: "507475180753",
  appId: "1:507475180753:web:a11e21d8288109921f99f0",
  measurementId: "G-Z2Y82R97GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
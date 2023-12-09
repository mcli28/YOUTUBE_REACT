// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGJOPjJYTYulvfEBqKkObovIijY0J5JJU",
  authDomain: "faztprojects.firebaseapp.com",
  projectId: "faztprojects",
  storageBucket: "faztprojects.appspot.com",
  messagingSenderId: "916724892313",
  appId: "1:916724892313:web:a5190bdca72c948f3aae08",
  measurementId: "G-5H8MRTWYMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
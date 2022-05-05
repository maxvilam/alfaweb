// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7vmQSeauJouaa7VISZBQulK9YRavSSgE",
  authDomain: "cursos-alfaweb-7f121.firebaseapp.com",
  projectId: "cursos-alfaweb-7f121",
  storageBucket: "cursos-alfaweb-7f121.appspot.com",
  messagingSenderId: "14946765459",
  appId: "1:14946765459:web:4f75745c2328149292db66",
  measurementId: "G-KZKW0X59RH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

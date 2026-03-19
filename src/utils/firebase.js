// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv9XS8bCk_IladoCVscgwHfGndY724teU",
  authDomain: "netflix-gpt-fb3d0.firebaseapp.com",
  projectId: "netflix-gpt-fb3d0",
  storageBucket: "netflix-gpt-fb3d0.firebasestorage.app",
  messagingSenderId: "158037264758",
  appId: "1:158037264758:web:bcc943dd395c3562da1257",
  measurementId: "G-R5TV30LH0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

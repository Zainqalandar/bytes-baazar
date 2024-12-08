// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider  } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHAEz2JAwYBDGIEEqBhV4N6Kh1zJ5i-XY",
  authDomain: "react-fuse-auth.firebaseapp.com",
  projectId: "react-fuse-auth",
  storageBucket: "react-fuse-auth.appspot.com",
  messagingSenderId: "810734322441",
  appId: "1:810734322441:web:559d0434492a1ef0b289d8",
  measurementId: "G-3764BRGKPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

// Google Provider
export const googleProvider = new GoogleAuthProvider();
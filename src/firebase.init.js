// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkeE_TXrTepY6TqZWXS9vAqWMlR8_h6-E",
  authDomain: "travel-guru-d412d.firebaseapp.com",
  projectId: "travel-guru-d412d",
  storageBucket: "travel-guru-d412d.appspot.com",
  messagingSenderId: "654360682930",
  appId: "1:654360682930:web:e8dc2163dc8b2cf8dc84ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT7XWcO6C4wDmv1Mv8_aws9B_X59qTv50",
  authDomain: "chat-1ba4d.firebaseapp.com",
  projectId: "chat-1ba4d",
  storageBucket: "chat-1ba4d.appspot.com",
  messagingSenderId: "1017124053455",
  appId: "1:1017124053455:web:a1f21ef7eaad83a56ab2ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
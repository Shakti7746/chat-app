// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz4ZLZn2gjOVcP9yvWrcBM8KSg0UZO1ho",
  authDomain: "holachat-a0724.firebaseapp.com",
  projectId: "holachat-a0724",
  storageBucket: "holachat-a0724.appspot.com",
  messagingSenderId: "296685528134",
  appId: "1:296685528134:web:79c0bfbefc2345edc41647",
  measurementId: "G-NCLN1VX9CB"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);
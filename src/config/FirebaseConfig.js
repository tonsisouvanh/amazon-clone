import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn7U5wxaQUaI26a6dwzRqzi7-b0_1qZMk",
  authDomain: "e-clone-c309d.firebaseapp.com",
  projectId: "e-clone-c309d",
  storageBucket: "e-clone-c309d.appspot.com",
  messagingSenderId: "816905833601",
  appId: "1:816905833601:web:69c6d24b79ebb22cb81180",
  measurementId: "G-13SYKTL09W",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

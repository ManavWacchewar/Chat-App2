import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWN_IWMz9caGdDWgaWm5A7Jz9y5XQYnus",
  authDomain: "chat3-eb96e.firebaseapp.com",
  projectId: "chat3-eb96e",
  storageBucket: "chat3-eb96e.appspot.com",
  messagingSenderId: "150219849694",
  appId: "1:150219849694:web:2bf2cba178b0c46174274f"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

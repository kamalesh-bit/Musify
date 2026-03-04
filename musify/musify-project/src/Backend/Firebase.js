
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGvk9kyxMzyf14goCc88SpYFYANxgp4Og",
  authDomain: "musify-72ae8.firebaseapp.com",
  projectId: "musify-72ae8",
  storageBucket: "musify-72ae8.firebasestorage.app",
  messagingSenderId: "60011510864",
  appId: "1:60011510864:web:0367b0c647460b24882555",
  measurementId: "G-RCMK8RVXKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const _Auth = getAuth(app);
const DB = getFirestore(app);

export { DB, _Auth };

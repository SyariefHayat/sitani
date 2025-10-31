import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAbxr_67or4nAfXi3y7CH7LE8u70LuX3As",
    authDomain: "sitani-edf93.firebaseapp.com",
    projectId: "sitani-edf93",
    storageBucket: "sitani-edf93.firebasestorage.app",
    messagingSenderId: "1097388186971",
    appId: "1:1097388186971:web:2db6fe5944c8e1586f0e7e",
    measurementId: "G-ZVPC6ZFC1G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB92gqkiSvLDWVeJsdejRY5v7AHfJTl5gc",
    authDomain: "ntp-azn.firebaseapp.com",
    projectId: "ntp-azn",
    storageBucket: "ntp-azn.appspot.com",
    messagingSenderId: "915936726705",
    appId: "1:915936726705:web:fff6df8eb0718782d41c90",
    measurementId: "G-T82G4SWSW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

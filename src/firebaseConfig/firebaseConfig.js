// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmldAzAHHDeI73HFj4guZHL0fXxFtIqoQ",
    authDomain: "blood-donation-campaign-13c16.firebaseapp.com",
    projectId: "blood-donation-campaign-13c16",
    storageBucket: "blood-donation-campaign-13c16.appspot.com",
    messagingSenderId: "754015180675",
    appId: "1:754015180675:web:48f4b175c0b89d3ed7c8b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
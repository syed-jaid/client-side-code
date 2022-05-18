// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFsuL7ERVSJQE8BTPLPguCyJkcs2ako7I",
    authDomain: "final--project-de5ce.firebaseapp.com",
    projectId: "final--project-de5ce",
    storageBucket: "final--project-de5ce.appspot.com",
    messagingSenderId: "65441524361",
    appId: "1:65441524361:web:d6bd2e088849075c93f458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
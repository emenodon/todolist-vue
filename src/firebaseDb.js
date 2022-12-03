import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2PLUubpHudEzORH8_ULlk9JRwrs_qaHA",
    authDomain: "crudvue-1b5a7.firebaseapp.com",
    projectId: "crudvue-1b5a7",
    storageBucket: "crudvue-1b5a7.appspot.com",
    messagingSenderId: "195429325537",
    appId: "1:195429325537:web:116646f6f788a3c0a935a0",
    measurementId: "G-9Y86VM1B6Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

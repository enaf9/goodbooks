import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "goodbooks-37a92.firebaseapp.com",
  databaseURL: "https://goodbooks-37a92.firebaseio.com",
  projectId: "goodbooks-37a92",
  storageBucket: "",
  messagingSenderId: "615215240125",
  appId: "1:615215240125:web:238889890cf88caa"
};
//initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;

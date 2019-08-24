import firebase from "firebase/app";
import "firebase/firestore";

//Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDOc1Ss9ZYNCji-8xllQ-LJ1H47hwtuvbo",
  authDomain: "goodbooks-37a92.firebaseapp.com",
  databaseURL: "https://goodbooks-37a92.firebaseio.com",
  projectId: "goodbooks-37a92",
  storageBucket: "",
  messagingSenderId: "615215240125",
  appId: "1:615215240125:web:238889890cf88caa"
};
//initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

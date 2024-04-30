import { firebase } from "firebase/app";
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
      apiKey: "AIzaSyDirH_Kr-R8xEqocJHWxOiJUyy-6Ti4qas",   authDomain: "yduck-33d8a.firebaseapp.com",   databaseURL: "https://yduck-33d8a-default-rtdb.firebaseio.com",   projectId: "yduck-33d8a",   storageBucket: "yduck-33d8a.appspot.com",   messagingSenderId: "848590035268",   appId: "1:848590035268:web:47571a11418cd6ad501f11",   measurementId: "G-67EKJBN8ND"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
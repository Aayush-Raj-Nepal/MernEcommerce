import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init
var firebaseConfig = {
  apiKey: "AIzaSyDg-w2TxbUCBTnnbVAIRA5gipxo-TXOOCg",
  authDomain: "subidhaonline-de029.firebaseapp.com",
  projectId: "subidhaonline-de029",
  storageBucket: "subidhaonline-de029.appspot.com",
  messagingSenderId: "662339859667",
  appId: "1:662339859667:web:ee7f5611c61d7dc5ca9026",
  measurementId: "G-9G0WF7PJ05",
};
firebase.initializeApp(firebaseConfig);
// utils
const db = firebase.firestore();
// const auth = firebase.auth();

// collection references
const contactMessageCollection=db.collection("contactMessage")
const extrasCollection = db.collection("extras");

// export utils/refs
export {firebase, db, extrasCollection,contactMessageCollection };

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
const extrasCollection = db.collection("extras");
const contactMessageCollection = db.collection("contactMessage");
const emailCollection = db.collection("newsletter");

// export utils/refs
<<<<<<< HEAD
export { db, extrasCollection, contactMessageCollection, emailCollection };
=======
export { db, extrasCollection, contactMessageCollection, emailCollection };
>>>>>>> c1f990f047db0670c37362ef82aac8df3d7399aa

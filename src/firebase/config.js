import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIV5G80p0nWhxWdAgvrI2TTGgfr2KSyCU",
    authDomain: "my-vue-website-39e31.firebaseapp.com",
    projectId: "my-vue-website-39e31",
    storageBucket: "my-vue-website-39e31.appspot.com",
    messagingSenderId: "1071154496110",
    appId: "1:1071154496110:web:effdf83c7446d6a0e6dc7f"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db 
const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, timestamp }
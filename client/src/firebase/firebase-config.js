import firebase from 'firebase';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firebase/app.js'
// import 'firebase/firestore';
// import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCA1uT2IwQuRB25W9b0th01O6wkxcZv4RE",
    authDomain: "hitalent-846dd.firebaseapp.com",
    projectId: "hitalent-846dd",
    storageBucket: "hitalent-846dd.appspot.com",
    messagingSenderId: "159221205988",
    appId: "1:159221205988:web:5b5d7d6bde4c4adb5095f1"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
// const db = firebase.firestore();
// const provider = new firebase.auth.GoogleAuthProvider();


export{ app, auth, firebase, provider };

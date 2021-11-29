import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

//AQUÍ VAN LAS CREDENCIALES DEL FIREBASE

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export{ db, googleAuthProvider, facebookAuthProvider, firebase };
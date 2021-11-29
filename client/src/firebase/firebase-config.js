import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export{ db, googleAuthProvider, facebookAuthProvider, firebase };
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDg8l0kHwkqchJM5QdsOZ62tyJSfLhuh20",
  authDomain: "crown-db-1b648.firebaseapp.com",
  databaseURL: "https://crown-db-1b648.firebaseio.com",
  projectId: "crown-db-1b648",
  storageBucket: "crown-db-1b648.appspot.com",
  messagingSenderId: "1029574372975",
  appId: "1:1029574372975:web:f5946eef5d37c2d104a79a",
  measurementId: "G-N8V2T8RLQG"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)
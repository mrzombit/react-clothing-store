import firebase from "firebase/app";

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCP2_p9wgZtU7bQBReO_MNv63Yo8EwRZmI",
    authDomain: "crwn-db-2f5a5.firebaseapp.com",
    projectId: "crwn-db-2f5a5",
    storageBucket: "crwn-db-2f5a5.appspot.com",
    messagingSenderId: "697711768643",
    appId: "1:697711768643:web:36e8e1b1f204692c1610f6",
    measurementId: "G-Z8RN0XJ1DL"
  };

  firebase.initializeApp(config)

  export const auth= firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase

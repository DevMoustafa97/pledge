import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDd6Ar3jh6HevcTmXfwq7YXyqtIp1LrGFg",
    authDomain: "pledge-xteam.firebaseapp.com",
    databaseURL: "https://pledge-xteam.firebaseio.com",
    projectId: "pledge-xteam",
    storageBucket: "pledge-xteam.appspot.com",
    messagingSenderId: "402916156501",
    appId: "1:402916156501:web:4bd7ae4923fbf8481820dc",
    measurementId: "G-CRPEQ14KQM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();

  export default firebase;
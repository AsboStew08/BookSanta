import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDTuGPN1aARFtCN-t108cLTd9vE6d7FnjA",
    authDomain: "book-santa-2a736.firebaseapp.com",
    projectId: "book-santa-2a736",
    storageBucket: "book-santa-2a736.appspot.com",
    messagingSenderId: "74741168958",
    appId: "1:74741168958:web:965f78c621dd4a8a6d8a6f"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
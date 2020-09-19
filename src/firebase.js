import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAabO1rd5FdVJJ6-7MnDI_LzlQtisEoaq8",
  authDomain: "clone-bcef8.firebaseapp.com",
  databaseURL: "https://clone-bcef8.firebaseio.com",
  projectId: "clone-bcef8",
  storageBucket: "clone-bcef8.appspot.com",
  messagingSenderId: "742830831265",
  appId: "1:742830831265:web:1853d5012b799521ea62e0",
  measurementId: "G-7ZYSMVBTE1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
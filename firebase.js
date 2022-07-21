// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQJ0xT37c5DZ39qjGsOXiqvnRVBdjl3xA",
  authDomain: "projet-test-ace27.firebaseapp.com",
  databaseURL: "https://projet-test-ace27-default-rtdb.firebaseio.com",
  projectId: "projet-test-ace27",
  storageBucket: "projet-test-ace27.appspot.com",
  messagingSenderId: "932919260187",
  appId: "1:932919260187:web:df5b291166a4f90c0074be",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
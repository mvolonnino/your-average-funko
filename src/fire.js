import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcZmJ5zBwB3VB9wNgErljuv-hRz7eaCEs",
  authDomain: "youraveragefunko-2a93b.firebaseapp.com",
  databaseURL: "https://youraveragefunko-2a93b.firebaseio.com",
  projectId: "youraveragefunko-2a93b",
  storageBucket: "youraveragefunko-2a93b.appspot.com",
  messagingSenderId: "451155430887",
  appId: "1:451155430887:web:88c7c926220ce6ec9f0142",
  measurementId: "G-181XJKJSJ6",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebaseApp.firestore();

const auth = firebase.auth();
const gProvider = new firebase.auth.GoogleAuthProvider();
const fProvider = new firebase.auth.FacebookAuthProvider();

export { auth, gProvider, fProvider };
export default db;

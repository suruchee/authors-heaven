import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRetDPC37sQmu42YJYGXjSuZ8etv1mQao",
  authDomain: "authors-heaven-d2211.firebaseapp.com",
  projectId: "authors-heaven-d2211",
  storageBucket: "authors-heaven-d2211.appspot.com",
  messagingSenderId: "20117766432",
  appId: "1:20117766432:web:12f9957e50589edf279745",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };
export default db;

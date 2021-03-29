import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAqinfEY6t8m5rIQQBk27ile6-4dRi1SL4",
  authDomain: "slack-clone-yt-81b88.firebaseapp.com",
  projectId: "slack-clone-yt-81b88",
  storageBucket: "slack-clone-yt-81b88.appspot.com",
  messagingSenderId: "926678496230",
  appId: "1:926678496230:web:38bd95d5fefc6d9ee65c27",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

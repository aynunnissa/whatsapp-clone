import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBvJllIgkpA_v8wmwQCElK2OMZM4ToTUls",
  authDomain: "whatsapp-696ce.firebaseapp.com",
  projectId: "whatsapp-696ce",
  storageBucket: "whatsapp-696ce.appspot.com",
  messagingSenderId: "750945130423",
  appId: "1:750945130423:web:fd31a9c375e047b133fa32"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }
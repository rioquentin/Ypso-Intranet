import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMQLyXJfTBQKzyPjcchr5X2CsrH-_jdXk",
  authDomain: "ypso-db.firebaseapp.com",
  projectId: "ypso-db",
  storageBucket: "ypso-db.appspot.com",
  messagingSenderId: "614382944508",
  appId: "1:614382944508:web:c4f2c3e142b4710a2d1779",
  measurementId: "G-2MGQLG4B4W"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Obtenir l'instance Firestore
const db = getFirestore(app);

export default db;

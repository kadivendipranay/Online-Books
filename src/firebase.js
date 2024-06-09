// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWzjufkCV0_njjLtOKt9wCu6S8CG6SdPM",
    authDomain: "online-bookstore-5d61a.firebaseapp.com",
    projectId: "online-bookstore-5d61a",
    storageBucket: "online-bookstore-5d61a.appspot.com",
    messagingSenderId: "343021791417",
    appId: "1:343021791417:web:e706dba29e61f8d4df5368"
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

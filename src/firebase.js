// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBRYCqC9zD_wMOTy7zFSGYfK1XHKSCOTkI",
    authDomain: "online-bookstore-1877d.firebaseapp.com",
    projectId: "online-bookstore-1877d",
    storageBucket: "online-bookstore-1877d.appspot.com",
    messagingSenderId: "273664682083",
    appId: "1:273664682083:web:64756b1be296b1e216b056"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

// ==============================
// Firebase Config
// ==============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc,
    query,
    orderBy,
    where,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJ4XYugqiw-AJGKiANygsRsRwV4eu_FAU",
    authDomain: "digital-seva-kendra-a80c8.firebaseapp.com",
    projectId: "digital-seva-kendra-a80c8",
    storageBucket: "digital-seva-kendra-a80c8.firebasestorage.app",
    messagingSenderId: "640161490116",
    appId: "1:640161490116:web:5af2daf8363069ceb61591"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export
export {
    db,
    auth,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc,
    query,
    orderBy,
    where,
    serverTimestamp,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
};
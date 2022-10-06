
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDpavzWkOSUrp-RM0Y51D7rqKTObO7vuBg",
    authDomain: "fir-first-practice.firebaseapp.com",
    projectId: "fir-first-practice",
    storageBucket: "fir-first-practice.appspot.com",
    messagingSenderId: "400876623324",
    appId: "1:400876623324:web:f9570f1d74fdef20256b19"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
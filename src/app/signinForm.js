import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './showMessage.js';

const signinForm = document.getElementById('login-form');

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials);
        showMessage('You are logged in','success');
        const loginModal = document.getElementById('signinModal');
        const modal = bootstrap.Modal.getInstance(loginModal);
        modal.hide();
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showMessage('Wrong password');
        } else if (error.code === 'auth/user-not-found') {
            showMessage('User not found');
        } else {
            showMessage(error.message, 'error');
        }
    }
});
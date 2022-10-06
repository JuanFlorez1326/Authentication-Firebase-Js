import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signupForm['register-email'].value;
    const password = signupForm['register-password'].value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        const signupModal = document.getElementById('signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();
        showMessage('You have successfully signed up!', 'success');

    } catch (error) {
        console.log(error);

        if(error.code === 'auth/invalide-email') {
            showMessage('Invalid email', 'error');
        }
        else if(error.code === 'auth/weak-password') {
            showMessage('Password is too weak', 'error');
        }
        else if(error.code === 'auth/email-already-in-use') {
            showMessage('Email already in use', 'error');
        }
        else if (error.code) {
            showMessage('Something went wrong', 'error');
        }
    }
});
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const btnGoogle = document.getElementById('googleLogin');

//Use http://localhost:5500/src/?# Google Login.
btnGoogle.addEventListener('click', async (e) => {
    const provider = new GoogleAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider);
        console.log(credentials);

        const googleLoginModal = document.getElementById('signinModal');
        const modal = bootstrap.Modal.getInstance(googleLoginModal);

        modal.hide();
        showMessage('Welcome ' + credentials.user.displayName, 'success');
    } catch (error) {
        console.log(error);
    }
});
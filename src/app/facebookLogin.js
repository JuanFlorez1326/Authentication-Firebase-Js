import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const btnFacebook = document.getElementById('facebookLogin');

//Use http://localhost:5500/src/?# Google Login.
btnFacebook.addEventListener('click', async (e) => {
    const provider = new FacebookAuthProvider();
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
import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const btnGitHub = document.getElementById('githubLogin');

//Use http://localhost:5500/src/?# Google Login.
btnGitHub.addEventListener('click', async (e) => {
    const provider = new GithubAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider);
        console.log(credentials);

        const githubLoginModal = document.getElementById('signinModal');
        const modal = bootstrap.Modal.getInstance(githubLoginModal);

        modal.hide();
        showMessage('Welcome ' + credentials.user.displayName, 'success');
    } catch (error) {
        if(error.code === 'auth/account-exists-with-different-credential') {
            showMessage('You have already signed up with a different auth provider for that email.');
        } else {
            showMessage(error.message, 'error');
        }
        console.log(error);
    }
});
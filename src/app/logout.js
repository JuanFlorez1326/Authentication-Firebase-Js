import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
const logout = document.getElementById('logout');

logout.addEventListener('click', async (e) => {
    await signOut(auth);
    console.log('Signed Out');
});
import {
    auth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "./firebase.js";

// ----------------------------
// LOGIN FUNCTION
// ----------------------------
window.loginAdmin = async function () {
    const email = document.getElementById("adminEmail").value.trim();
    const pass = document.getElementById("adminPass").value.trim();
    const msg = document.getElementById("loginMsg");

    msg.innerText = "Logging in...";
    msg.style.color = "blue";

    try {
        await signInWithEmailAndPassword(auth, email, pass);

        // Wait a little to allow Firebase session save
        setTimeout(() => {
            window.location.replace("dashboard.html");
        }, 500);

    } catch (error) {
        msg.innerText = error.message;
        msg.style.color = "red";
    }
};

// ----------------------------
// LOGOUT FUNCTION
// ----------------------------
window.logoutAdmin = async function () {
    await signOut(auth);
    window.location.replace("login.html");
};

// ----------------------------
// PAGE PROTECTION
// ----------------------------
const currentPage = window.location.pathname;

// Agar admin page hai aur login page nahi hai
if (!currentPage.includes("login.html")) {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.replace("login.html");
        }
    });
}
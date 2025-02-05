// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAM_4Yz9u6pXx7OyL9NEQP2XSHDsjnWhSg",
    authDomain: "my-sanivivara-01-login-sign-in.firebaseapp.com",
    projectId: "my-sanivivara-01-login-sign-in",
    storageBucket: "my-sanivivara-01-login-sign-in.appspot.com",
    messagingSenderId: "785077674983",
    appId: "1:785077674983:web:d3caefaeb0f8e0a5065342"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// URL tujuan setelah login
const redirectURL = "https://sites.google.com/view/sanivara/halaman-muka/halaman-login/halaman-rumah"; // Ganti dengan URL dashboard yang benar

// Cek Status Login
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User sudah login:", user.email);
        if (window.location.pathname.includes("index.html")) {
            window.location.href = redirectURL; // Redirect ke dashboard
        }
    } else {
        console.log("User belum login");
        if (window.location.href.includes(redirectURL)) {
            window.location.href = "index.html"; // Kembali ke login jika tidak ada user
        }
    }
});

// Fungsi Login
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login berhasil:", userCredential.user);
        window.location.href = redirectURL; // Redirect setelah login
    } catch (error) {
        console.error("Error login:", error.message);
        alert("Login gagal: " + error.message);
    }
});

// Fungsi Logout
document.getElementById("logout-btn")?.addEventListener("click", async () => {
    try {
        await signOut(auth);
        console.log("Logout berhasil");
        window.location.href = "index.html"; // Kembali ke halaman login setelah logout
    } catch (error) {
        console.error("Error logout:", error.message);
    }
});
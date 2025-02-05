// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// 🔥 Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAM_4Yz9u6pXx7OyL9NEQP2XSHDsjnWhSg",
  authDomain: "my-sanivivara-01-login-sign-in.firebaseapp.com",
  projectId: "my-sanivivara-01-login-sign-in",
  storageBucket: "my-sanivivara-01-login-sign-in.appspot.com", // ✅ Diperbaiki
  messagingSenderId: "785077674983",
  appId: "1:785077674983:web:d3caefaeb0f8e0a5065342",
  measurementId: "G-JTDE6M8ET8"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Ekspor agar bisa digunakan di file lain
export { app, auth, analytics };
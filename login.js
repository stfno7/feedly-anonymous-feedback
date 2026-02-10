import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    await signInWithEmailAndPassword(window.auth, email, password);
    window.location.href = "admin.html";
  } catch (err) {
    error.textContent = "Credenciales incorrectas";
    error.classList.remove("hidden");
  }
});
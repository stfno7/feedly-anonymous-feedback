    const textarea = document.getElementById("feedback");
    const counter = document.getElementById("counter");
    const error = document.getElementById("error");
    const submitBtn = document.getElementById("submitBtn");
    const success = document.getElementById("success");
    const form = document.getElementById("feedbackForm");
    const MIN_LENGTH = 10; // Validación texto minimo
    const MAX_LENGTH = 500; // " " maximo
    import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

    textarea.addEventListener("input", () => {
    const value = textarea.value.trim();
    const length = textarea.value.length;

    counter.textContent = `${length} / ${MAX_LENGTH}`;

    if (value.length < MIN_LENGTH) {
        error.classList.remove("hidden");
        submitBtn.disabled = true;
    } else {
        error.classList.add("hidden");
        submitBtn.disabled = false;
    }
    });

    form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = textarea.value.trim();
    if (message.length < 10) return;

    try {
        await addDoc(collection(window.db, "feedbacks"), {
        message,
        createdAt: serverTimestamp()
        });

        success.classList.remove("hidden");
        textarea.value = "";
        counter.textContent = `0 / 500`;
        submitBtn.disabled = true;
    } catch (err) {
        alert("Error al enviar feedback");
        console.error(err);
    }
    });
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"; // Firestore
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"; // Auth

const list = document.getElementById("feedback-list");
const empty = document.getElementById("empty");
const auth = getAuth();
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});


async function loadFeedback() {
  const q = query(
    collection(window.db, "feedbacks"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    empty.classList.remove("hidden");
    return;
  }

  snapshot.forEach((feedbackDoc) => {
    const data = feedbackDoc.data();
    const id = feedbackDoc.id;

    const card = document.createElement("div");
    card.className =
      "bg-white p-4 rounded-lg shadow border flex justify-between gap-4";

    card.innerHTML = `
      <div>
        <p class="mb-2">${data.message}</p>
        <span class="text-xs text-gray-400">
          ${data.createdAt.toDate().toLocaleString()}
        </span>
      </div>
      <button data-id="${id}" class="text-red-500 text-sm">
        Eliminar
      </button>
    `;

    list.appendChild(card);
  });
}

list.addEventListener("click", async (e) => {
  if (!e.target.dataset.id) return;

  const confirmDelete = confirm("¿Eliminar este feedback?");
  if (!confirmDelete) return;

  await deleteDoc(doc(window.db, "feedbacks", e.target.dataset.id));
  e.target.closest(".bg-white").remove();
});

loadFeedback();
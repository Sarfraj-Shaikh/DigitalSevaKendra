import {
    db,
    auth,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc,
    query,
    orderBy,
    serverTimestamp
} from "./firebase.js";

async function loadNotices() {
    const noticeList = document.getElementById("noticeList");

    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    noticeList.innerHTML = "";

    snapshot.forEach(docItem => {
        const data = docItem.data();

        noticeList.innerHTML += `
      <div class="notice-item">
        <span>${data.text}</span>
        <div class="notice-actions">
          <button onclick="editNotice('${docItem.id}', '${data.text}')">Edit</button>
          <button class="delete-btn" onclick="deleteNotice('${docItem.id}')">Delete</button>
        </div>
      </div>
    `;
    });
}

window.addNotice = async function () {
    const noticeText = document.getElementById("noticeText").value.trim();

    if (noticeText === "") {
        alert("Notice cannot be empty");
        return;
    }

    await addDoc(collection(db, "notices"), {
        text: noticeText,
        active: true,
        createdAt: serverTimestamp()
    });

    document.getElementById("noticeText").value = "";
    loadNotices();
};

window.deleteNotice = async function (id) {
    if (!confirm("Delete this notice?")) return;

    await deleteDoc(doc(db, "notices", id));
    loadNotices();
};

window.editNotice = async function (id, oldText) {
    const newText = prompt("Enter new notice text:", oldText);

    if (!newText || newText.trim() === "") return;

    await updateDoc(doc(db, "notices", id), {
        text: newText
    });

    loadNotices();
};

loadNotices();
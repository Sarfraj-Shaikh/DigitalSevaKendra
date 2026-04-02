import {
    db,
    collection,
    getDocs,
    query,
    orderBy,
    where
} from "./firebase.js";

async function loadNotices() {
    const marquee = document.getElementById("noticeMarquee");

    try {
        const q = query(
            collection(db, "notices"),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        marquee.innerHTML = "";

        if (snapshot.empty) {
            marquee.innerHTML = "<span>No Updates Available</span>";
            return;
        }

        snapshot.forEach(docItem => {
            const data = docItem.data();
            if (data.active === true) {
                marquee.innerHTML += `<span>${data.text}</span>`;
            }
        });

    } catch (err) {
        console.log("Firestore Error:", err);
        marquee.innerHTML = "<span>Notice Load Failed</span>";
    }
}

loadNotices();
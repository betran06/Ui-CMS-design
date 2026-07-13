/* ======================================================
   SIGNPLUS CMS
   NEW PLAYLIST
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initPlaylist();

});


/* ======================================================
   INIT
====================================================== */

function initPlaylist() {

    editableTitle();

    backButton();

    savePlaylist();

    previewPlaylist();

    dragCanvas();

}


/* ======================================================
   BACK
====================================================== */

function backButton() {

    const back = document.querySelector(".back-btn");

    if (!back) return;

    back.addEventListener("click", () => {

        if (confirm("Leave this page? Unsaved changes will be lost.")) {

            window.location.href = "playlist.html";

        }

    });

}


/* ======================================================
   EDIT TITLE
====================================================== */

function editableTitle() {

    const title = document.getElementById("playlistName");

    const edit = document.querySelector(".edit-name");

    if (!title || !edit) return;

    edit.addEventListener("click", () => {

        const current = title.innerText;

        const name = prompt("Playlist Name", current);

        if (name && name.trim() !== "") {

            title.innerText = name;

            toast("Playlist renamed");

        }

    });

}


/* ======================================================
   SAVE
====================================================== */

function savePlaylist() {

    const save = document.querySelector(".playlist-action .primary-btn");

    if (!save) return;

    save.addEventListener("click", () => {

        toast("Playlist saved successfully");

    });

}


/* ======================================================
   PREVIEW
====================================================== */

function previewPlaylist() {

    const preview = document.querySelector(".playlist-action .outline-btn");

    if (!preview) return;

    preview.addEventListener("click", () => {

        toast("Preview feature coming soon");

    });

}


/* ======================================================
   DRAG CANVAS
====================================================== */

function dragCanvas() {

    const canvas = document.querySelector(".playlist-canvas");

    if (!canvas) return;

    canvas.addEventListener("dragover", (e) => {

        e.preventDefault();

        canvas.style.borderColor = "#2563EB";

        canvas.style.background = "#EFF6FF";

    });

    canvas.addEventListener("dragleave", () => {

        canvas.style.borderColor = "#D1D5DB";

        canvas.style.background = "#FFFFFF";

    });

    canvas.addEventListener("drop", (e) => {

        e.preventDefault();

        canvas.style.borderColor = "#D1D5DB";

        canvas.style.background = "#FFFFFF";

        toast("Content added to playlist");

    });

}


/* ======================================================
   TOAST
====================================================== */

function toast(message) {

    let toast = document.querySelector(".toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.innerHTML = `

        <i class="fa-solid fa-circle-check"></i>

        <span>${message}</span>

    `;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}
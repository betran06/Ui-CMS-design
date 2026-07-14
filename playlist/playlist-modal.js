/* =====================================================
   SIGNPLUS CMS PLAYLIST MODAL
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadPlaylistModal();

});


/* =====================================================
   LOAD MODAL
===================================================== */

function loadPlaylistModal() {

    const container = document.getElementById("playlistModalContainer");

    if (!container) return;

    fetch("playlist-modal.html")

        .then(response => response.text())

        .then(html => {

            container.innerHTML = html;

            initPlaylistModal();

        })

        .catch(error => {

            console.error("Failed to load playlist modal:", error);

        });

}


/* =====================================================
   INIT
===================================================== */

function initPlaylistModal() {

    bindModalEvents();

}


/* =====================================================
   EVENTS
===================================================== */

function bindModalEvents() {

    const openBtn = document.getElementById("openAddContentModal");

    const modal = document.getElementById("playlistModal");

    if (!modal) return;

    const closeBtn = modal.querySelector(".close-playlist-modal");

    const cancelBtn = modal.querySelector(".cancel-playlist-modal");

    const selectBtn = modal.querySelector(".select-playlist-btn");


    /* OPEN */

    if (openBtn) {

        openBtn.onclick = openPlaylistModal;

    }


    /* CLOSE */

    closeBtn.onclick = closePlaylistModal;

    cancelBtn.onclick = closePlaylistModal;


    /* CLICK OUTSIDE */

    modal.onclick = function (e) {

        if (e.target === modal) {

            closePlaylistModal();

        }

    };


    /* ESC */

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            closePlaylistModal();

        }

    });


    /* TAB */

    const tabs = modal.querySelectorAll(".playlist-tab");

    const contents = modal.querySelectorAll(".playlist-tab-content");

    tabs.forEach(tab => {

        tab.onclick = function () {

            tabs.forEach(item => {

                item.classList.remove("active");

            });

            contents.forEach(item => {

                item.classList.remove("active");

            });

            tab.classList.add("active");

            document
                .getElementById(tab.dataset.tab)
                .classList.add("active");

        };

    });


    /* CARD SELECT */

    const cards = modal.querySelectorAll(".playlist-select-card");

    cards.forEach(card => {

        card.onclick = function () {

            cards.forEach(item => {

                item.classList.remove("selected");

                item.querySelector("input").checked = false;

            });

            card.classList.add("selected");

            card.querySelector("input").checked = true;

        };

    });


    /* SELECT */

    selectBtn.onclick = function () {

        const selected = modal.querySelector("input[name='playlistContent']:checked");

        if (!selected) {

            toast("Please select one content.");

            return;

        }

        toast("Content added to playlist.");

        closePlaylistModal();

    };

}


/* =====================================================
   OPEN
===================================================== */

function openPlaylistModal() {

    const modal = document.getElementById("playlistModal");

    if (!modal) return;

    modal.classList.add("show");

}


/* =====================================================
   CLOSE
===================================================== */

function closePlaylistModal() {

    const modal = document.getElementById("playlistModal");

    if (!modal) return;

    modal.classList.remove("show");

}


/* =====================================================
   TOAST
===================================================== */

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

/* =====================================================
   SIGNPLUS CMS
   PLAYLIST PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initFavorite();

    initView();

    initSearch();

    initButtons();

    initFilter();

    animateCard();

});


/* =====================================================
   FAVORITE
===================================================== */

function initFavorite() {

    const favorites = document.querySelectorAll(".favorite");

    favorites.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("active");

            const icon = button.querySelector("i");

            if (button.classList.contains("active")) {

                icon.classList.remove("fa-regular");

                icon.classList.add("fa-solid");

                showToast("Playlist Added to Favorite");

            } else {

                icon.classList.remove("fa-solid");

                icon.classList.add("fa-regular");

                showToast("Favorite Removed");

            }

        });

    });

}


/* =====================================================
   GRID / LIST VIEW
===================================================== */

function initView() {

    const grid = document.querySelectorAll(".icon-btn")[0];

    const list = document.querySelectorAll(".icon-btn")[1];

    const wrapper = document.querySelector(".playlist-list");

    if (!grid || !list) return;

    grid.addEventListener("click", () => {

        wrapper.classList.add("grid-view");

        showToast("Grid View");

    });

    list.addEventListener("click", () => {

        wrapper.classList.remove("grid-view");

        showToast("List View");

    });

}


/* =====================================================
   SEARCH
===================================================== */

function initSearch() {

    const input = document.querySelector(".search-box input");

    const cards = document.querySelectorAll(".playlist-card");

    if (!input) return;

    input.addEventListener("keyup", () => {

        const keyword = input.value.toLowerCase();

        let total = 0;

        cards.forEach(card => {

            const title = card.querySelector("h2")
                .innerText
                .toLowerCase();

            if (title.includes(keyword)) {

                card.style.display = "flex";

                total++;

            } else {

                card.style.display = "none";

            }

        });

        const empty = document.querySelector(".empty-state");

        if (empty) {

            empty.style.display = total === 0
                ? "block" : "none";

        }

    });

}


/* =====================================================
   BUTTON
===================================================== */

function initButtons() {

    const create = document.querySelector(".primary-btn");

    if (create) {

        create.addEventListener("click", () => {

            window.location.href = "playlist/new-playlist.html";

        });

    }

}


/* =====================================================
   FILTER
===================================================== */

function initFilter() {

    const selects = document.querySelectorAll("select");

    selects.forEach(select => {

        select.addEventListener("change", () => {

            showToast("Filter : " + select.value);

        });

    });

}


/* =====================================================
   ACTION BUTTON
===================================================== */

document.querySelectorAll(".outline-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            const action = button.innerText.trim();

            if (action === "Edit") {

                window.location.href = "playlist/new-playlist.html";

            } else {

                showToast(action);

            }

        });

    });


/* =====================================================
   DELETE
===================================================== */

document.querySelectorAll(".danger-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            if (confirm("Delete this playlist ?")) {

                button.closest(".playlist-card").remove();

                showToast("Playlist Deleted");

            }

        });

    });


/* =====================================================
   CARD ANIMATION
===================================================== */

function animateCard() {

    const cards = document.querySelectorAll(".playlist-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".45s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 120);

    });

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    let toast = document.querySelector(".toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.innerHTML = `

        <i class="fa-solid fa-circle-check"></i>

        ${message}

    `;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =====================================================
   DEMO
===================================================== */

setTimeout(() => {

    showToast("Playlist Library Loaded");

}, 800);
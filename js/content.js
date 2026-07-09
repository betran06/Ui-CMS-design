/* ======================================================
   SIGNPLUS CMS
   CONTENT PAGE
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initFavorite();

    initView();

    initButtons();

    initSearch();

    initFilter();

    animateCard();

});


/* ======================================================
   FAVORITE
====================================================== */

function initFavorite() {

    const stars = document.querySelectorAll(".favorite");

    stars.forEach(star => {

        star.addEventListener("click", () => {

            star.classList.toggle("active");

            const icon = star.querySelector("i");

            if (star.classList.contains("active")) {

                icon.classList.remove("fa-regular");

                icon.classList.add("fa-solid");

                showToast("Added to Favorite");

            } else {

                icon.classList.remove("fa-solid");

                icon.classList.add("fa-regular");

                showToast("Removed from Favorite");

            }

        });

    });

}


/* ======================================================
   GRID / LIST
====================================================== */

function initView() {

    const buttons = document.querySelectorAll(".icon-btn");

    const list = document.querySelector(".content-list");

    if (buttons.length < 2) return;

    buttons[0].addEventListener("click", () => {

        list.classList.add("grid-view");

        showToast("Grid View");

    });

    buttons[1].addEventListener("click", () => {

        list.classList.remove("grid-view");

        showToast("List View");

    });

}


/* ======================================================
   BUTTON
====================================================== */

function initButtons() {

    const create = document.querySelector(".primary-btn");

    const upload = document.querySelector(".secondary-btn");

    create.addEventListener("click", () => {

        showToast("Open Create Content");

    });

    upload.addEventListener("click", () => {

        showToast("Open Upload Content");

    });

}


/* ======================================================
   SEARCH
====================================================== */

function initSearch() {

    const input = document.querySelector(".search-box input");

    const cards = document.querySelectorAll(".content-card");

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


/* ======================================================
   FILTER
====================================================== */

function initFilter() {

    const select = document.querySelectorAll("select");

    select.forEach(item => {

        item.addEventListener("change", () => {

            showToast(item.value);

        });

    });

}


/* ======================================================
   ACTION BUTTON
====================================================== */

document.querySelectorAll(".outline-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            const text = button.innerText.trim();

            showToast(text);

        });

    });


/* ======================================================
   DELETE
====================================================== */

document.querySelectorAll(".danger-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            if (confirm("Delete this content ?")) {

                button.closest(".content-card").remove();

                showToast("Content Deleted");

            }

        });

    });


/* ======================================================
   CARD ANIMATION
====================================================== */

function animateCard() {

    const cards = document.querySelectorAll(".content-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".4s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 120);

    });

}


/* ======================================================
   TOAST
====================================================== */

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


/* ======================================================
   DEMO
====================================================== */

setTimeout(() => {

    showToast("Content Library Loaded");

}, 800);
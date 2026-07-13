/* ======================================================
   SIGNPLUS CMS
   SCHEDULE PAGE
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initFavorite();

    initView();

    initSearch();

    initButtons();

    initFilter();

    animateCard();

});


/* ======================================================
   FAVORITE
====================================================== */

function initFavorite() {

    const favorites = document.querySelectorAll(".favorite");

    favorites.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("active");

            const icon = button.querySelector("i");

            if (button.classList.contains("active")) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

                showToast("Schedule added to favorite");

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

                showToast("Favorite removed");

            }

        });

    });

}


/* ======================================================
   GRID / LIST VIEW
====================================================== */

function initView() {

    const buttons = document.querySelectorAll(".icon-btn");

    const wrapper = document.querySelector(".schedule-list");

    if (buttons.length < 2 || !wrapper) return;

    buttons[0].addEventListener("click", () => {

        wrapper.classList.add("grid-view");

        showToast("Grid View");

    });

    buttons[1].addEventListener("click", () => {

        wrapper.classList.remove("grid-view");

        showToast("List View");

    });

}


/* ======================================================
   SEARCH
====================================================== */

function initSearch() {

    const input = document.querySelector(".search-box input");

    const cards = document.querySelectorAll(".schedule-card");

    const empty = document.querySelector(".empty-state");

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

        if (empty) {

            empty.style.display = total === 0
                ? "block"
                : "none";

        }

    });

}


/* ======================================================
   BUTTON
====================================================== */

function initButtons() {

    const newSchedule = document.querySelector(".primary-btn");

    if (newSchedule) {

        newSchedule.addEventListener("click", () => {

            showToast("Open New Schedule");

        });

    }

}


/* ======================================================
   FILTER
====================================================== */

function initFilter() {

    const selects = document.querySelectorAll("select");

    selects.forEach(select => {

        select.addEventListener("change", () => {

            showToast("Filter : " + select.value);

        });

    });

}


/* ======================================================
   ACTION BUTTON
====================================================== */

document.querySelectorAll(".outline-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            const action = button.innerText.trim();

            if (action === "Edit") {

                window.location.href = "scedule/new-scedule.html";

            } else {

                showToast(action);

            }

        });

    });


/* ======================================================
   DELETE
====================================================== */

document.querySelectorAll(".danger-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            const confirmDelete = confirm("Delete this schedule?");

            if (confirmDelete) {

                button.closest(".schedule-card").remove();

                showToast("Schedule Deleted");

                checkEmpty();

            }

        });

    });


/* ======================================================
   EMPTY STATE
====================================================== */

function checkEmpty() {

    const cards = document.querySelectorAll(".schedule-card");

    const visible = [...cards].filter(card => card.style.display !== "none");

    const empty = document.querySelector(".empty-state");

    if (!empty) return;

    empty.style.display = visible.length === 0
        ? "block"
        : "none";

}


/* ======================================================
   CARD ANIMATION
====================================================== */

function animateCard() {

    const cards = document.querySelectorAll(".schedule-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".45s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 150);

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

    showToast("Schedule Manager Loaded");

}, 800);

/* ==========================================
   NEW SCHEDULE
========================================== */

const newScheduleBtn = document.getElementById("newScheduleBtn");

if (newScheduleBtn) {

    newScheduleBtn.addEventListener("click", () => {

        window.location.href = "schedule/new-schedule.html";

    });

}

/* ===========================================
   SIGNPLUS CMS
   SCREEN PAGE
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initViewButton();

    initRefresh();

    initActionMenu();

    initButtons();

    animateCards();

});


/* ===========================================
   GRID & LIST VIEW
=========================================== */

function initViewButton() {

    const gridBtn = document.querySelectorAll(".icon-btn")[0];
    const listBtn = document.querySelectorAll(".icon-btn")[1];

    const grid = document.querySelector(".screen-grid");

    if (!gridBtn || !listBtn || !grid) return;

    gridBtn.addEventListener("click", () => {

        grid.classList.remove("list-view");

        showToast("Grid View");

    });

    listBtn.addEventListener("click", () => {

        grid.classList.add("list-view");

        showToast("List View");

    });

}


/* ===========================================
   REFRESH
=========================================== */

function initRefresh() {

    const refreshBtn = document.querySelectorAll(".icon-btn")[2];

    if (!refreshBtn) return;

    refreshBtn.addEventListener("click", () => {

        refreshBtn.classList.add("rotate");

        showToast("Refreshing Screen...");

        setTimeout(() => {

            refreshBtn.classList.remove("rotate");

        }, 1200);

    });

}


/* ===========================================
   CARD MENU
=========================================== */

function initActionMenu() {

    const buttons = document.querySelectorAll(".screen-title button");

    buttons.forEach(btn => {

        btn.addEventListener("click", (e) => {

            e.stopPropagation();

            closeAllMenu();

            let menu = btn.parentElement.querySelector(".dropdown-menu");

            if (menu) {

                menu.classList.toggle("show");

            }

        });

    });

    document.addEventListener("click", closeAllMenu);

}


function closeAllMenu() {
    document.querySelectorAll(".dropdown-menu").forEach(menu => {

        menu.classList.remove("show");

    });
}


/* ===========================================
   BUTTON
=========================================== */

function initButtons() {

    const addBtn = document.querySelector(".primary-btn");

    const wallBtn = document.querySelector(".secondary-btn");

    if (addBtn && addBtn.id !== "openScreenModal") {

        addBtn.addEventListener("click", () => {

            showToast("Open Add Screen");

        });

    }

    if (wallBtn) {

        wallBtn.addEventListener("click", () => {

            showToast("Open Screen Wall");

        });

    }

    document.querySelectorAll(".outline-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            showToast(btn.innerText);

        });

    });

}


/* ===========================================
   CARD ANIMATION
=========================================== */

function animateCards() {

    const cards = document.querySelectorAll(".screen-card");

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


/* ===========================================
   TOAST
=========================================== */

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


/* ===========================================
   FILTER
=========================================== */

document.querySelectorAll("select").forEach(select => {

    select.addEventListener("change", () => {

        showToast("Filter : " + select.value);

    });

});


/* ===========================================
   PREVIEW
=========================================== */

document.querySelectorAll(".outline-btn").forEach(button => {

    if (button.innerText === "Preview") {

        button.addEventListener("click", () => {

            console.log("Preview Screen");

        });

    }

});


/* ===========================================
   EDIT
=========================================== */

document.querySelectorAll(".outline-btn").forEach(button => {

    if (button.innerText === "Edit") {

        button.addEventListener("click", () => {

            console.log("Edit Screen");

        });

    }

});


/* ===========================================
   DEMO
=========================================== */

setTimeout(() => {

    showToast("Welcome to Screen Management");

}, 800);

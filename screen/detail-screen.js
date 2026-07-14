/* =====================================================
   SIGNPLUS CMS
   DETAIL SCREEN
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initDetailScreen();

});


/* =====================================================
   INIT
===================================================== */

function initDetailScreen() {

    backButton();

    editScreenName();

    refreshScreen();

    setContent();

    moreAction();

}


/* =====================================================
   BACK BUTTON
===================================================== */

function backButton() {

    const button = document.getElementById("backScreen");

    if (!button) return;

    button.onclick = () => {

        window.location.href = "../screen.html";

    };

}


/* =====================================================
   EDIT NAME
===================================================== */

function editScreenName() {

    const button = document.querySelector(".edit-btn");

    const title = document.querySelector(".page-title h1");

    if (!button || !title) return;

    button.onclick = () => {

        const value = prompt(

            "Screen Name",

            title.innerText

        );

        if (!value) return;

        title.innerText = value;

        toast("Screen name updated");

    };

}


/* =====================================================
   REFRESH
===================================================== */

function refreshScreen() {

    const refreshButton = document.querySelector(".page-action .outline-btn");

    if (!refreshButton) return;

    refreshButton.onclick = () => {

        const icon = refreshButton.querySelector("i");

        icon.classList.add("fa-spin");

        toast("Refreshing screen...");

        setTimeout(() => {

            icon.classList.remove("fa-spin");

            toast("Screen refreshed");

        }, 1500);

    };

}


/* =====================================================
   SET CONTENT
===================================================== */

function setContent() {

    const button = document.querySelector(".primary-btn");

    if (!button || button.id === "setContentBtn") return;

    button.onclick = () => {

        toast("Open Set Content");

    };

}


/* =====================================================
   MORE MENU
===================================================== */

function moreAction() {

    const buttons = document.querySelectorAll(".outline-btn");

    if (buttons.length < 2) return;

    const moreButton = buttons[1];

    moreButton.onclick = () => {

        toast("More actions coming soon");

    };

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

const refreshButton = document.getElementById("refreshScreenBtn");
const setContentButton = document.getElementById("setContentBtn");
const moreButton = document.getElementById("moreScreenBtn");

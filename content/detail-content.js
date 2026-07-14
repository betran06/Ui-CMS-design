/* =====================================================
   SIGNPLUS CMS
   DETAIL CONTENT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initDetailContent();

});


/* =====================================================
   INIT
===================================================== */

function initDetailContent() {

    backButton();

    editContentName();

    switchTabs();

    previewContent();

    downloadContent();

    setToScreens();

    moreAction();

}


/* =====================================================
   BACK BUTTON
===================================================== */

function backButton() {

    const button = document.getElementById("backContent");

    if (!button) return;

    button.addEventListener("click", () => {

        window.location.href = "../content.html";

    });

}


/* =====================================================
   EDIT CONTENT NAME
===================================================== */

function editContentName() {

    const button = document.getElementById("editContentName");

    const title = document.querySelector(".page-title h1");

    if (!button || !title) return;

    button.addEventListener("click", () => {

        const value = prompt(

            "Content Name",

            title.innerText

        );

        if (!value) return;

        title.innerText = value;

        showToast("Content name updated.");

    });

}


/* =====================================================
   TAB
===================================================== */

function switchTabs() {

    const tabs = document.querySelectorAll(".content-tab");

    const bodies = document.querySelectorAll(".content-tab-body");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(item => {

                item.classList.remove("active");

            });

            bodies.forEach(item => {

                item.classList.remove("active");

            });

            tab.classList.add("active");

            document

                .getElementById(tab.dataset.tab)

                .classList.add("active");

        });

    });

}


/* =====================================================
   PREVIEW
===================================================== */

function previewContent() {

    const button = document.getElementById("previewBtn");

    if (!button) return;

    button.addEventListener("click", () => {

        showToast("Preview opened.");

    });

}


/* =====================================================
   DOWNLOAD
===================================================== */

function downloadContent() {

    const button = document.getElementById("downloadBtn");

    if (!button) return;

    button.addEventListener("click", () => {

        showToast("Downloading content...");

    });

}


/* =====================================================
   SET TO SCREENS
===================================================== */

function setToScreens() {

    const buttons = [

        document.getElementById("setToScreenBtn"),

        document.getElementById("setToScreenSidebar")

    ];

    buttons.forEach(button => {

        if (!button) return;

        button.addEventListener("click", () => {

            showToast("Open Set To Screens.");

        });

    });

}


/* =====================================================
   MORE ACTION
===================================================== */

function moreAction() {

    const button = document.getElementById("moreBtn");

    if (!button) return;

    button.addEventListener("click", () => {

        showToast("More actions coming soon.");

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

        <span>${message}</span>

    `;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}
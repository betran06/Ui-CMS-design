/* ======================================================
   SIGNPLUS CMS
   USER PROFILE PAGE
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initSaveButton();

    initCancelButton();

    initChangePhoto();

    initPasswordToggle();

    initInputWatcher();

    animateForm();

});


/* ======================================================
   SAVE
====================================================== */

function initSaveButton() {

    const save = document.querySelector(".primary-btn");

    if (!save) return;

    save.addEventListener("click", (e) => {

        e.preventDefault();

        const password = document.querySelectorAll('input[type="password"]');

        if (password.length === 3) {

            if (password[1].value !== password[2].value) {

                showToast("New password doesn't match.");

                return;

            }

        }

        showToast("Profile updated successfully.");

    });

}


/* ======================================================
   CANCEL
====================================================== */

function initCancelButton() {

    const cancel = document.querySelector(".outline-btn");

    if (!cancel) return;

    cancel.addEventListener("click", () => {

        document.querySelectorAll("input").forEach(input => {

            if (input.type === "password") {

                input.value = "";

            }

        });

        showToast("Changes discarded.");

    });

}


/* ======================================================
   CHANGE PHOTO
====================================================== */

function initChangePhoto() {

    const button = document.querySelector(".secondary-btn");

    if (!button) return;

    button.addEventListener("click", () => {

        showToast("Open image picker.");

    });

}


/* ======================================================
   PASSWORD TOGGLE
====================================================== */

function initPasswordToggle() {

    const passwords = document.querySelectorAll('input[type="password"]');

    passwords.forEach(input => {

        const wrapper = input.parentElement;

        wrapper.style.position = "relative";

        const icon = document.createElement("i");

        icon.className = "fa-regular fa-eye";

        icon.style.position = "absolute";
        icon.style.right = "18px";
        icon.style.top = "46px";
        icon.style.cursor = "pointer";
        icon.style.color = "#64748B";

        wrapper.appendChild(icon);

        icon.addEventListener("click", () => {

            if (input.type === "password") {

                input.type = "text";

                icon.className = "fa-regular fa-eye-slash";

            } else {

                input.type = "password";

                icon.className = "fa-regular fa-eye";

            }

        });

    });

}


/* ======================================================
   INPUT WATCHER
====================================================== */

function initInputWatcher() {

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {

        input.addEventListener("input", () => {

            input.style.borderColor = "#2563EB";

        });

        input.addEventListener("blur", () => {

            input.style.borderColor = "#D1D5DB";

        });

    });

}


/* ======================================================
   ANIMATION
====================================================== */

function animateForm() {

    const cards = document.querySelectorAll(".card-section");

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(25px)";

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

        <span>${message}</span>

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

    showToast("User Profile Loaded");

}, 800);
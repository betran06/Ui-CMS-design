/* ======================================================
   SIGNPLUS CMS
   ABOUT PAGE
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    animateCard();

    enableCopy();

    enableLogoEffect();

    createCheckUpdate();

});


/* ======================================================
   CARD ANIMATION
====================================================== */

function animateCard() {

    const card = document.querySelector(".about-card");

    if (!card) return;

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = ".45s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, 150);

}


/* ======================================================
   COPY WEBSITE & EMAIL
====================================================== */

function enableCopy() {

    const items = document.querySelectorAll(".info-item");

    items.forEach(item => {

        const title = item.querySelector("strong")?.innerText;

        const value = item.querySelector("span");

        if (!title || !value) return;

        if (title === "Website" || title === "Email") {

            item.style.cursor = "pointer";

            item.title = "Click to copy";

            item.addEventListener("click", () => {

                navigator.clipboard.writeText(value.innerText);

                showToast(title + " copied.");

            });

        }

    });

}


/* ======================================================
   LOGO EFFECT
====================================================== */

function enableLogoEffect() {

    const logo = document.querySelector(".about-logo");

    if (!logo) return;

    logo.addEventListener("mouseenter", () => {

        logo.style.transform = "rotate(8deg) scale(1.05)";

    });

    logo.addEventListener("mouseleave", () => {

        logo.style.transform = "rotate(0deg) scale(1)";

    });

}


/* ======================================================
   CHECK UPDATE BUTTON
====================================================== */

function createCheckUpdate() {

    const footer = document.querySelector(".about-footer");

    if (!footer) return;

    const button = document.createElement("button");

    button.className = "outline-btn";

    button.style.marginTop = "25px";

    button.innerHTML = `

        <i class="fa-solid fa-rotate"></i>

        Check for Updates

    `;

    footer.appendChild(button);

    button.addEventListener("click", () => {

        showToast("You are using the latest version.");

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

    showToast("SignPlus CMS v1.0.0");

}, 800);
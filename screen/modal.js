/* ======================================================
   SIGNPLUS CMS
   ADD SCREEN MODAL
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("modalContainer");

    if (!container) return;

    fetch("screen/modal.html")
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;

            const openBtn = document.getElementById("openScreenModal");

            if (openBtn) {
                openBtn.addEventListener("click", openModal);
            }
        })
        .catch(error => {
            console.error("Failed to load modal.html:", error);
        });

});


/* ======================================================
   OPEN MODAL
====================================================== */

function openModal() {

    const modal = document.getElementById("screenModal");

    modal.classList.add("show");

    initModal();

}


/* ======================================================
   INIT
====================================================== */

function initModal() {

    resetWizard();

    bindEvents();

    startSlider();

}


/* ======================================================
   BIND EVENTS
====================================================== */

function bindEvents() {

    const modal = document.getElementById("screenModal");

    const overlay = modal;

    const closeIcon = modal.querySelector(".close-modal");

    const closeBtn = modal.querySelector(".close-btn");

    const cancelBtn = modal.querySelector(".cancel-btn");

    const previousBtn = modal.querySelector(".previous-btn");

    const deviceCard = modal.querySelector(".device-card");

    const virtualCard = modal.querySelector(".virtual-card");

    const pairBtn = modal.querySelector(".pair-btn");


    const pairNowBtn = modal.querySelector(".pair-now-btn");


    /* CLOSE */

    closeIcon.onclick = closeModal;

    closeBtn.onclick = closeModal;

    cancelBtn.onclick = closeModal;

    overlay.onclick = function (e) {

        if (e.target === overlay) {

            closeModal();

        }

    };


    /* DEVICE */

    deviceCard.onclick = function () {

        showDeviceStep();

    };


    /* VIRTUAL */

    virtualCard.onclick = function () {

        showVirtualStep();

    };


    /* PREVIOUS */

    previousBtn.onclick = function () {

        if (document.querySelector(".step-pair").classList.contains("active")) {

            showDeviceStep();

        } else {

            resetWizard();

        }

    };


    /* PAIR */

    pairBtn.onclick = function () {

        showPairStep();

    };


    /* CREATE */

    createBtn.onclick = function () {

        toast("Virtual Screen Created");

        setTimeout(closeModal, 1500);

    };


    /* PAIR NOW */

    pairNowBtn.onclick = function () {

        const codeInput = document.getElementById("licenseCode");

        if (codeInput && codeInput.value.trim() === "") {

            toast("Please enter a valid license key!");

            return;

        }

        toast("Device successfully paired!");

        setTimeout(closeModal, 1500);

    };

}

function hideAllSteps() {

    document.querySelector(".step-one").classList.remove("active");
    document.querySelector(".step-device").classList.remove("active");
    document.querySelector(".step-virtual").classList.remove("active");
    document.querySelector(".step-pair").classList.remove("active");

}


/* ======================================================
   DEVICE STEP
====================================================== */

function showDeviceStep() {

    hideAllSteps();

    document.querySelector(".step-device").classList.add("active");

    document.querySelector(".previous-btn").style.display = "inline-flex";
    document.querySelector(".pair-btn").style.display = "inline-flex";
    document.querySelector(".cancel-btn").style.display = "none";
    document.querySelector(".pair-now-btn").style.display = "none";
    document.querySelector(".close-btn").style.display = "none";

}


/* ======================================================
   VIRTUAL STEP
====================================================== */

function showVirtualStep() {

    hideAllSteps();

    document.querySelector(".step-virtual").classList.add("active");

    document.querySelector(".previous-btn").style.display = "inline-flex";
    document.querySelector(".pair-btn").style.display = "inline-flex";
    document.querySelector(".cancel-btn").style.display = "none";
    document.querySelector(".pair-now-btn").style.display = "none";
    document.querySelector(".close-btn").style.display = "none";

}


/* ======================================================
   PAIR STEP (STEP 3)
====================================================== */

function showPairStep() {

    hideAllSteps();

    document.querySelector(".step-pair").classList.add("active");

    document.querySelector(".previous-btn").style.display = "inline-flex";
    document.querySelector(".pair-btn").style.display = "none";
    document.querySelector(".cancel-btn").style.display = "inline-flex";
    document.querySelector(".pair-now-btn").style.display = "inline-flex";
    document.querySelector(".close-btn").style.display = "none";

}


/* ======================================================
   RESET
====================================================== */

function resetWizard() {

    document.querySelector(".step-one").classList.add("active");

    document.querySelector(".step-device").classList.remove("active");

    document.querySelector(".step-virtual").classList.remove("active");

    document.querySelector(".step-pair").classList.remove("active");

    document.querySelector(".previous-btn").style.display = "none";

    document.querySelector(".pair-btn").style.display = "none";

    document.querySelector(".cancel-btn").style.display = "none";

    document.querySelector(".pair-now-btn").style.display = "none";

    document.querySelector(".close-btn").style.display = "inline-flex";

}


/* ======================================================
   CLOSE
====================================================== */

function closeModal() {

    document.getElementById("screenModal")
        .classList.remove("show");

}


/* ======================================================
   DEVICE SLIDER
====================================================== */

let sliderInterval;

function startSlider() {

    clearInterval(sliderInterval);

    const slides = document.querySelectorAll(".device-slide");

    const dots = document.querySelectorAll(".slider-dots .dot");

    let index = 0;

    if (slides.length === 0) return;

    function showSlide(i) {

        slides.forEach(slide => {

            slide.classList.remove("active");

        });

        dots.forEach(dot => {

            dot.classList.remove("active");

        });

        slides[i].classList.add("active");

        dots[i].classList.add("active");

    }

    showSlide(0);

    sliderInterval = setInterval(() => {

        index++;

        if (index >= slides.length) {

            index = 0;

        }

        showSlide(index);

    }, 3000);

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
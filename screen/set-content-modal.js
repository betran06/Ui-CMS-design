/* =====================================================
   SIGNPLUS CMS
   SCREEN SET CONTENT MODAL
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadScreenContentModal();

});


/* =====================================================
   LOAD MODAL
===================================================== */

function loadScreenContentModal() {

    const container = document.getElementById("screenContentModalContainer");

    if (!container) return;

    fetch("set-content-modal.html")

        .then(response => response.text())

        .then(html => {

            container.innerHTML = html;

            initScreenContentModal();

        })

        .catch(error => {

            console.error("Failed to load Set Content Modal:", error);

        });

}


/* =====================================================
   INIT
===================================================== */

function initScreenContentModal() {

    bindScreenContentEvents();

}


/* =====================================================
   EVENTS
===================================================== */

function bindScreenContentEvents() {

    const openBtn = document.getElementById("setContentBtn");

    const openButtons = document.querySelectorAll("#setContentBtn, .screen-action-card .full-btn");

    const modal = document.getElementById("screenContentModal");

    if (!modal) return;

    const closeBtn = modal.querySelector(".screen-content-close");

    const cancelBtn = modal.querySelector(".screen-content-cancel");

    const publishBtn = modal.querySelector(".screen-content-publish");


    /* ================= OPEN ================= */

    if (openBtn) {

        openBtn.onclick = openScreenContentModal;

    }

    openButtons.forEach(button => {

        button.onclick = openScreenContentModal;

    });


    /* ================= CLOSE ================= */

    closeBtn.onclick = closeScreenContentModal;

    cancelBtn.onclick = closeScreenContentModal;


    /* ================= CLICK OUTSIDE ================= */

    modal.onclick = function (e) {

        if (e.target === modal) {

            closeScreenContentModal();

        }

    };


    /* ================= ESC ================= */

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            closeScreenContentModal();

        }

    });


    /* ================= TAB ================= */

    const tabs = modal.querySelectorAll(".screen-content-tab");

    const bodies = modal.querySelectorAll(".screen-content-body");

    tabs.forEach(tab => {

        tab.onclick = function () {

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

        };

    });


    /* ================= CARD ================= */

    const cards = modal.querySelectorAll(".screen-content-card");

    cards.forEach(card => {

        card.onclick = function () {

            cards.forEach(item => {

                item.classList.remove("selected");

                const radio = item.querySelector("input");

                if (radio) radio.checked = false;

            });

            card.classList.add("selected");

            const radio = card.querySelector("input");

            if (radio) radio.checked = true;

        };

    });


    /* ================= PUBLISH ================= */

    publishBtn.onclick = function () {

        const selected = modal.querySelector("input[name='screenContent']:checked");

        if (!selected) {

            showScreenContentToast("Please select one item.");

            return;

        }

        showScreenContentToast("Content successfully assigned.");

        closeScreenContentModal();

    };

}


/* =====================================================
   OPEN
===================================================== */

function openScreenContentModal() {

    const modal = document.getElementById("screenContentModal");

    if (!modal) return;

    modal.classList.add("show");

}


/* =====================================================
   CLOSE
===================================================== */

function closeScreenContentModal() {

    const modal = document.getElementById("screenContentModal");

    if (!modal) return;

    modal.classList.remove("show");

}


/* =====================================================
   TOAST
===================================================== */

function showScreenContentToast(message) {

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

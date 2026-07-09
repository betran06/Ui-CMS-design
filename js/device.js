/* ======================================================
   SIGNPLUS CMS
   DEVICE PAGE
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initSearch();

    initStatusFilter();

    initLocationFilter();

    initButtons();

    animateRows();

    startHeartbeat();

});


/* ======================================================
   SEARCH DEVICE
====================================================== */

function initSearch() {

    const input = document.querySelector(".search-box input");

    if (!input) return;

    input.addEventListener("keyup", filterDevice);

}


/* ======================================================
   FILTER STATUS
====================================================== */

function initStatusFilter() {

    const status = document.querySelectorAll("select")[0];

    if (!status) return;

    status.addEventListener("change", filterDevice);

}


/* ======================================================
   FILTER LOCATION
====================================================== */

function initLocationFilter() {

    const location = document.querySelectorAll("select")[1];

    if (!location) return;

    location.addEventListener("change", filterDevice);

}


/* ======================================================
   FILTER
====================================================== */

function filterDevice() {

    const keyword = document
        .querySelector(".search-box input")
        .value
        .toLowerCase();

    const statusFilter = document
        .querySelectorAll("select")[0]
        .value;

    const locationFilter = document
        .querySelectorAll("select")[1]
        .value;

    const rows = document.querySelectorAll(".device-item");

    let total = 0;

    rows.forEach(row => {

        const title = row
            .querySelector("h3")
            .innerText
            .toLowerCase();

        const location = row.children[4]
            .querySelector("p")
            .innerText;

        const online = row.classList.contains("online")
            ? "Online"
            : "Offline";

        let visible = true;

        if (!title.includes(keyword))
            visible = false;

        if (statusFilter !== "All Status" &&
            online !== statusFilter)
            visible = false;

        if (locationFilter !== "All Location" &&
            location !== locationFilter)
            visible = false;

        row.style.display = visible
            ? "grid"
            : "none";

        if (visible) total++;

    });

    const empty = document.querySelector(".empty-device");

    if (empty) {

        empty.style.display = total === 0
            ? "block"
            : "none";

    }

}


/* ======================================================
   BUTTON
====================================================== */

function initButtons() {

    const register = document.querySelector(".primary-btn");

    if (register) {

        register.addEventListener("click", () => {

            showToast("Open Register Device");

        });

    }

    document.querySelectorAll(".outline-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                showToast("Open Device Detail");

            });

        });

}


/* ======================================================
   LIVE HEARTBEAT
====================================================== */

function startHeartbeat() {

    const dots = document.querySelectorAll(".status-dot.online");

    setInterval(() => {

        dots.forEach(dot => {

            dot.style.opacity = ".3";

            setTimeout(() => {

                dot.style.opacity = "1";

            }, 300);

        });

    }, 3000);

}


/* ======================================================
   ROW ANIMATION
====================================================== */

function animateRows() {

    const rows = document.querySelectorAll(".device-item");

    rows.forEach((row, index) => {

        row.style.opacity = "0";

        row.style.transform = "translateY(20px)";

        setTimeout(() => {

            row.style.transition = ".4s";

            row.style.opacity = "1";

            row.style.transform = "translateY(0)";

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

    showToast("Device Manager Loaded");

}, 800);
/* ======================================================
   SIGNPLUS CMS
   STORAGE PAGE
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initButtons();

    initSearch();

    initFilter();

    initView();

    initMore();

    animateRows();

});


/* ======================================================
   BUTTON
====================================================== */

function initButtons() {

    const uploadBtn = document.querySelector(".primary-btn");

    const folderBtn = document.querySelector(".secondary-btn");

    if (uploadBtn) {

        uploadBtn.addEventListener("click", () => {

            simulateUpload();

        });

    }

    if (folderBtn) {

        folderBtn.addEventListener("click", () => {

            showToast("Create New Folder");

        });

    }

}


/* ======================================================
   SEARCH
====================================================== */

function initSearch() {

    const input = document.querySelector(".search-box input");

    const rows = document.querySelectorAll(".file-row");

    const empty = document.querySelector(".empty-storage");

    if (!input) return;

    input.addEventListener("keyup", () => {

        const keyword = input.value.toLowerCase();

        let total = 0;

        rows.forEach(row => {

            const title = row.querySelector("strong")
                .innerText
                .toLowerCase();

            if (title.includes(keyword)) {

                row.style.display = "grid";

                total++;

            } else {

                row.style.display = "none";

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
   FILTER
====================================================== */

function initFilter() {

    const select = document.querySelector("select");

    if (!select) return;

    select.addEventListener("change", () => {

        const value = select.value;

        const rows = document.querySelectorAll(".file-row");

        rows.forEach(row => {

            const type = row.querySelector(".type")
                .innerText
                .trim();

            if (value === "All Files") {

                row.style.display = "grid";

                return;

            }

            if (type === value) {

                row.style.display = "grid";

            } else {

                row.style.display = "none";

            }

        });

        showToast(value);

    });

}


/* ======================================================
   GRID VIEW
====================================================== */

function initView() {

    const buttons = document.querySelectorAll(".icon-btn");

    const table = document.querySelector(".file-table");

    if (buttons.length < 2 || !table) return;

    buttons[0].addEventListener("click", () => {

        table.classList.add("grid-mode");

        showToast("Grid View");

    });

    buttons[1].addEventListener("click", () => {

        table.classList.remove("grid-mode");

        showToast("List View");

    });

}


/* ======================================================
   MORE BUTTON
====================================================== */

function initMore() {

    const buttons = document.querySelectorAll(".more-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            showToast("Open File Menu");

        });

    });

}


/* ======================================================
   UPLOAD
====================================================== */

function simulateUpload() {

    let upload = document.querySelector(".upload-progress");

    if (!upload) {

        upload = document.createElement("div");

        upload.className = "upload-progress";

        upload.innerHTML = `

            <h4>

                Uploading...

            </h4>

            <div class="upload-bar">

                <div class="upload-fill"></div>

            </div>

            <div class="upload-status">

                0%

            </div>

        `;

        document.querySelector(".content")
            .appendChild(upload);

    }

    upload.style.display = "block";

    let progress = 0;

    const fill = upload.querySelector(".upload-fill");

    const text = upload.querySelector(".upload-status");

    fill.style.width = "0";

    const timer = setInterval(() => {

        progress += 4;

        fill.style.width = progress + "%";

        text.innerHTML = progress + "%";

        if (progress >= 100) {

            clearInterval(timer);

            text.innerHTML = "Upload Complete";

            showToast("Upload Success");

            setTimeout(() => {

                upload.style.display = "none";

            }, 1500);

        }

    }, 60);

}


/* ======================================================
   ANIMATION
====================================================== */

function animateRows() {

    const rows = document.querySelectorAll(".file-row");

    rows.forEach((row, index) => {

        row.style.opacity = "0";

        row.style.transform = "translateY(20px)";

        setTimeout(() => {

            row.style.transition = ".35s";

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

    showToast("Storage Manager Loaded");

}, 800);


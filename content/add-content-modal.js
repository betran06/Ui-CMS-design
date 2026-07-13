/* ======================================================
   SIGNPLUS CMS ADD CONTENT MODAL
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("contentModalContainer");

    if (!container) return;

    const pathPrefix = window.location.pathname.includes('/playlist/') || window.location.pathname.includes('/scedule/') ? '../' : '';

    fetch(pathPrefix + "content/add-content-modal.html")
        .then(response => response.text())
        .then(html => {

            container.innerHTML = html;

            const openBtn = document.getElementById("openAddContentModal");

            if (openBtn) {

                openBtn.addEventListener("click", openContentModal);

            }

        })
        .catch(error => {

            console.error("Failed to load add-content-modal.html", error);

        });

});


/* ======================================================
   OPEN
====================================================== */

function openContentModal() {

    const modal = document.getElementById("addContentModal");

    if (!modal) return;

    modal.classList.add("show");

    initContentModal();

}


/* ======================================================
   INIT
====================================================== */

function initContentModal() {

    const modal = document.getElementById("addContentModal");

    if (!modal) return;

    const overlay = modal;

    const closeIcon = modal.querySelector(".close-content-modal");

    const closeBtn = modal.querySelector(".close-content");

    const saveBtn = modal.querySelector(".save-content");

    const tabs = modal.querySelectorAll(".tab-btn");

    const contents = modal.querySelectorAll(".tab-content");

    const browseBtn = modal.querySelector("#browseFile");

    const inputFile = modal.querySelector("#contentFile");

    const uploadBox = modal.querySelector(".upload-wrapper");


    /* ================= CLOSE ================= */

    closeIcon.onclick = closeContentModal;

    closeBtn.onclick = closeContentModal;

    overlay.onclick = function (e) {

        if (e.target === overlay) {

            closeContentModal();

        }

    };


    /* ================= TAB ================= */

    tabs.forEach(tab => {

        tab.onclick = function () {

            tabs.forEach(item => item.classList.remove("active"));

            contents.forEach(item => item.classList.remove("active"));

            tab.classList.add("active");

            document
                .getElementById(tab.dataset.tab)
                .classList.add("active");

        };

    });


    /* ================= BROWSE ================= */

    if (browseBtn && inputFile) {

        browseBtn.onclick = () => inputFile.click();

        inputFile.onchange = function () {

            showSelectedFiles(this.files);

        };

    }


    /* ================= DRAG DROP ================= */

    if (uploadBox) {

        uploadBox.addEventListener("dragover", e => {

            e.preventDefault();

            uploadBox.style.borderColor = "#2563EB";

            uploadBox.style.background = "#EFF6FF";

        });

        uploadBox.addEventListener("dragleave", () => {

            uploadBox.style.borderColor = "#D1D5DB";

            uploadBox.style.background = "";

        });

        uploadBox.addEventListener("drop", e => {

            e.preventDefault();

            uploadBox.style.borderColor = "#D1D5DB";

            uploadBox.style.background = "";

            if (e.dataTransfer.files.length > 0) {

                showSelectedFiles(e.dataTransfer.files);

            }

        });

    }


    /* ================= SAVE ================= */

    saveBtn.onclick = function () {

        toast("Content saved successfully");

        setTimeout(closeContentModal, 1200);

    };

}


/* ======================================================
   CLOSE
====================================================== */

function closeContentModal() {

    document
        .getElementById("addContentModal")
        .classList.remove("show");

}


/* ======================================================
   SHOW FILES
====================================================== */

function showSelectedFiles(files) {

    const upload = document.querySelector(".upload-wrapper");

    if (!upload) return;

    let old = upload.querySelector(".selected-files");

    if (old) old.remove();

    const box = document.createElement("div");

    box.className = "selected-files";

    box.style.marginTop = "25px";

    box.style.textAlign = "left";

    box.innerHTML = "<strong>Selected Files</strong><br><br>";

    [...files].forEach(file => {

        box.innerHTML += `

            <div style="margin-bottom:8px;">

                <i class="fa-regular fa-file"></i>

                ${file.name}

            </div>

        `;

    });

    upload.appendChild(box);

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
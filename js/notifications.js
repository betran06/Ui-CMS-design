/* ======================================================
   SIGNPLUS CMS
   NOTIFICATIONS PAGE
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initSearch();

    initFilter();

    initButtons();

    initNotificationClick();

    animateItems();

});


/* ======================================================
   SEARCH
====================================================== */

function initSearch() {

    const input = document.querySelector(".search-box input");

    if (!input) return;

    input.addEventListener("keyup", filterNotification);

}


/* ======================================================
   FILTER
====================================================== */

function initFilter() {

    const select = document.querySelector("select");

    if (!select) return;

    select.addEventListener("change", filterNotification);

}


function filterNotification() {

    const keyword = document
        .querySelector(".search-box input")
        .value
        .toLowerCase();

    const filter = document
        .querySelector("select")
        .value;

    const items = document.querySelectorAll(".notification-item");

    let total = 0;

    items.forEach(item => {

        const title = item.querySelector("h3")
            .innerText
            .toLowerCase();

        let category = "";

        if (item.classList.contains("device"))
            category = "Device";

        if (item.classList.contains("schedule"))
            category = "Schedule";

        if (item.classList.contains("storage"))
            category = "Storage";

        if (item.classList.contains("account"))
            category = "Account";

        const unread = item.classList.contains("unread");

        let visible = true;

        if (!title.includes(keyword))
            visible = false;

        if (filter === "Unread" && !unread)
            visible = false;

        if (
            filter !== "All" &&
            filter !== "Unread" &&
            filter !== category
        ) {
            visible = false;
        }

        item.style.display = visible
            ? "grid"
            : "none";

        if (visible) total++;

    });

    const empty = document.querySelector(".empty-notification");

    if (empty) {

        empty.style.display = total === 0
            ? "block"
            : "none";

    }

}


/* ======================================================
   MARK READ
====================================================== */

function initNotificationClick() {

    const items = document.querySelectorAll(".notification-item");

    items.forEach(item => {

        item.addEventListener("click", () => {

            if (item.classList.contains("unread")) {

                item.classList.remove("unread");

                const badge = item.querySelector(".badge");

                badge.innerText = "Read";

                badge.classList.remove("unread");

                badge.classList.add("read");

                showToast("Notification marked as read.");

            }

        });

    });

}


/* ======================================================
   BUTTON
====================================================== */

function initButtons() {

    const buttons = document.querySelectorAll(".notification-actions button");

    if (buttons.length < 2) return;

    /* MARK ALL */

    buttons[0].addEventListener("click", () => {

        document.querySelectorAll(".notification-item.unread")
            .forEach(item => {

                item.classList.remove("unread");

                const badge = item.querySelector(".badge");

                badge.innerText = "Read";

                badge.classList.remove("unread");

                badge.classList.add("read");

            });

        showToast("All notifications marked as read.");

    });


    /* CLEAR */

    buttons[1].addEventListener("click", () => {

        if (!confirm("Clear all notifications?")) return;

        document.querySelector(".notification-list").innerHTML = "";

        showToast("Notifications cleared.");

    });

}


/* ======================================================
   ANIMATION
====================================================== */

function animateItems() {

    const items = document.querySelectorAll(".notification-item");

    items.forEach((item, index) => {

        item.style.opacity = "0";

        item.style.transform = "translateY(20px)";

        setTimeout(() => {

            item.style.transition = ".4s";

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

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

    showToast("Notifications Loaded");

}, 800);
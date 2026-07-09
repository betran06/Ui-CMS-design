/* ==========================================
   SIGNPLUS CMS DASHBOARD
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initSidebarNavigation();

    initUserDropdown();
    initNotificationDropdown();
    initSidebarMenu();
    initCounterAnimation();
    initRippleEffect();
    welcomeAnimation();

});

/* ==========================================
   SIDEBAR NAVIGATION
========================================== */

function initSidebarNavigation() {

    const pages = {
        dashboard: "dashboard.html",
        screen: "screen.html",
        content: "content.html",
        playlist: "playlist.html",
        schedule: "schedule.html",
        storage: "storage.html",
        device: "device.html"
    };

    document.querySelectorAll(".sidebar .menu > li").forEach((menuItem) => {

        if (menuItem.classList.contains("has-submenu")) return;

        const pageName = menuItem.textContent.trim().toLowerCase();
        const targetPage = pages[pageName];

        if (!targetPage) return;

        menuItem.addEventListener("click", () => {

            window.location.href = targetPage;

        });

    });

}


/* ==========================================
   USER DROPDOWN
========================================== */

function initUserDropdown() {

    const userBtn = document.getElementById("userBtn");
    const userMenu = document.querySelector(".user-menu");

    if (!userBtn || !userMenu) return;

    userBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        userMenu.classList.toggle("show");

        document
            .querySelector(".notification-menu")
            ?.classList.remove("show");

    });

}


/* ==========================================
   NOTIFICATION
========================================== */

function initNotificationDropdown() {

    const btn = document.getElementById("notificationBtn");
    const menu = document.querySelector(".notification-menu");

    if (!btn || !menu) return;

    btn.addEventListener("click", (e) => {

        e.stopPropagation();

        menu.classList.toggle("show");

        document
            .querySelector(".user-menu")
            ?.classList.remove("show");

    });

}


/* ==========================================
   CLOSE DROPDOWN
========================================== */

document.addEventListener("click", () => {

    document
        .querySelector(".user-menu")
        ?.classList.remove("show");

    document
        .querySelector(".notification-menu")
        ?.classList.remove("show");

});


/* ==========================================
   SIDEBAR ACTIVE
========================================== */

function initSidebarMenu() {

    const menu = document.querySelectorAll(".menu > li");

    menu.forEach(item => {

        item.addEventListener("click", () => {

            if (item.classList.contains("has-submenu")) return;

            menu.forEach(li => li.classList.remove("active"));

            item.classList.add("active");

        });

    });

}

/* ==========================================
   SIDEBAR SUBMENU
========================================== */

document.addEventListener("click", (e) => {

    const submenuToggle = e.target.closest(".has-submenu > a");

    if (!submenuToggle) return;

    e.preventDefault();
    e.stopPropagation();

    const submenu = submenuToggle.parentElement.querySelector(".submenu");
    const arrow = submenuToggle.parentElement.querySelector(".submenu-arrow");

    submenu?.classList.toggle("show");
    arrow?.classList.toggle("rotate");

});


/* ==========================================
   COUNTER ANIMATION
========================================== */

function initCounterAnimation() {

    const numbers = document.querySelectorAll(".card h3");

    numbers.forEach(counter => {

        const value = counter.innerText;

        if (isNaN(parseInt(value))) return;

        const target = parseInt(value);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 40));

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.innerText = current;

        }, 25);

    });

}


/* ==========================================
   RIPPLE EFFECT
========================================== */

function initRippleEffect() {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const diameter = Math.max(
                this.clientWidth,
                this.clientHeight
            );

            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;

            circle.style.left =
                `${e.clientX - this.getBoundingClientRect().left - radius}px`;

            circle.style.top =
                `${e.clientY - this.getBoundingClientRect().top - radius}px`;

            circle.classList.add("ripple");

            const ripple = this.querySelector(".ripple");

            if (ripple) {

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

}


/* ==========================================
   WELCOME ANIMATION
========================================== */

function welcomeAnimation() {

    const cards = document.querySelectorAll(

        ".card,.panel,.company-card"

    );

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition = ".45s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 120);

    });

}


/* ==========================================
   TOAST
========================================== */

function showToast(message = "Success") {

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

    }, 3000);

}


/* ==========================================
   DEMO
========================================== */

setTimeout(() => {

    showToast("Welcome to SignPlus CMS");

}, 1000);

/* =====================================================
   SIGNPLUS CMS
   NEW SCHEDULE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initSchedule();

});


/* =====================================================
   INIT
===================================================== */

function initSchedule() {

    backButton();

    editScheduleName();

    saveSchedule();

    previewSchedule();

    calendarNavigation();

    calendarView();

    priorityButton();

    playlistSelect();

    publishSwitch();

    createDummyEvent();

}


/* =====================================================
   BACK BUTTON
===================================================== */

function backButton() {

    const button = document.getElementById("backSchedule");

    if (!button) return;

    button.onclick = () => {

        window.location.href = "../schedule.html";

    };

}


/* =====================================================
   EDIT NAME
===================================================== */

function editScheduleName() {

    const title = document.getElementById("scheduleName");

    const edit = document.querySelector(".edit-btn");

    if (!title || !edit) return;

    edit.addEventListener("click", () => {

        const value = prompt("Schedule Name", title.innerText);

        if (value) {

            title.innerText = value;

            toast("Schedule renamed");

        }

    });

}


/* =====================================================
   SAVE
===================================================== */

function saveSchedule() {

    const buttons = document.querySelectorAll(".primary-btn");

    buttons.forEach(button => {

        if (button.innerText.includes("Save")) {

            button.addEventListener("click", () => {

                toast("Schedule saved successfully");

            });

        }

    });

}


/* =====================================================
   PREVIEW
===================================================== */

function previewSchedule() {

    const preview = document.querySelector(".outline-btn");

    if (!preview) return;

    preview.addEventListener("click", () => {

        toast("Preview is coming soon");

    });

}


/* =====================================================
   CALENDAR NAVIGATION
===================================================== */

function calendarNavigation() {

    const nav = document.querySelectorAll(".calendar-nav");

    if (nav.length === 0) return;

    nav[0].onclick = () => {

        toast("Previous Week");

    }

    nav[1].onclick = () => {

        toast("Next Week");

    }

}


/* =====================================================
   VIEW BUTTON
===================================================== */

function calendarView() {

    const views = document.querySelectorAll(".view-btn");

    views.forEach(btn => {

        btn.addEventListener("click", () => {

            views.forEach(item => {

                item.classList.remove("active");

            });

            btn.classList.add("active");

        });

    });

}


/* =====================================================
   PRIORITY
===================================================== */

function priorityButton() {

    const priority = document.querySelectorAll(".priority-btn");

    priority.forEach(btn => {

        btn.addEventListener("click", () => {

            priority.forEach(item => {

                item.classList.remove("active");

            });

            btn.classList.add("active");

        });

    });

}


/* =====================================================
   PLAYLIST
===================================================== */

function playlistSelect() {

    const playlist = document.querySelectorAll(".playlist-item");

    playlist.forEach(item => {

        item.addEventListener("click", () => {

            playlist.forEach(list => {

                list.classList.remove("active");

            });

            item.classList.add("active");

        });

    });

}


/* =====================================================
   PUBLISH
===================================================== */

function publishSwitch() {

    const publish = document.querySelector(".switch input");

    if (!publish) return;

    publish.addEventListener("change", () => {

        if (publish.checked) {

            toast("Schedule Published");

        } else {

            toast("Schedule Unpublished");

        }

    });

}


/* =====================================================
   DUMMY EVENT
===================================================== */

function createDummyEvent() {

    const column = document.querySelector(".week-column.active");

    if (!column) return;

    if (column.querySelector(".schedule-event")) return;

    column.innerHTML += `

        <div class="schedule-event high">

            <div class="event-time">

                08:00 - 12:00

            </div>

            <h4>

                Morning Promotion

            </h4>

            <p>

                Lobby Display

            </p>

            <div class="event-footer">

                <span>

                    Published

                </span>

                <i class="fa-solid fa-circle-check"></i>

            </div>

        </div>

    `;

}


/* =====================================================
   TOAST
===================================================== */

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
/* ================= AUTHENTICATION CHECK ================= */

let currentUser = null;
let schoolId = null;

function isLogged() {

    /* ================= LOAD ALL SCHOOL DATA ================= */
    let loggedSchool = localStorage.getItem("loggedSchool");

    if (loggedSchool === null) {

        window.open("../pages/register.html", "_self");

    } else {

        currentUser = loggedSchool;

    }

}

isLogged();

/* ================= ACCOUNT LOGOUT ================= */

function logoutSchool() {

    /* ================= LOAD ALL SCHOOL DATA ================= */
    let loggedSchool = localStorage.getItem("loggedSchool");

    if (loggedSchool !== null) {

        let message = confirm("Are You Want To Sure To Logout");

        if (message) {

            localStorage.removeItem("loggedSchool");
            window.open("../pages/login.html");

        }

    }

}

/* ================= REUSEABLE MESSAGE ================= */

function showMessage(msg, type = "success") {

    let box = document.getElementById("msgBox");
    box.innerHTML = `<div class="alert alert-${type}">${msg}</div>`;
    window.scrollTo(0, 0);

    setTimeout(() => {

        box.innerHTML = "";

    }, 2500);
}

/* ================= LOAD MARKSHEET ================= */

function loadMarksheets() {

    let marksheets = JSON.parse(localStorage.getItem("marksheets")) || [];
    let tbody = document.getElementById("marksheetTableBody");

    tbody.innerHTML = "";

    if (marksheets.length !== 0) {

        for (let i = 0; i < marksheets.length; i++) {

            if (marksheets[i].schoolEmail === currentUser) {

                tbody.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${marksheets[i].studentName}</td>
                    <td>${marksheets[i].studentClass}</td>
                    <td>${marksheets[i].studentRollNo}</td>
                    <td>${marksheets[i].subjects.length}</td>
                    <td>${marksheets[i].createdDate}</td>
                    <td>
                    <div class="action-btns">
                        <button class="small-btn small-btn-view" onclick="viewMarksheet('${marksheets[i].id}')">
                        <i class="ri-eye-line"></i> View
                        </button>

                        <button class="small-btn small-btn-delete" onclick="deleteMarksheet('${i}')">
                        <i class="ri-delete-bin-line"></i> Delete
                        </button>
                    </div>
                    </td>
                </tr>
            `;

            }

        }
    }

}

loadMarksheets();

/* ================= VIEW MARKSHEET ================= */

function viewMarksheet(id) {

    window.location.href = "../pages/view-marksheet.html?id=" + btoa(id);

}

/* ================= DELETE MARKSHEET ================= */

function deleteMarksheet(index) {

    let marksheets = JSON.parse(localStorage.getItem("marksheets")) || [];

    let message = confirm("Are You Want To Sure To Delete This Marksheet?");

    if (message) {

        marksheets.splice(index);
        localStorage.setItem("marksheets", JSON.stringify(marksheets));
        loadMarksheets();

    }

}
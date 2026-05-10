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

/* ================= LOAD PROFILE DETAILS ================= */

function loadSchoolProfile() {

    let schoolLogo = document.getElementById("schoolLogo");
    let schoolTitle = document.getElementById("schoolTitle");
    let schoolTagline = document.getElementById("schoolTagline");
    let schoolMedium = document.getElementById("schoolMedium");

    /* ================= LOAD ALL SCHOOL DATA ================= */
    let school = JSON.parse(localStorage.getItem("school")) || [];

    if (school.length !== 0) {

        for (let i = 0; i < school.length; i++) {

            if (school[i].schoolEmail === currentUser) {

                schoolId = school[i].schoolId;
                schoolLogo.src = school[i].schoolLogo;
                schoolTitle.textContent = school[i].schoolName;
                schoolTagline.textContent = school[i].schoolTagline;
                schoolMedium.textContent = school[i].schoolMedium;
            }

        }

    }

}

loadSchoolProfile();

/* ================= LOAD STATS DETAILS ================= */

function countStudent() {

    let totalStudents = document.getElementById("totalStudents");
    let students = JSON.parse(localStorage.getItem("students")) || [];

    if (students.length !== 0) {

        totalStudents.textContent = students.length;

    }

}

countStudent();

function countMarksheet() {

    let marksheets = JSON.parse(localStorage.getItem("marksheets")) || [];
    let totalMarksheets = document.getElementById("totalMarksheets");

    if (marksheets.length !== 0) {

        totalMarksheets.textContent = marksheets.length;

    }

}

countMarksheet();


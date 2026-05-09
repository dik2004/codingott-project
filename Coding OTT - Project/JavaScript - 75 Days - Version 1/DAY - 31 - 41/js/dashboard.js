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

            if(school[i].schoolEmail === currentUser) {

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

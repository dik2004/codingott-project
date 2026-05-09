/* ================= AUTHENTICATION CHECK ================= */

function isLogged() {

    /* ================= LOAD ALL SCHOOL DATA ================= */
    let loggedSchool = localStorage.getItem("loggedSchool");

    if (loggedSchool === null) {


    } else {

        window.open("../pages/dashboard.html", "_self");

    }

}

isLogged();

/* ================= REUSEABLE MESSAGE ================= */

function showMessage(msg, type = "success") {

    let box = document.getElementById("msgBox");
    box.innerHTML = `<div class="alert alert-${type}">${msg}</div>`;
    window.scrollTo(0, 0);

    setTimeout(() => {

        box.innerHTML = "";

    }, 2500);
}

/* ================= FORM VALIDATION ================= */

function loginSchool(event) {

    event.preventDefault();

    let loginEmail = document.getElementById("loginEmail").value.trim();
    let loginPassword = document.getElementById("loginPassword").value.trim();

    if (loginEmail === "") {

        showMessage("Enter Email ID", "danger");
        return;
    }

    if (!loginEmail.match("@")) {

        showMessage("Invalid Email ID", "danger");
        return;
    }

    if (!loginEmail.match("gmail.com")) {

        showMessage("Only 'gmail.com' Allowed", "danger");
        return;
    }

    if (loginPassword === "") {

        showMessage("Enter Your Password", "danger");
        return;
    }

    loginUser();
}

function loginUser() {

    let loginEmail = document.getElementById("loginEmail").value.trim();
    let loginPassword = document.getElementById("loginPassword").value.trim();

    /* ================= LOAD ALL SCHOOL DATA ================= */
    let school = JSON.parse(localStorage.getItem("school")) || [];

    if (school.length === 0) {

        showMessage("No School Found, Please Register First", "danger");

    } else {

        let emailFound = false;
        let passFound = false;

        for (let i = 0; i < school.length; i++) {

            if (school[i].schoolEmail === loginEmail) {

                emailFound = true;

                if (school[i].schoolPassword === loginPassword) {

                    passFound = true;
                }

                break;
            }
        }

        if (emailFound) {

            if (passFound) {

                localStorage.setItem("loggedSchool", loginEmail);
                showMessage("Login Successful", "success");
                isLogged();

            } else {

                showMessage("Oops, Wrong Password", "danger");

            }

        } else {

            showMessage("Oops, Wrong Email ID", "danger");

        }
    }

}
/* ================= AUTHENTICATION CHECK ================= */

function isLogged() {

    /* ================= LOAD ALL SCHOOL DATA ================= */
    let loggedSchool = localStorage.getItem("loggedSchool");

    if (loggedSchool === null) {


    } else {

        window.open("../pages/login.html", "_self");

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

let schoolLogoURL = null;
let schoolMediumID = null;

function registerSchool(event) {

    event.preventDefault();

    let schoolName = document.getElementById("schoolName").value.trim();
    let schoolEmail = document.getElementById("schoolEmail").value.trim();
    let schoolNumber = document.getElementById("schoolNumber").value;
    let schoolPassword = document.getElementById("schoolPassword").value.trim();
    let schoolAddress = document.getElementById("schoolAddress").value.trim();
    let schoolLogo = document.getElementById("schoolLogo").value.trim();
    let schoolTagline = document.getElementById("schoolTagline").value.trim();
    let schoolRegNo = document.getElementById("schoolRegNo").value.trim();
    let schoolRegDate = document.getElementById("schoolRegDate").value.trim();
    let schoolMedium = document.getElementById("schoolMedium");
    let schoolDescription = document.getElementById("schoolDescription").value.trim();

    if (schoolName === "") {

        showMessage("Enter School Name", "danger");
        return;
    }

    if (schoolEmail === "") {

        showMessage("Enter School Email ID", "danger");
        return;
    }

    if (!schoolEmail.match("@")) {

        showMessage("Invalid Email ID", "danger");
        return;
    }

    if (!schoolEmail.match("gmail.com")) {

        showMessage("Only 'gmail.com' Allowed", "danger");
        return;
    }

    if (schoolNumber === "") {

        showMessage("Enter School Number", "danger");
        return;
    }

    if (schoolNumber.length !== 10) {

        showMessage("Invalid Mobile Number", "danger");
        return;
    }

    if (!schoolNumber[0].match(/[7-9]/)) {

        showMessage("Only Indian Number Allowed", "danger");
        return;
    }

    if (schoolPassword === "") {

        showMessage("Enter Your Password", "danger");
        return;
    }

    if (schoolAddress === "") {

        showMessage("Enter School Address", "danger");
        return;
    }

    if (schoolLogoURL === "") {

        showMessage("Upload School Logo", "danger");
        return;
    }

    if (schoolLogoURL === null) {

        showMessage("Upload School Logo", "danger");
        return;
    }

    if (schoolTagline === "") {

        showMessage("Enter School Tagline", "danger");
        return;
    }

    if (schoolRegNo === "") {

        showMessage("Enter School Registration Number", "danger");
        return;
    }

    if (schoolRegDate === "") {

        showMessage("Enter School Registration Date", "danger");
        return;
    }

    if (schoolMedium === "") {

        showMessage("Select School Medium", "danger");
        return;
    }

    if (schoolDescription === "") {

        showMessage("Enter School Description", "danger");
        return;
    }

    saveSchoolData();

}

let schoolLogo = document.getElementById("schoolLogo")
schoolLogo.addEventListener("change", schoolFileUpload);

function schoolFileUpload() {

    let file = schoolLogo.files[0];

    if (!file) {

        showMessage("Invalid School Logo", "danger");
        schoolLogo.value = "";
        return;

    }

    if (file.size > 1024 * 1024) {

        showMessage("Max 1 MB Allowed", "danger");
        schoolLogo.value = "";
        return;

    }

    let fileReader = new FileReader();

    fileReader.onload = function () {

        schoolLogoURL = fileReader.result;

    };

    fileReader.readAsDataURL(file);

}

/* ================= SCHOOL MEDIUM SELECTOR ================= */

function mediumSelector(value) {

    schoolMediumID = value;

}

/* ================= SAVE SCHOOL DATA ================= */

function saveSchoolData() {

    let schoolName = document.getElementById("schoolName").value.trim();
    let schoolEmail = document.getElementById("schoolEmail").value.trim();
    let schoolNumber = document.getElementById("schoolNumber").value;
    let schoolPassword = document.getElementById("schoolPassword").value.trim();
    let schoolAddress = document.getElementById("schoolAddress").value.trim();
    let schoolLogo = document.getElementById("schoolLogo").value.trim();
    let schoolTagline = document.getElementById("schoolTagline").value.trim();
    let schoolRegNo = document.getElementById("schoolRegNo").value.trim();
    let schoolRegDate = document.getElementById("schoolRegDate").value.trim();
    let schoolMedium = document.getElementById("schoolMedium");
    let schoolDescription = document.getElementById("schoolDescription").value.trim();

    let currentDate = new Date();

    let newSchool = {
        schoolId: Date.now(),
        schoolName: schoolName,
        schoolEmail: schoolEmail,
        schoolNumber: schoolNumber,
        schoolPassword: schoolPassword,
        schoolAddress: schoolAddress,
        schoolLogo: schoolLogoURL,
        schoolTagline: schoolTagline,
        schoolRegNo: schoolRegNo,
        schoolRegDate: schoolRegDate,
        schoolMedium: schoolMediumID,
        schoolDescription: schoolDescription,
        createdDate: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
        updatedDate: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString()
    }

    /* ================= LOAD ALL SCHOOL DATA ================= */
    let school = JSON.parse(localStorage.getItem("school")) || [];

    if (school.length === 0) {

        school.push(newSchool);
        localStorage.setItem("school", JSON.stringify(school));
        showMessage("Registration Successful", "success");
        window.open("../pages/login.html", "_self");

    } else {

        let emailFound = false;
        let numberFound = false;
        let registerNoFound = false;

        for (let i = 0; i < school.length; i++) {

            if (school[i].schoolEmail === schoolEmail) {

                emailFound = true;
                break;

            }

            if (school[i].schoolNumber === schoolNumber) {

                numberFound = true;
                break;

            }

            if (school[i].schoolRegNo === schoolRegNo) {

                registerNoFound = true;
                break;

            }
        }

        if (emailFound) {

            showMessage("Email ID Already Exist", "danger");

        } else {

            if (numberFound) {

                showMessage("Email ID Already Exist", "danger");

            } else {

                if (registerNoFound) {

                    showMessage("Email ID Already Exist", "danger");

                } else {

                    school.push(newSchool);
                    localStorage.setItem("school", JSON.stringify(school));
                    showMessage("Registration Successful", "success");
                    window.open("../pages/login.html", "_self");

                }
            }

        }

    }

}

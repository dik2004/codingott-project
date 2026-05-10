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

/* ================= VIEW MARKSHEET ================= */

function viewMarksheet() {

    let params = new URLSearchParams(window.location.search);
    let url = params.get("id");

    let mainContent = document.getElementById("mainContent");
    let updateStudentBtn = document.getElementById("updateStudentBtn");
    let studentFormTitle = document.getElementById("studentFormTitle");

    if (!url) {

        mainContent.style.display = "none";
        return;

    }

    try {

        let id = atob(url);

        if (!id || id === "null") {

            mainContent.style.display = "none";

        } else {

            mainContent.style.display = "block";
            loadStudentData(id);
            loadSchoolData();

        }

    } catch (error) {

        mainContent.style.display = "none";

    }

}

viewMarksheet();

/* ================= LOAD SCHOOL DATA ================= */

function loadSchoolData() {

    let msLogo = document.getElementById("msLogo");
    let msSchoolName = document.getElementById("msSchoolName");
    let msTagline = document.getElementById("msTagline");
    let msAddress = document.getElementById("msAddress");
    let msNumber = document.getElementById("msNumber");
    let msCreator = document.getElementById("msCreator");

    /* ================= LOAD ALL SCHOOL DATA ================= */
    let school = JSON.parse(localStorage.getItem("school")) || [];

    if (school.length !== 0) {

        for (let i = 0; i < school.length; i++) {

            if (school[i].schoolEmail === currentUser) {

                msLogo.src = school[i].schoolLogo;
                msSchoolName.textContent = school[i].schoolName;
                msTagline.textContent = school[i].schoolTagline;
                msAddress.textContent = school[i].schoolAddress;
                msNumber.textContent = school[i].schoolNumber;
                msCreator.textContent = school[i].schoolName;
            }
        }
    }


}

/* ================= LOAD STUDENT DATA ================= */

function loadStudentData(marksheetId) {

    let msStudentPhoto = document.getElementById("msStudentPhoto");
    let msStudentName = document.getElementById("msStudentName");
    let msStudentClass = document.getElementById("msStudentClass");
    let msStudentRoll = document.getElementById("msStudentRoll");
    let msFather = document.getElementById("msFather");
    let msMother = document.getElementById("msMother");
    let msEmail = document.getElementById("msEmail");

    let msTotal = document.getElementById("msTotal");
    let msObtained = document.getElementById("msObtained");
    let msPercentage = document.getElementById("msPercentage");
    let msResult = document.getElementById("msResult");
    let msCreated = document.getElementById("msCreated");

    /* ================= LOAD ALL MARKSHEET DATA ================= */
    let marksheets = JSON.parse(localStorage.getItem("marksheets")) || [];

    let tbody = document.getElementById("msSubjectBody");
    tbody.innerHTML = "";

    let totalSum = 0;
    let obtainedSum = 0;

    if (marksheets.length !== 0) {

        for (let i = 0; i < marksheets.length; i++) {

            if (marksheets[i].id === Number(marksheetId)) {

                if (marksheets[i].schoolEmail === currentUser) {

                    msStudentPhoto.src = marksheets[i].studentPhoto;
                    msStudentName.textContent = marksheets[i].studentName;
                    msStudentClass.textContent = marksheets[i].studentClass;
                    msStudentRoll.textContent = marksheets[i].studentRollNo;
                    msFather.textContent = marksheets[i].studentFather;
                    msMother.textContent = marksheets[i].studentMother;
                    msEmail.textContent = marksheets[i].studentEmail
                    msCreated.textContent = marksheets[i].createdDate

                    for (let j = 0; j < marksheets[i].subjects.length; j++) {

                        totalSum += marksheets[i].subjects[j].total;
                        obtainedSum += marksheets[i].subjects[j].obtained;

                        tbody.innerHTML += `
                                <tr>
                                    <td>${j + 1}</td>
                                    <td>${marksheets[i].subjects[j].name}</td>
                                    <td>${marksheets[i].subjects[j].total}</td>
                                    <td>${marksheets[i].subjects[j].obtained}</td>
                                </tr>
                            `;


                    }

                }

            }
        }

        msTotal.textContent = totalSum;
        msObtained.textContent = obtainedSum;

        let percentage = ((obtainedSum / totalSum) * 100).toFixed(2);
        msPercentage.textContent = percentage + "%";

        let result = percentage >= 33 ? "PASS" : "FAIL";
        msResult.textContent = result;
    }


}

/* ================= SAVE PDF ================= */

async function downloadPDF() {

    let message = confirm("Are You Want To Sure To Save This Marksheet As PDF?");

    if (message) {

        const { jsPDF } = window.jspdf;

        let editBtn = document.getElementById("editBtn");
        let viewMarkSidebar = document.getElementById("viewMarkSidebar");
        let msStudentName = document.getElementById("msStudentName").innerText;
        let msStudentRoll = document.getElementById("msStudentRoll").innerText;

        editBtn.style.display = "none";
        viewMarkSidebar.style.display = "none";
        const element = document.getElementById("mainDashboard");


        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        pdf.save(msStudentName + "-" + msStudentRoll + "-Marksheet.pdf");

        setTimeout(function () {

            editBtn.style.display = "flex";
            viewMarkSidebar.style.display = "block";

        }, 500);

    }
}
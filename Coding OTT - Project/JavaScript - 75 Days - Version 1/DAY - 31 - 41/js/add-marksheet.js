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

/* ================= LOAD STUDENTS ================= */

function loadStudentDropdown() {

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let select = document.getElementById("studentSelect");

    if (students.length === 0) {

        select.innerHTML = `<option value="">Select Student</option>`;

    } else {

        select.innerHTML = `<option value="">Select Student</option>`;

        for (let i = 0; i < students.length; i++) {

            if (students[i].creator === currentUser) {

                select.innerHTML += `<option value=${students[i].studentId}>${students[i].candidateName} (Roll: ${students[i].rollNumber})</option>`;

            }

        }
    }

}

loadStudentDropdown();

/* ================= FILL STUDENTS DETAILS ================= */
let studentIdNo = null;

function fillStudentDetails(value) {

    let previewName = document.getElementById("previewName");
    let previewClass = document.getElementById("previewClass");
    let previewRoll = document.getElementById("previewRoll");
    let previewFather = document.getElementById("previewFather");
    let previewMother = document.getElementById("previewMother");
    let previewEmail = document.getElementById("previewEmail");
    let previewPhoto = document.getElementById("previewPhoto");

    let students = JSON.parse(localStorage.getItem("students")) || [];

    if (students.length !== 0) {

        for (let i = 0; i < students.length; i++) {

            if (students[i].studentId === Number(value)) {

                previewName.textContent = students[i].candidateName;
                previewClass.textContent = students[i].studentClass;
                previewRoll.textContent = students[i].rollNumber;
                previewFather.textContent = students[i].fatherName;
                previewMother.textContent = students[i].motherName;
                previewEmail.textContent = students[i].studentEmail;
                previewPhoto.src = students[i].studentPhoto;
                studentIdNo = students[i].studentId;
            }

        }
    }

}

/* ================= ADD SUBJECTS ================= */

let subjectList = [];

function addSubject(event) {

    event.preventDefault();

    let name = document.getElementById("subjectName").value.trim();
    let total = parseInt(document.getElementById("totalMarks").value);
    let obtained = parseInt(document.getElementById("obtainedMarks").value);
    let studentSelect = document.getElementById("studentSelect").value.trim();

    if (studentSelect === "") {

        showMessage("Select Student First", "danger");
        return;

    }

    if (!name || isNaN(total) || isNaN(obtained)) {

        showMessage("All subject fields required!", "danger");
        return;

    }

    if (obtained > total) {

        showMessage("Obtained marks cannot exceed total marks!", "danger");
        return;

    }

    subjectList.push({ name, total, obtained });
    renderSubject();

    document.getElementById("subjectName").value = "";
    document.getElementById("totalMarks").value = "";
    document.getElementById("obtainedMarks").value = "";

}

/* ================= RENDER ALL ADDED SUBJECTS ================= */

function renderSubject() {

    let tbody = document.getElementById("subjectTableBody");
    tbody.innerHTML = "";

    if (subjectList.length !== 0) {

        for (let i = 0; i < subjectList.length; i++) {

            tbody.innerHTML += `

                <tr>
                    <td>${i + 1}</td>
                    <td>${subjectList[i].name}</td>
                    <td>${subjectList[i].total}</td>
                    <td>${subjectList[i].obtained}</td>
                    <td>

                    <button class="small-btn small-btn-delete" onclick="deleteSubject(${i})">

                        <i class="ri-delete-bin-line"></i> Delete

                    </button>

                    </td>
                </tr>
             `;

        }
    }
}

/* ================= DELETE SUBJECTS ================= */

function deleteSubject(index) {

    let message = confirm("Are You Want To Sure To Delete This Subject?");

    if (message) {

        subjectList.splice(index, 1);
        renderSubject();

    }

}

/* ================= SAVE MARKSHEET ================= */

function saveMarksheet() {

    let studentSelect = document.getElementById("studentSelect").value.trim();
    let previewName = document.getElementById("previewName").innerText;
    let previewClass = document.getElementById("previewClass").innerText;
    let previewRoll = document.getElementById("previewRoll").innerText;
    let previewFather = document.getElementById("previewFather").innerText;
    let previewMother = document.getElementById("previewMother").innerText;
    let previewEmail = document.getElementById("previewEmail").innerText;
    let previewPhoto = document.getElementById("previewPhoto").src;


    if (studentSelect === "") {

        showMessage("Select Student First", "danger");
        return;

    }

    if (subjectList.length === 0) {

        showMessage("Add at Least 1 Subject", "danger");
        return;

    }

    let currentDate = new Date();

    let newMarksheet = {
        id: Date.now(),
        schoolEmail: currentUser,
        studentId: studentIdNo,
        studentName: previewName,
        studentClass: previewClass,
        studentRollNo: previewRoll,
        studentFather: previewFather,
        studentMother: previewMother,
        studentEmail: previewEmail,
        studentPhoto: previewPhoto,
        subjects: subjectList,
        createdDate: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
        updatedDate: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
    }

    let marksheets = JSON.parse(localStorage.getItem("marksheets")) || [];

    marksheets.push(newMarksheet);
    localStorage.setItem("marksheets", JSON.stringify(marksheets));
    window.open("../pages/manage-marksheet.html", "_self");

}

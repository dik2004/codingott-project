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

/* ================= LOAD STUDENT DATA ================= */

function loadStudents() {

    let tbody = document.getElementById("studentsTableBody");
    tbody.innerHTML = "";

    let students = JSON.parse(localStorage.getItem("students")) || [];

    if (students.length !== 0) {

        for (let i = 0; i < students.length; i++) {

            if (students[i].creator === currentUser) {

                tbody.innerHTML += `

                    <tr>
                        <td>${i + 1}</td>
                        <td><img src="${students[i].studentPhoto}" style="width:45px;height:45px;border-radius:10px;object-fit:cover;border:1px solid #ddd;"></td>
                        <td>${students[i].candidateName}</td>
                        <td>${students[i].studentClass}</td>
                        <td>${students[i].rollNumber}</td>
                        <td>${students[i].stream}</td>
                        <td>${students[i].studentNumber}</td>
                        <td>
                        <div class="action-btns">
                            <button class="small-btn small-btn-edit" onclick="editStudent('${students[i].studentId}')">
                            <i class="ri-edit-line"></i> Edit
                            </button>
                            <button class="small-btn small-btn-delete" onclick="deleteStudent('${students[i].studentId}')">
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

loadStudents();

/* ================= DELETE STUDENT DATA ================= */

function deleteStudent(index) {

    let message = confirm("Are You Want To Sure To Delete This Student Details?");

    if (message) {

        let students = JSON.parse(localStorage.getItem("students")) || [];

        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
        loadStudents();

    }

}

/* ================= EDIT/UPDATE STUDENT DATA ================= */

function editStudent(studentId) {

    window.location.href = "../pages/add-student.html?id=" + btoa(studentId);

}
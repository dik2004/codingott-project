/* ================= AUTHENTICATION CHECK ================= */

let currentUser = null;
let schoolId = null;
let studentPhotoURL = null;

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

/* ================= FORM VALIDATION ================= */

function formVal(event) {

    event.preventDefault();

    let candidateName = document.getElementById("candidateName").value.trim();
    let studentEmail = document.getElementById("studentEmail").value.trim();
    let studentNumber = document.getElementById("studentNumber").value;
    let fatherName = document.getElementById("fatherName").value.trim();
    let fatherEmail = document.getElementById("fatherEmail").value.trim();
    let fatherNumber = document.getElementById("fatherNumber").value;
    let motherName = document.getElementById("motherName").value.trim();
    let motherEmail = document.getElementById("motherEmail").value.trim();
    let motherNumber = document.getElementById("motherNumber").value;
    let dob = document.getElementById("dob").value;
    let studentClass = document.getElementById("studentClass").value.trim();
    let admissionDate = document.getElementById("admissionDate").value;
    let rollNumber = document.getElementById("rollNumber").value.trim();
    let stream = document.getElementById("stream").value.trim();
    let studentAddress = document.getElementById("studentAddress").value.trim();

    if (candidateName === "") {

        showMessage("Enter Student Name", "danger");
        return;
    }

    if (studentPhotoURL === "" || studentPhotoURL === null) {

        showMessage("Upload Student Photo", "danger");
        return;
    }

    if (studentEmail === "") {

        showMessage("Enter Student Email ID", "danger");
        return;
    }

    if (!studentEmail.match("@")) {

        showMessage("Invalid Email ID", "danger");
        return;
    }

    if (!studentEmail.match("gmail.com")) {

        showMessage("Only 'gmail.com' Allowed", "danger");
        return;
    }

    if (studentNumber === "") {

        showMessage("Enter Student Mobile Number", "danger");
        return;
    }

    if (!studentNumber[0].match(/[7-9]/g)) {

        showMessage("Only Indian Number Allowed", "danger");
        return;
    }

    if (studentNumber.length !== 10) {

        showMessage("Invalid Mobile Number", "danger");
        return;
    }

    if (fatherName === "") {

        showMessage("Enter Father Name", "danger");
        return;
    }

    if (fatherEmail === "") {

        showMessage("Enter Father Email ID", "danger");
        return;
    }

    if (!fatherEmail.match("@")) {

        showMessage("Invalid Email ID", "danger");
        return;
    }

    if (!fatherEmail.match("gmail.com")) {

        showMessage("Only 'gmail.com' Allowed", "danger");
        return;
    }

    if (fatherNumber === "") {

        showMessage("Enter Father Mobile Number", "danger");
        return;
    }

    if (!fatherNumber[0].match(/[7-9]/g)) {

        showMessage("Only Indian Number Allowed", "danger");
        return;
    }

    if (fatherNumber.length !== 10) {

        showMessage("Invalid Mobile Number", "danger");
        return;
    }

    if (motherName === "") {

        showMessage("Enter Mother Name", "danger");
        return;
    }

    if (motherEmail === "") {

        showMessage("Enter Mother Email ID", "danger");
        return;
    }

    if (!motherEmail.match("@")) {

        showMessage("Invalid Email ID", "danger");
        return;
    }

    if (!motherEmail.match("gmail.com")) {

        showMessage("Only 'gmail.com' Allowed", "danger");
        return;
    }

    if (motherNumber === "") {

        showMessage("Enter Mother Mobile Number", "danger");
        return;
    }

    if (!motherNumber[0].match(/[7-9]/g)) {

        showMessage("Only Indian Number Allowed", "danger");
        return;
    }

    if (motherNumber.length !== 10) {

        showMessage("Invalid Mobile Number", "danger");
        return;
    }

    if (dob === "") {

        showMessage("Select Date Of Birth", "danger");
        return;
    }

    if (studentClass === "") {

        showMessage("Enter Student Class", "danger");
        return;
    }

    if (admissionDate === "") {

        showMessage("Select Student Admission Date", "danger");
        return;
    }

    if (rollNumber === "") {

        showMessage("Enter Student Roll Number", "danger");
        return;
    }

    if (stream === "") {

        showMessage("Enter Student Stream", "danger");
        return;
    }

    if (studentAddress === "") {

        showMessage("Enter Student Address", "danger");
        return;
    }

    saveStudent();

}

/* ================= STUDENT PHOTO UPLOAD ================= */

let studentPhoto = document.getElementById("studentPhoto");
studentPhoto.addEventListener("change", studentFileUpload);

function studentFileUpload() {

    let file = studentPhoto.files[0];

    if (!file) {

        showMessage("Invalid School Logo", "danger");
        studentPhoto.value = "";
        return;

    }

    if (file.size > 1024 * 1024) {

        showMessage("Max 1 MB Allowed", "danger");
        studentPhoto.value = "";
        return;

    }

    let fileReader = new FileReader();

    fileReader.onload = function () {

        studentPhotoURL = fileReader.result;

    };

    fileReader.readAsDataURL(file);

}

/* ================= SAVE STUDENT DATA ================= */

function saveStudent() {

    let candidateName = document.getElementById("candidateName").value.trim();
    let studentEmail = document.getElementById("studentEmail").value.trim();
    let studentNumber = document.getElementById("studentNumber").value;
    let fatherName = document.getElementById("fatherName").value.trim();
    let fatherEmail = document.getElementById("fatherEmail").value.trim();
    let fatherNumber = document.getElementById("fatherNumber").value;
    let motherName = document.getElementById("motherName").value.trim();
    let motherEmail = document.getElementById("motherEmail").value.trim();
    let motherNumber = document.getElementById("motherNumber").value;
    let dob = document.getElementById("dob").value;
    let studentClass = document.getElementById("studentClass").value.trim();
    let admissionDate = document.getElementById("admissionDate").value;
    let rollNumber = document.getElementById("rollNumber").value.trim();
    let stream = document.getElementById("stream").value.trim();
    let studentAddress = document.getElementById("studentAddress").value.trim();

    let currentDate = new Date();

    let newStudent = {
        candidateName: candidateName,
        studentEmail: studentEmail,
        studentNumber: studentNumber,
        dob: dob,
        studentClass: studentClass,
        admissionDate: admissionDate,
        rollNumber: rollNumber,
        stream: stream,
        studentAddress: studentAddress,
        studentPhoto: studentPhotoURL,
        fatherName: fatherName,
        fatherEmail: fatherEmail,
        fatherNumber: fatherNumber,
        motherName: motherName,
        motherEmail: motherEmail,
        motherNumber: motherNumber,
        createdDate: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
        updatedDate: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString(),
        creator: currentUser,
        studentId: Date.now(),

    }

    let students = JSON.parse(localStorage.getItem("students")) || [];

    if (students.length === 0) {

        students.push(newStudent);
        localStorage.setItem("students", JSON.stringify(students));
        window.open("../pages/manage-students.html", "_self");

    } else {

        let studentEmailExist = false;
        let studentNumberExist = false;
        let fatherEmailExist = false;
        let fatherNumberExist = false;
        let motherEmailExist = false;
        let motherNumberExist = false;

        for (let i = 0; i < students.length; i++) {

            if (students[i].creator === currentUser) {

                if (students[i].studentEmail === studentEmail) {

                    studentEmailExist = true;
                }

                if (students[i].studentNumber === studentNumber) {

                    studentNumberExist = true;
                }

                if (students[i].fatherEmail === fatherEmail) {

                    fatherEmailExist = true;
                }

                if (students[i].fatherNumber === fatherNumber) {

                    fatherNumberExist = true;
                }

                if (students[i].motherEmail === motherEmail) {

                    motherEmailExist = true;
                }

                if (students[i].motherNumber === motherNumber) {

                    motherNumberExist = true;
                }

            }

        }

        if (studentEmailExist) {

            showMessage("Student Email Already Exist", "danger");

        } else {

            if (studentNumberExist) {

                showMessage("Student Number Already Exist", "danger");

            } else {

                if (fatherEmailExist) {

                    showMessage("Father Email Already Exist", "danger");

                } else {

                    if (fatherNumberExist) {

                        showMessage("Father Number Already Exist", "danger");

                    } else {

                        if (motherEmailExist) {

                            showMessage("Mother Email Already Exist", "danger");

                        } else {

                            if (motherNumberExist) {

                                showMessage("Mother Number Already Exist", "danger");

                            } else {

                                students.push(newStudent);
                                localStorage.setItem("students", JSON.stringify(students));
                                window.open("../pages/manage-students.html", "_self");

                            }

                        }

                    }

                }

            }
        }
    }
}

/* ================= FIND EDITABLE OPTION ================= */
let editId = null;

function checkEditable() {

    let params = new URLSearchParams(window.location.search);
    let url = params.get("id");

    let studentBtn = document.getElementById("studentBtn");
    let updateStudentBtn = document.getElementById("updateStudentBtn");
    let studentFormTitle = document.getElementById("studentFormTitle");

    let candidateName = document.getElementById("candidateName");
    let studentEmail = document.getElementById("studentEmail");
    let studentNumber = document.getElementById("studentNumber");
    let fatherName = document.getElementById("fatherName");
    let fatherEmail = document.getElementById("fatherEmail");
    let fatherNumber = document.getElementById("fatherNumber");
    let motherName = document.getElementById("motherName");
    let motherEmail = document.getElementById("motherEmail");
    let motherNumber = document.getElementById("motherNumber");
    let dob = document.getElementById("dob");
    let studentClass = document.getElementById("studentClass");
    let admissionDate = document.getElementById("admissionDate");
    let rollNumber = document.getElementById("rollNumber");
    let stream = document.getElementById("stream");
    let studentAddress = document.getElementById("studentAddress");

    if (!url) {

        studentBtn.style.display = "flex";
        updateStudentBtn.style.display = "none";
        return;

    }

    try {

        let id = atob(url);

        if (!id || id === "null") {

            studentBtn.style.display = "flex";
            updateStudentBtn.style.display = "none";
            studentFormTitle.textContent = "Add New Student";

        } else {

            studentBtn.style.display = "none";
            updateStudentBtn.style.display = "flex";
            studentFormTitle.textContent = "Update Student Data";

            let students = JSON.parse(localStorage.getItem("students")) || [];

            if (students.length !== 0) {

                for (let i = 0; i < students.length; i++) {

                    if (students[i].studentId === Number(id)) {

                        candidateName.value = students[i].candidateName;
                        studentEmail.value = students[i].studentEmail;
                        studentNumber.value = students[i].studentNumber;
                        fatherName.value = students[i].fatherName;
                        fatherEmail.value = students[i].fatherEmail;
                        fatherNumber.value = students[i].fatherNumber;
                        motherName.value = students[i].motherName;
                        motherEmail.value = students[i].motherEmail;
                        motherNumber.value = students[i].motherNumber;
                        dob.value = students[i].dob;
                        studentClass.value = students[i].studentClass;
                        admissionDate.value = students[i].admissionDate;
                        rollNumber.value = students[i].rollNumber;
                        stream.value = students[i].stream;
                        studentAddress.value = students[i].studentAddress;
                        studentPhotoURL = students[i].studentPhoto;
                        editId = students[i].studentId;
                    }

                }

            }

        }

    } catch (error) {

        studentBtn.style.display = "flex";
        updateStudentBtn.style.display = "none";

    }

}

checkEditable();

/* ================= UPDATE FORM VALIDATION ================= */

function updateFormVal(event) {

    event.preventDefault();

    let candidateName = document.getElementById("candidateName").value.trim();
    let studentEmail = document.getElementById("studentEmail").value.trim();
    let studentNumber = document.getElementById("studentNumber").value;
    let fatherName = document.getElementById("fatherName").value.trim();
    let fatherEmail = document.getElementById("fatherEmail").value.trim();
    let fatherNumber = document.getElementById("fatherNumber").value;
    let motherName = document.getElementById("motherName").value.trim();
    let motherEmail = document.getElementById("motherEmail").value.trim();
    let motherNumber = document.getElementById("motherNumber").value;
    let dob = document.getElementById("dob").value;
    let studentClass = document.getElementById("studentClass").value.trim();
    let admissionDate = document.getElementById("admissionDate").value;
    let rollNumber = document.getElementById("rollNumber").value.trim();
    let stream = document.getElementById("stream").value.trim();
    let studentAddress = document.getElementById("studentAddress").value.trim();

    if (candidateName === "") {

        showMessage("Enter Student Name", "danger");
        return;
    }

    if (studentPhotoURL === "" || studentPhotoURL === null) {

        showMessage("Upload Student Photo", "danger");
        return;
    }

    if (studentEmail === "") {

        showMessage("Enter Student Email ID", "danger");
        return;
    }

    if (!studentEmail.match("@")) {

        showMessage("Invalid Email ID", "danger");
        return;
    }

    if (!studentEmail.match("gmail.com")) {

        showMessage("Only 'gmail.com' Allowed", "danger");
        return;
    }

    if (studentNumber === "") {

        showMessage("Enter Student Mobile Number", "danger");
        return;
    }

    if (!studentNumber[0].match(/[7-9]/g)) {

        showMessage("Only Indian Number Allowed", "danger");
        return;
    }

    if (studentNumber.length !== 10) {

        showMessage("Invalid Mobile Number", "danger");
        return;
    }

    if (fatherName === "") {

        showMessage("Enter Father Name", "danger");
        return;
    }

    if (fatherEmail === "") {

        showMessage("Enter Father Email ID", "danger");
        return;
    }

    if (!fatherEmail.match("@")) {

        showMessage("Invalid Email ID", "danger");
        return;
    }

    if (!fatherEmail.match("gmail.com")) {

        showMessage("Only 'gmail.com' Allowed", "danger");
        return;
    }

    if (fatherNumber === "") {

        showMessage("Enter Father Mobile Number", "danger");
        return;
    }

    if (!fatherNumber[0].match(/[7-9]/g)) {

        showMessage("Only Indian Number Allowed", "danger");
        return;
    }

    if (fatherNumber.length !== 10) {

        showMessage("Invalid Mobile Number", "danger");
        return;
    }

    if (motherName === "") {

        showMessage("Enter Mother Name", "danger");
        return;
    }

    if (motherEmail === "") {

        showMessage("Enter Mother Email ID", "danger");
        return;
    }

    if (!motherEmail.match("@")) {

        showMessage("Invalid Email ID", "danger");
        return;
    }

    if (!motherEmail.match("gmail.com")) {

        showMessage("Only 'gmail.com' Allowed", "danger");
        return;
    }

    if (motherNumber === "") {

        showMessage("Enter Mother Mobile Number", "danger");
        return;
    }

    if (!motherNumber[0].match(/[7-9]/g)) {

        showMessage("Only Indian Number Allowed", "danger");
        return;
    }

    if (motherNumber.length !== 10) {

        showMessage("Invalid Mobile Number", "danger");
        return;
    }

    if (dob === "") {

        showMessage("Select Date Of Birth", "danger");
        return;
    }

    if (studentClass === "") {

        showMessage("Enter Student Class", "danger");
        return;
    }

    if (admissionDate === "") {

        showMessage("Select Student Admission Date", "danger");
        return;
    }

    if (rollNumber === "") {

        showMessage("Enter Student Roll Number", "danger");
        return;
    }

    if (stream === "") {

        showMessage("Enter Student Stream", "danger");
        return;
    }

    if (studentAddress === "") {

        showMessage("Enter Student Address", "danger");
        return;
    }

    updateUserDetail();

}

/* ================= UPDATE USER DETAILS ================= */

function updateUserDetail() {

    let candidateName = document.getElementById("candidateName").value.trim();
    let studentEmail = document.getElementById("studentEmail").value.trim();
    let studentNumber = document.getElementById("studentNumber").value;
    let fatherName = document.getElementById("fatherName").value.trim();
    let fatherEmail = document.getElementById("fatherEmail").value.trim();
    let fatherNumber = document.getElementById("fatherNumber").value;
    let motherName = document.getElementById("motherName").value.trim();
    let motherEmail = document.getElementById("motherEmail").value.trim();
    let motherNumber = document.getElementById("motherNumber").value;
    let dob = document.getElementById("dob").value;
    let studentClass = document.getElementById("studentClass").value.trim();
    let admissionDate = document.getElementById("admissionDate").value;
    let rollNumber = document.getElementById("rollNumber").value.trim();
    let stream = document.getElementById("stream").value.trim();
    let studentAddress = document.getElementById("studentAddress").value.trim();

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let currentDate = new Date();

    if (students.length !== 0) {

        for (let i = 0; i < students.length; i++) {

            if (students[i].studentId === editId) {

                students[i].candidateName = candidateName;
                students[i].studentEmail = studentEmail;
                students[i].studentNumber = studentNumber;
                students[i].fatherName = fatherName;
                students[i].fatherEmail = fatherEmail;
                students[i].fatherNumber = fatherNumber;
                students[i].motherName = motherName;
                students[i].motherEmail = motherEmail;
                students[i].motherNumber = motherNumber;
                students[i].dob = dob;
                students[i].studentClass = studentClass;
                students[i].admissionDate = admissionDate;
                students[i].rollNumber = rollNumber;
                students[i].stream = stream;
                students[i].studentAddress = studentAddress;
                students[i].studentPhoto = studentPhotoURL;
                students[i].updatedDate = currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString();

            }

        }

        localStorage.setItem("students", JSON.stringify(students));
        window.open("../pages/manage-students.html", "_self");
        
    }
}
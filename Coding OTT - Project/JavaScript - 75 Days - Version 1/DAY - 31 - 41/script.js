/* ================= TASK ================= */

// =============================
// GLOBAL HELPERS
// =============================
function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function generateID(prefix = "ID") {
    return prefix + "_" + Date.now();
}

function getTodayDate() {
    return new Date().toISOString().split("T")[0];
}

function showMessage(msg, type = "success") {

    let box = document.getElementById("msgBox");
    box.innerHTML = `<div class="alert alert-${type}">${msg}</div>`;

    setTimeout(() => {

        box.innerHTML = "";

    }, 2500);
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateMarks(total, obtained) {
    return obtained <= total && obtained >= 0;
}

// =============================
// AUTH
// =============================
function saveSession(email) {
    localStorage.setItem("loggedSchool", email);
}

function getSession() {
    return localStorage.getItem("loggedSchool");
}

function logoutSchool() {
    localStorage.removeItem("loggedSchool");
    window.location.href = "login.html";
}

function protectPage() {
    if (!getSession()) {
        window.location.href = "login.html";
    }
}

// =============================
// GET LOGGED SCHOOL DETAILS
// =============================
function getLoggedSchool() {
    let email = getSession();
    let schools = getData("schools");
    return schools.find(s => s.email === email);
}

// =============================
// STUDENT CRUD
// =============================
function addStudent(e) {
    e.preventDefault();

    let school = getLoggedSchool();
    let students = getData("students");

    let candidateName = document.getElementById("candidateName").value.trim();
    let email = document.getElementById("studentEmail").value.trim();
    let number = document.getElementById("studentNumber").value.trim();
    let fatherName = document.getElementById("fatherName").value.trim();
    let fatherEmail = document.getElementById("fatherEmail").value.trim();
    let fatherNumber = document.getElementById("fatherNumber").value.trim();
    let motherName = document.getElementById("motherName").value.trim();
    let motherEmail = document.getElementById("motherEmail").value.trim();
    let motherNumber = document.getElementById("motherNumber").value.trim();
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("studentAddress").value.trim();
    let studentClass = document.getElementById("studentClass").value.trim();
    let admissionDate = document.getElementById("admissionDate").value;
    let rollNumber = document.getElementById("rollNumber").value.trim();
    let stream = document.getElementById("stream").value.trim();
    let photoFile = document.getElementById("studentPhoto").files[0];

    if (!candidateName || !email || !number || !fatherName || !motherName || !dob || !address || !studentClass || !admissionDate || !rollNumber || !stream) {
        showMessage("msgBox", "All required fields must be filled!", "danger");
        return;
    }

    if (!validateEmail(email)) {
        showMessage("msgBox", "Invalid student email!", "danger");
        return;
    }

    function saveStudent(photoBase64) {
        let obj = {
            id: generateID("STUDENT"),
            schoolEmail: school.email,
            candidateName,
            email,
            number,
            fatherName,
            fatherEmail,
            fatherNumber,
            motherName,
            motherEmail,
            motherNumber,
            dob,
            address,
            class: studentClass,
            admissionDate,
            rollNumber,
            stream,
            photo: photoBase64 || "",
            createdDate: getTodayDate(),
            updatedDate: getTodayDate()
        };

        students.push(obj);
        setData("students", students);

        showMessage("msgBox", "Student Added Successfully!", "success");

        setTimeout(() => {
            window.location.href = "manage-students.html";
        }, 1200);
    }

    if (photoFile) {
        let reader = new FileReader();
        reader.onload = function () {
            saveStudent(reader.result);
        };
        reader.readAsDataURL(photoFile);
    } else {
        saveStudent("");
    }
}

// =============================
// DISPLAY STUDENTS
// =============================
function loadStudents() {
    let school = getLoggedSchool();
    let students = getData("students").filter(s => s.schoolEmail === school.email);

    let tbody = document.getElementById("studentsTableBody");
    tbody.innerHTML = "";

    students.forEach((s, index) => {
        tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td><img src="${s.photo || 'https://via.placeholder.com/50'}" style="width:45px;height:45px;border-radius:10px;object-fit:cover;border:1px solid #ddd;"></td>
        <td>${s.candidateName}</td>
        <td>${s.class}</td>
        <td>${s.rollNumber}</td>
        <td>${s.stream}</td>
        <td>${s.number}</td>
        <td>
          <div class="action-btns">
            <button class="small-btn small-btn-edit" onclick="editStudent('${s.id}')">
              <i class="ri-edit-line"></i> Edit
            </button>
            <button class="small-btn small-btn-delete" onclick="deleteStudent('${s.id}')">
              <i class="ri-delete-bin-line"></i> Delete
            </button>
          </div>
        </td>
      </tr>
    `;
    });
}

function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete this student?")) return;

    let students = getData("students");
    students = students.filter(s => s.id !== id);

    setData("students", students);
    loadStudents();
}

function editStudent(id) {
    localStorage.setItem("editStudentId", id);
    window.location.href = "add-student.html";
}

// =============================
// LOAD STUDENT INTO FORM
// =============================
function loadStudentForEdit() {
    let editId = localStorage.getItem("editStudentId");
    if (!editId) return;

    let students = getData("students");
    let found = students.find(s => s.id === editId);

    if (!found) return;

    document.getElementById("candidateName").value = found.candidateName;
    document.getElementById("studentEmail").value = found.email;
    document.getElementById("studentNumber").value = found.number;
    document.getElementById("fatherName").value = found.fatherName;
    document.getElementById("fatherEmail").value = found.fatherEmail;
    document.getElementById("fatherNumber").value = found.fatherNumber;
    document.getElementById("motherName").value = found.motherName;
    document.getElementById("motherEmail").value = found.motherEmail;
    document.getElementById("motherNumber").value = found.motherNumber;
    document.getElementById("dob").value = found.dob;
    document.getElementById("studentAddress").value = found.address;
    document.getElementById("studentClass").value = found.class;
    document.getElementById("admissionDate").value = found.admissionDate;
    document.getElementById("rollNumber").value = found.rollNumber;
    document.getElementById("stream").value = found.stream;

    document.getElementById("studentFormTitle").innerText = "Update Student";
    document.getElementById("studentBtn").innerText = "Update Student";
}

function updateStudent(e) {
    e.preventDefault();

    let editId = localStorage.getItem("editStudentId");
    if (!editId) {
        addStudent(e);
        return;
    }

    let students = getData("students");
    let index = students.findIndex(s => s.id === editId);
    if (index === -1) return;

    let photoFile = document.getElementById("studentPhoto").files[0];

    function saveUpdate(photoBase64) {
        students[index].candidateName = document.getElementById("candidateName").value.trim();
        students[index].email = document.getElementById("studentEmail").value.trim();
        students[index].number = document.getElementById("studentNumber").value.trim();
        students[index].fatherName = document.getElementById("fatherName").value.trim();
        students[index].fatherEmail = document.getElementById("fatherEmail").value.trim();
        students[index].fatherNumber = document.getElementById("fatherNumber").value.trim();
        students[index].motherName = document.getElementById("motherName").value.trim();
        students[index].motherEmail = document.getElementById("motherEmail").value.trim();
        students[index].motherNumber = document.getElementById("motherNumber").value.trim();
        students[index].dob = document.getElementById("dob").value;
        students[index].address = document.getElementById("studentAddress").value.trim();
        students[index].class = document.getElementById("studentClass").value.trim();
        students[index].admissionDate = document.getElementById("admissionDate").value;
        students[index].rollNumber = document.getElementById("rollNumber").value.trim();
        students[index].stream = document.getElementById("stream").value.trim();
        students[index].updatedDate = getTodayDate();

        if (photoBase64) {
            students[index].photo = photoBase64;
        }

        setData("students", students);

        localStorage.removeItem("editStudentId");
        showMessage("msgBox", "Student Updated Successfully!", "success");

        setTimeout(() => {
            window.location.href = "manage-students.html";
        }, 1200);
    }

    if (photoFile) {
        let reader = new FileReader();
        reader.onload = function () {
            saveUpdate(reader.result);
        };
        reader.readAsDataURL(photoFile);
    } else {
        saveUpdate("");
    }
}

// =============================
// DASHBOARD STATS
// =============================
function loadDashboard() {
    let school = getLoggedSchool();
    let students = getData("students").filter(s => s.schoolEmail === school.email);
    let marksheets = getData("marksheets").filter(m => m.schoolEmail === school.email);

    document.getElementById("schoolLogo").src = school.logo || "https://via.placeholder.com/70";
    document.getElementById("schoolTitle").innerText = school.schoolName;
    document.getElementById("schoolTagline").innerText = school.tagline;

    document.getElementById("totalStudents").innerText = students.length;
    document.getElementById("totalMarksheets").innerText = marksheets.length;
    document.getElementById("schoolMedium").innerText = school.medium;
}

// =============================
// MARKSHEET MODULE
// =============================
let subjectList = [];

function loadStudentDropdown() {
    let school = getLoggedSchool();
    let students = getData("students").filter(s => s.schoolEmail === school.email);

    let select = document.getElementById("studentSelect");
    select.innerHTML = `<option value="">-- Select Student --</option>`;

    students.forEach(s => {
        select.innerHTML += `<option value="${s.id}">${s.candidateName} (Roll: ${s.rollNumber})</option>`;
    });
}

function fillStudentDetails() {
    let studentId = document.getElementById("studentSelect").value;
    if (!studentId) return;

    let students = getData("students");
    let student = students.find(s => s.id === studentId);

    document.getElementById("previewPhoto").src = student.photo || "https://via.placeholder.com/70";
    document.getElementById("previewName").innerText = student.candidateName;
    document.getElementById("previewClass").innerText = student.class;
    document.getElementById("previewRoll").innerText = student.rollNumber;
    document.getElementById("previewFather").innerText = student.fatherName;
    document.getElementById("previewMother").innerText = student.motherName;
    document.getElementById("previewEmail").innerText = student.email;
}

function addSubject(e) {
    e.preventDefault();

    let name = document.getElementById("subjectName").value.trim();
    let total = parseInt(document.getElementById("totalMarks").value);
    let obtained = parseInt(document.getElementById("obtainedMarks").value);

    if (!name || isNaN(total) || isNaN(obtained)) {
        showMessage("msgBox", "All subject fields required!", "danger");
        return;
    }

    if (!validateMarks(total, obtained)) {
        showMessage("msgBox", "Obtained marks cannot exceed total marks!", "danger");
        return;
    }

    subjectList.push({ name, total, obtained });
    renderSubjects();

    document.getElementById("subjectName").value = "";
    document.getElementById("totalMarks").value = "";
    document.getElementById("obtainedMarks").value = "";
}

function renderSubjects() {
    let tbody = document.getElementById("subjectTableBody");
    tbody.innerHTML = "";

    subjectList.forEach((sub, index) => {
        tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${sub.name}</td>
        <td>${sub.total}</td>
        <td>${sub.obtained}</td>
        <td>
          <button class="small-btn small-btn-delete" onclick="deleteSubject(${index})">
            <i class="ri-delete-bin-line"></i> Delete
          </button>
        </td>
      </tr>
    `;
    });
}

function deleteSubject(index) {
    subjectList.splice(index, 1);
    renderSubjects();
}

// =============================
// SAVE MARKSHEET
// =============================
function saveMarksheet() {
    let school = getLoggedSchool();
    let studentId = document.getElementById("studentSelect").value;

    if (!studentId) {
        showMessage("msgBox", "Select a student first!", "danger");
        return;
    }

    if (subjectList.length === 0) {
        showMessage("msgBox", "Add at least 1 subject!", "danger");
        return;
    }

    let marksheets = getData("marksheets");

    let obj = {
        id: generateID("MARKSHEET"),
        schoolEmail: school.email,
        studentId: studentId,
        subjects: subjectList,
        createdDate: getTodayDate(),
        updatedDate: getTodayDate(),
        printedDate: getTodayDate(),
        createdBy: school.schoolName
    };

    marksheets.push(obj);
    setData("marksheets", marksheets);

    showMessage("msgBox", "Marksheet Saved Successfully!", "success");

    subjectList = [];
    renderSubjects();

    setTimeout(() => {
        window.location.href = "manage-marksheet.html";
    }, 1200);
}

// =============================
// LOAD MARKSHEETS LIST
// =============================
function loadMarksheets() {
    let school = getLoggedSchool();
    let marksheets = getData("marksheets").filter(m => m.schoolEmail === school.email);
    let students = getData("students");

    let tbody = document.getElementById("marksheetTableBody");
    tbody.innerHTML = "";

    marksheets.forEach((m, index) => {
        let st = students.find(s => s.id === m.studentId);

        tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${st ? st.candidateName : "Unknown"}</td>
        <td>${st ? st.class : "-"}</td>
        <td>${st ? st.rollNumber : "-"}</td>
        <td>${m.subjects.length}</td>
        <td>${m.createdDate}</td>
        <td>
          <div class="action-btns">
            <button class="small-btn small-btn-view" onclick="viewMarksheet('${m.id}')">
              <i class="ri-eye-line"></i> View
            </button>

            <button class="small-btn small-btn-delete" onclick="deleteMarksheet('${m.id}')">
              <i class="ri-delete-bin-line"></i> Delete
            </button>
          </div>
        </td>
      </tr>
    `;
    });
}

function deleteMarksheet(id) {
    if (!confirm("Delete this marksheet?")) return;

    let marksheets = getData("marksheets");
    marksheets = marksheets.filter(m => m.id !== id);

    setData("marksheets", marksheets);
    loadMarksheets();
}

function viewMarksheet(id) {
    localStorage.setItem("viewMarksheetId", id);
    window.location.href = "view-marksheet.html";
}

// =============================
// VIEW MARKSHEET PAGE
// =============================
function loadSingleMarksheet() {
    let school = getLoggedSchool();
    let marksheetId = localStorage.getItem("viewMarksheetId");

    if (!marksheetId) {
        window.location.href = "manage-marksheet.html";
        return;
    }

    let marksheets = getData("marksheets");
    let students = getData("students");

    let found = marksheets.find(m => m.id === marksheetId);
    let student = students.find(s => s.id === found.studentId);

    document.getElementById("msLogo").src = school.logo || "https://via.placeholder.com/70";
    document.getElementById("msSchoolName").innerText = school.schoolName;
    document.getElementById("msTagline").innerText = school.tagline;
    document.getElementById("msAddress").innerText = school.address;
    document.getElementById("msNumber").innerText = school.number;

    document.getElementById("msStudentPhoto").src = student.photo || "https://via.placeholder.com/70";
    document.getElementById("msStudentName").innerText = student.candidateName;
    document.getElementById("msStudentClass").innerText = student.class;
    document.getElementById("msStudentRoll").innerText = student.rollNumber;
    document.getElementById("msFather").innerText = student.fatherName;
    document.getElementById("msMother").innerText = student.motherName;
    document.getElementById("msEmail").innerText = student.email;

    let tbody = document.getElementById("msSubjectBody");
    tbody.innerHTML = "";

    let totalSum = 0;
    let obtainedSum = 0;

    found.subjects.forEach((sub, index) => {
        totalSum += sub.total;
        obtainedSum += sub.obtained;

        tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${sub.name}</td>
        <td>${sub.total}</td>
        <td>${sub.obtained}</td>
      </tr>
    `;
    });

    document.getElementById("msTotal").innerText = totalSum;
    document.getElementById("msObtained").innerText = obtainedSum;

    let percentage = ((obtainedSum / totalSum) * 100).toFixed(2);
    document.getElementById("msPercentage").innerText = percentage + "%";

    let result = percentage >= 33 ? "PASS" : "FAIL";
    document.getElementById("msResult").innerText = result;

    document.getElementById("msCreator").innerText = school.schoolName;
    document.getElementById("msPrinted").innerText = found.printedDate;
    document.getElementById("msCreated").innerText = found.createdDate;
    document.getElementById("msUpdated").innerText = found.updatedDate;
}

// =============================
// PDF EXPORT
// =============================
function downloadPDF() {
    let element = document.getElementById("marksheetPrintArea");

    html2pdf().from(element).set({
        margin: 0.4,
        filename: "marksheet.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    }).save();
}
# JS V1 - Day 31 - 41

## Task
Ek **professional Marksheet Generator Tool** banaiye jo completely **LocalStorage based** ho.

Is project me multiple modules honge jaise **School Registration/Login, Dashboard, Students Management, Marksheet Management, PDF Export**, etc.

---

# 1) Landing Page
- Ek professional **Landing Page** banana hai.
- Landing page par project ka intro aur buttons hone chahiye:
  - **Register School**
  - **Login School**

---

# 2) School Registration + Login (LocalStorage Based)
Sabse pehle school ko registration karna hoga.

## School Registration Fields
School ke registration form me ye details store hongi:

- School Name  
- Email  
- Address  
- Number  
- Password  
- Logo (Image Upload)  
- Tagline  
- Description  
- Registration Number  
- Registration Date  
- Created Date  
- Updated Date  
- Medium (English / Hindi)

✅ Data LocalStorage me **object + array format** me store karna hai.  
✅ Same email/id se dobara register kare toh record update hona chahiye.

---

# 3) School Dashboard
Login hone ke baad school ko dashboard par redirect karna hai.

Dashboard me sidebar/navbar me ye options hone chahiye:

- **Add New Student**
- **Manage Students (Edit/Delete)**
- **Add Marksheet**
- **Manage Marksheet (Edit/Delete)**
- **Logout**

---

# 4) Student Module

## Add Student Form Fields
Student details LocalStorage me store karni hai:

- Candidate Name  
- Photo  
- Email  
- Number  
- Father Name  
- Father Email  
- Father Number  
- Mother Name  
- Mother Email  
- Mother Number  
- DOB  
- Address  
- Class  
- Admission Date  
- Roll Number  
- Stream  

---

## Manage Students
- Student list table me show karni hai.
- Har student ke sath options hone chahiye:
  - **Edit**
  - **Delete**

---

# 5) Marksheet Module

## Marksheet UI Structure
Marksheet ke top section me show hona chahiye:

- School Logo  
- School Name  
- Tagline  
- Address  
- Number  

---

## Student Select Section
- Marksheet page par **Select Student Dropdown** hona chahiye.
- Student select karte hi automatically niche details fill ho jaye:

- Student Name  
- Photo  
- Roll Number  
- Class  
- Father Name  
- Mother Name  
- Email  

---

## Subject Section
Niche subject list ka table banana hai jisme columns hon:

- Subject Name  
- Total Marks  
- Obtained Marks  
- Action (Delete)

---

## Add Subject Option
- Table ke niche ek form hona chahiye jisme:
  - Subject Name input
  - Total Marks input
  - Obtained Marks input
  - Add button

Add button click karne par subject list me add ho jaye.

---

# 6) Marksheet Footer Details
Marksheet ke bottom me ye details show honi chahiye:

- Creator Name  
- Social Media Links (Icons ke sath)
- Printed Date  
- Created Date  
- Updated Date  
- Created By  
- School Name  

---

# 7) Marksheet Save + PDF Export
Marksheet ke niche buttons hone chahiye:

- **Add / Save Marksheet**
- **Save as PDF**

✅ Save as PDF button se marksheet PDF format me download ho.  
(Example: html2pdf.js / jsPDF library use kar sakte ho)

---

# 8) Manage Marksheet
Manage marksheet section me:

- Saved marksheets ki list show karni hai.
- Har marksheet ke sath options hone chahiye:
  - **Edit**
  - **Delete**
  - **View / Print**

---

# 9) Important Instructions
- Project fully **JavaScript based** hona chahiye.
- Data handling complete **LocalStorage** se hoga.
- Validation compulsory hai (empty fields, invalid email, marks validation, etc.)
- UI professional aur responsive hona chahiye.
- CRUD operations required:
  - Create
  - Read
  - Update
  - Delete

---


# 📘 MarksheetPro - LocalStorage Based Marksheet Generator Tool

A **Professional Marksheet Generator Web App** built using **HTML, CSS, JavaScript** with complete **LocalStorage based database system**.

This project is designed for practicing **real-world CRUD operations**, authentication system, dashboard management, marksheet creation, and PDF export feature.

---

## 🚀 Project Overview

**MarksheetPro** is a complete offline tool where schools can:

- Register their profile (with logo)
- Login securely
- Manage students (Add / Edit / Delete)
- Generate marksheets
- Save marksheets in LocalStorage
- Export marksheets as PDF
- Print marksheets

All data is stored locally inside the browser using **LocalStorage** (No backend / No database required).

---

## 🛠️ Technologies Used

| Technology | Use |
|----------|-----|
| HTML5 | Website structure |
| CSS3 | UI design + Responsive layout |
| JavaScript (ES6) | Logic + LocalStorage CRUD |
| LocalStorage | Offline data storage |
| Remix Icons | Professional icon library |
| html2pdf.js | PDF export feature |

---

## 🎨 UI Theme Details

- Theme: **Light UI**
- Primary Color: **Blue**
- Design Style: **Modern Dashboard UI**
- Layout: **Responsive (Mobile + Tablet + Desktop)**

---

## 📂 Folder Structure

```bash
project/
│── index.html
│── register.html
│── login.html
│── dashboard.html
│── add-student.html
│── manage-students.html
│── add-marksheet.html
│── manage-marksheet.html
│── view-marksheet.html
│── style.css
│── app.js
````

---

## 📌 Pages & Modules Explanation

### ✅ 1) Landing Page (`index.html`)

Landing page is the first page of the project.

Includes:

* Project Introduction
* Buttons:

  * Register School
  * Login School

---

### ✅ 2) School Registration (`register.html`)

School must register before login.

#### Registration Fields Stored in LocalStorage:

* School Name
* Email
* Address
* Number
* Password
* Logo (Image Upload)
* Tagline
* Description
* Registration Number
* Registration Date
* Medium (English / Hindi)
* Created Date
* Updated Date

#### Special Feature:

* If same email already exists, school record is **updated instead of duplicate insert**.

---

### ✅ 3) School Login (`login.html`)

School login system based on LocalStorage.

#### Login Fields:

* Email
* Password

If login is correct:

* Session is stored in LocalStorage as:

```js
loggedSchool = "schoolEmail"
```

Redirect to:

* `dashboard.html`

---

### ✅ 4) Dashboard (`dashboard.html`)

After login, user lands on dashboard.

Dashboard includes:

* Sidebar Navigation
* School Profile Preview
* Stats:

  * Total Students
  * Total Marksheets
  * School Medium

Sidebar Modules:

* Add Student
* Manage Students
* Add Marksheet
* Manage Marksheet
* Logout

---

## 👨‍🎓 Student Module

### ✅ 5) Add Student (`add-student.html`)

Allows adding new students into LocalStorage.

#### Student Fields Stored:

* Candidate Name
* Photo
* Email
* Number
* Father Name
* Father Email
* Father Number
* Mother Name
* Mother Email
* Mother Number
* DOB
* Address
* Class
* Admission Date
* Roll Number
* Stream
* Created Date
* Updated Date

#### Features:

* Student photo stored as Base64 in LocalStorage
* Student record linked with School Email

---

### ✅ 6) Manage Students (`manage-students.html`)

Displays student list in table format.

#### Table Columns:

* Photo
* Name
* Class
* Roll Number
* Stream
* Number
* Actions

#### Actions Available:

* Edit Student
* Delete Student

#### Edit Student Feature:

* Student ID stored temporarily in LocalStorage:

```js
editStudentId = "STUDENT_ID"
```

Then redirect to:

* `add-student.html`

---

## 📝 Marksheet Module

### ✅ 7) Add Marksheet (`add-marksheet.html`)

Used to generate marksheet.

#### Marksheet Steps:

1. Select student from dropdown
2. Student details auto-filled
3. Add multiple subjects
4. Save marksheet in LocalStorage

---

### 📌 Student Select Section

Dropdown auto loads students from logged school.

After selecting:

* Student Name
* Photo
* Roll Number
* Class
* Father Name
* Mother Name
* Email

All data auto previewed.

---

### 📌 Subject Section

Subjects are stored temporarily in array:

```js
subjectList = []
```

#### Subject Table Columns:

* Subject Name
* Total Marks
* Obtained Marks
* Delete Action

#### Validation Rules:

* Subject name required
* Total marks required
* Obtained marks required
* Obtained cannot exceed Total
* Obtained cannot be negative

---

### ✅ 8) Save Marksheet

Marksheet stored in LocalStorage with structure:

```js
{
  id: "MARKSHEET_ID",
  schoolEmail: "school@gmail.com",
  studentId: "STUDENT_ID",
  subjects: [
    { name: "Math", total: 100, obtained: 90 }
  ],
  createdDate: "YYYY-MM-DD",
  updatedDate: "YYYY-MM-DD",
  printedDate: "YYYY-MM-DD",
  createdBy: "School Name"
}
```

---

## 📋 Marksheet Management

### ✅ 9) Manage Marksheet (`manage-marksheet.html`)

Displays all marksheets saved by logged-in school.

#### Table Columns:

* Student Name
* Class
* Roll
* Total Subjects
* Created Date
* Actions

#### Actions:

* View Marksheet
* Delete Marksheet

---

## 🖨️ View / Print / PDF Export

### ✅ 10) View Marksheet (`view-marksheet.html`)

Shows professional printable marksheet UI.

Includes:

* School Logo
* School Name
* Tagline
* Address
* Number

Student details:

* Name
* Photo
* Class
* Roll Number
* Father Name
* Mother Name
* Email

Subject Table:

* Subject Name
* Total Marks
* Obtained Marks

Summary:

* Total Marks
* Obtained Marks
* Percentage
* Result (PASS/FAIL)

Footer:

* Creator Name
* Printed Date
* Created Date
* Updated Date
* Social Media Icons

---

### ✅ PDF Export Feature

PDF export implemented using:

* **html2pdf.js**

Button:

* Save as PDF

Function used:

```js
downloadPDF()
```

PDF is downloaded as:

```
marksheet.pdf
```

---

## 🔐 Authentication System (LocalStorage)

### Session Storage Key:

```js
loggedSchool
```

If session not found:

* Redirect to `login.html`

Function used:

```js
protectPage()
```

---

## 📦 LocalStorage Database Keys

| Key               | Data                                    |
| ----------------- | --------------------------------------- |
| `schools`         | Stores all registered schools           |
| `students`        | Stores students of all schools          |
| `marksheets`      | Stores marksheets of all schools        |
| `loggedSchool`    | Stores currently logged-in school email |
| `editStudentId`   | Temporary student edit id               |
| `viewMarksheetId` | Temporary marksheet view id             |

---

## 📌 CRUD Operations Covered

### ✅ School CRUD

* Register School (Create)
* Update School if same email (Update)
* Login School (Read)

---

### ✅ Student CRUD

* Add Student (Create)
* View Students List (Read)
* Edit Student (Update)
* Delete Student (Delete)

---

### ✅ Marksheet CRUD

* Add Marksheet (Create)
* View Marksheet List (Read)
* View Single Marksheet (Read)
* Delete Marksheet (Delete)

> ⚠️ Marksheet Update (Edit) not included yet.

---

## ✅ Validations Included

### School Validation

* Empty field validation
* Email format validation
* Phone number validation
* Password minimum length validation

### Student Validation

* Required fields validation
* Email validation

### Subject Validation

* Empty subject validation
* Total marks numeric validation
* Obtained marks numeric validation
* Obtained <= Total validation

---

## 📌 How to Run This Project

### Step 1: Download / Copy Project Files

Make sure you have all files:

* HTML pages
* `style.css`
* `app.js`

---

### Step 2: Open `index.html`

Just open `index.html` in your browser.

No server required.

---

### Recommended:

Use VS Code Live Server Extension for better experience.

---

## 📌 Usage Flow (Step-by-Step)

### 1) Register School

Go to:

* `register.html`

Fill all fields and register.

---

### 2) Login School

Go to:

* `login.html`

Enter email & password.

---

### 3) Dashboard

After login, dashboard shows school stats.

---

### 4) Add Students

Go to:

* Add Student Page

Add students with full details.

---

### 5) Manage Students

Edit/Delete student records.

---

### 6) Create Marksheet

Go to:

* Add Marksheet Page

Select student, add subjects, save marksheet.

---

### 7) Manage Marksheet

View/Delete marksheets.

---

### 8) View Marksheet

View marksheet in professional UI.

---

### 9) Print / Download PDF

Use:

* Print button
* Save as PDF button

---

## ⚠️ Important Notes

### LocalStorage Limitations

* Browser LocalStorage has limited capacity (approx 5MB).
* Large images may consume space quickly.
* Best practice: use optimized image sizes.

---

### Data Reset

To reset the whole system:

* Open browser DevTools
* Go to Application → LocalStorage
* Clear all keys

Or run:

```js
localStorage.clear();
```

---

## 🔥 Future Improvements (Recommended)

These upgrades will make project production-level:

* Marksheet Edit / Update Feature
* Marksheet Print Template Optimization
* Grade System (A+, A, B, etc.)
* Marks Validation by subject type
* Separate page for School Profile Update
* Better session system using expiry
* Search and filter in manage tables
* Export student list as Excel/PDF

---

## 📌 Credits

### Icons:

* Remix Icons
  [https://remixicon.com/](https://remixicon.com/)

### PDF Export:

* html2pdf.js
  [https://github.com/eKoopmans/html2pdf](https://github.com/eKoopmans/html2pdf)

---

## 🏁 Conclusion

**MarksheetPro** is a complete offline marksheet management tool built for learning and practicing:

* Authentication System
* CRUD Operations
* LocalStorage Database Handling
* Dashboard UI
* PDF Export

This project is perfect for **JavaScript Practical Training** and **Portfolio Project**.


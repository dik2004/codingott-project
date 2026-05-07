/* ================= TASK ================= */

// Tabs
let regTab = document.getElementById("regTab");
let loginTab = document.getElementById("loginTab");

// Switch Tabs
regTab.addEventListener("click", () => {
    regTab.classList.add("active");
    loginTab.classList.remove("active");

    registerForm.classList.add("active-form");
    loginForm.classList.remove("active-form");
});

loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    regTab.classList.remove("active");

    loginForm.classList.add("active-form");
    registerForm.classList.remove("active-form");
});

let users = [];

let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();
    let phone = document.getElementById("regPhone").value.trim();

    if (name === "" || email === "" || password === "" || phone === "") {

        showPopup("Error", "All fields are required.", "error");
        return;

    }

    let found = false;
    let userIndex = null;

    if (users.length !== 0) {

        for (let i = 0; i < users.length; i++) {

            if (users[i].email === email) {

                found = true;
                userIndex = i;
                break;

            };

        };

    }

    if (found) {

        users[userIndex].name = name;
        users[userIndex].password = password;
        users[userIndex].phone = phone;

        showPopup("Updated", "User already existed. Data updated successfully!", "success");
        console.log(users);

    } else {

        let newUser = {
            name: name,
            email: email,
            password: password,
            phone: phone
        };

        users.push(newUser);
        showPopup("Registered", "Registration Successful!", "success");

    }

    registerForm.reset();
    console.log("Users Array:", users);

});

let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {

        showPopup("Error", "All fields are required.", "error");
        return;

    }

    let found = false;
    let passMatch = false;
    let userIndex = null

    if (users.length === 0) {

        showPopup("No User Found", "You Have To Register First", "error");

    } else {

        for (let i = 0; i < users.length; i++) {

            if (users[i].email === email) {

                found = true;

                if (users[i].password === password) {

                    passMatch = true;
                    userIndex = i;
                }

                break;
            }

        }

        if (found) {

            if (passMatch) {

                showPopup("Login Successful", `Welcome back, ${users[userIndex].name}!`, "success");
                loginForm.reset();

            } else {

                showPopup("Login Failed", "Invalid Password.", "error");

            }

        } else {

            showPopup("Login Failed", "Invalid Email ID.", "error");

        }


    }

});

// Popup
let popupOverlay = document.getElementById("popupOverlay");
let popupBox = document.getElementById("popupBox");
let popupTitle = document.getElementById("popupTitle");
let popupMessage = document.getElementById("popupMessage");
let popupIcon = document.getElementById("popupIcon");
let closePopup = document.getElementById("closePopup");

// Popup Function
function showPopup(title, message, type) {
    popupTitle.innerText = title;
    popupMessage.innerText = message;

    popupIcon.innerHTML = "";

    if (type === "success") {
        popupIcon.innerHTML = `<i class="ri-checkbox-circle-line"></i>`;
        popupIcon.style.color = "#22c55e";
    }
    else if (type === "error") {
        popupIcon.innerHTML = `<i class="ri-close-circle-line"></i>`;
        popupIcon.style.color = "#ef4444";
    }
    else {
        popupIcon.innerHTML = `<i class="ri-information-line"></i>`;
        popupIcon.style.color = "#38bdf8";
    }

    popupOverlay.classList.add("active");

    // Reset animation classes
    popupBox.classList.remove("animate__fadeInDown", "animate__shakeX", "animate__zoomIn");

    // Add animation dynamically
    if (type === "success") {
        popupBox.classList.add("animate__zoomIn");
    }
    else if (type === "error") {
        popupBox.classList.add("animate__shakeX");
    }
    else {
        popupBox.classList.add("animate__fadeInDown");
    }
}

// Close Popup
closePopup.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
});
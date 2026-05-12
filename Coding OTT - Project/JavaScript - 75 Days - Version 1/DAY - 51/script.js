/* ================= TASK ================= */

function checkData() {

    let rememberMe = document.getElementById("rememberMe");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {

        const loginData = {

            email: "login@demo.com",
            password: "demo123",
            rememberMe: false,

        }

        localStorage.setItem("userData", JSON.stringify(loginData));

    } else {

        if (userData.rememberMe) {

            rememberMe.checked = true;
            email.value = userData.email;
            password.value = userData.password;

        } else {

            rememberMe.checked = false;
            email.value = "";
            password.value = "";

        }
    }

}

checkData();

let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let popupOverlay = document.getElementById("popupOverlay");
    let rememberMe = document.getElementById("rememberMe");

    let userData = JSON.parse(localStorage.getItem("userData"));

    let emailMatch = false;
    let passwordMatch = false;

    if (userData) {

        if (userData.email === email) {

            emailMatch = true;

            if (userData.password === password) {

                passwordMatch = true;

            }
        }

    }

    if (emailMatch) {

        if (passwordMatch) {

            rememberMe.checked ? userData.rememberMe = true : userData.rememberMe = false;

            popupOverlay.classList.add("active");
            localStorage.setItem("userData", JSON.stringify(userData));
            checkData();

        } else {

            alert("Password Not Match");

        }

    } else {

        alert("Email Not Match");

    }
});

const togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", () => {

    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.classList.remove("ri-eye-line");
        togglePassword.classList.add("ri-eye-off-line");

    } else {

        passwordInput.type = "password";
        togglePassword.classList.remove("ri-eye-off-line");
        togglePassword.classList.add("ri-eye-line");

    }
});

const closePopup = document.getElementById("closePopup");
closePopup.addEventListener("click", () => {

    let popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.classList.remove("active");

});
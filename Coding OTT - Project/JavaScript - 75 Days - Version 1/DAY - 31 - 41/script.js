/* ================= AUTHENTICATION CHECK ================= */

let currentUser = null;

function isLogged() {

    let signupBtn1 = document.getElementById("signupBtn1");
    let signupBtn2 = document.getElementById("signupBtn2");
    let signupBtn3 = document.getElementById("signupBtn3");

    /* ================= LOAD ALL SCHOOL DATA ================= */
    let loggedSchool = localStorage.getItem("loggedSchool");

    if (loggedSchool === null) {

        signupBtn1.style.display = "flex";
        signupBtn2.style.display = "flex";
        signupBtn3.style.display = "flex";
        
    } else {
        
        signupBtn1.style.display = "none";
        signupBtn2.style.display = "none";
        signupBtn3.style.display = "none";
        
    }

}

isLogged();

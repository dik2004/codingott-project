/* ================= TASK 1 ================= */

let element = null;

function elementSelector(e) {
    
    element = e;
    
}

let colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", function () {

    let title = document.getElementById("title");
    let desc = document.getElementById("desc");
    let hexCode = document.getElementById("hexCode");

    if (element === "title") {

        title.style.color = colorPicker.value;
        desc.style.color = "#222222";
        hexCode.textContent = colorPicker.value;
        
    }
    else if (element === "desc") {
        
        title.style.color = "#000000";
        desc.style.color = colorPicker.value;
        hexCode.textContent = colorPicker.value;

    }
    else {

        title.style.color = "#000000";
        desc.style.color = "#222222";

    }

});

/* ================= TASK 2 ================= */

let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(e) {

    e.preventDefault();
    alert("Congratulation, You're Good Person!");

});
/* ================= TASK ================= */

const uploadBtn = document.getElementById("uploadBtn");
uploadBtn.addEventListener("click", () => {

    pdfInput.click();

});

let fileExist = false;

const pdfInput = document.getElementById("pdfInput");
pdfInput.addEventListener("change", uploadFile);

function uploadFile() {

    let pdfFrame = document.getElementById("pdfFrame");
    const pdfName = document.getElementById("pdfName");
    const pdfSize = document.getElementById("pdfSize");
    const pdfDate = document.getElementById("pdfDate");

    let file = pdfInput.files[0];

    if (!file) {

        alert("Only PDF files are allowed!");
        pdfInput.value = "";
        fileExist = false;
        return;

    }

    let fileReader = new FileReader();

    fileReader.onload = function () {

        pdfFrame.src = fileReader.result;
        pdfName.textContent = file.name;
        pdfSize.textContent = (file.size / (1024 * 1024)).toFixed(2) + " MB";
        pdfDate.textContent = new Date (file.lastModified).toLocaleString();
        fileExist = true;
        checkFile();
    };

    fileReader.readAsDataURL(file);

}


function checkFile() {

    let pdfDetails = document.getElementById("pdfDetails");
    let noPdfBox = document.getElementById("noPdfBox");
    let pdfFrame = document.getElementById("pdfFrame");

    if (fileExist) {

        pdfDetails.style.display = "block";
        pdfFrame.style.display = "flex";
        noPdfBox.style.display = "none";

    } else {

        pdfDetails.style.display = "none";
        pdfFrame.style.display = "none";
        noPdfBox.style.display = "flex";

    }
}

checkFile();

const btnText = document.getElementById("btnText");



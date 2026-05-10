/* ================= TASK ================= */

let uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", function () {

    imageInput.click();

});

let imageInput = document.getElementById("imageInput");
imageInput.addEventListener("change", uploadFile);

function uploadFile() {

    let gallery = document.getElementById("gallery")

    let file = imageInput.files[0];

    const card = document.createElement("div");
    card.className = "image-card";

    if (!file) {

        alert("Invalid File");
        return;
    }

    let fileReader = new FileReader();

    fileReader.onload = function () {

        card.innerHTML = `

            <div class="image-preview">
                <img src="${fileReader.result}" alt="${file.name}">
                <div class="image-actions">
                <button class="icon-btn view-btn" title="View">
                    <i class="ri-eye-line"></i>
                </button>
                <button class="icon-btn delete-btn" title="Delete">
                    <i class="ri-delete-bin-6-line"></i>
                </button>
                </div>
            </div>

            <div class="image-details">
                <p class="img-name" title="${file.name}">
                <i class="ri-image-2-line"></i>
                <span>${file.name}</span>
                </p>

                <p class="img-size">
                <i class="ri-file-info-line"></i>
                <span>${(file.size / (1024 * 1024)).toFixed(2) + " MB"}</span>
                </p>
            </div>
            `;

        const viewBtn = card.querySelector(".view-btn");
        const deleteBtn = card.querySelector(".delete-btn");

        viewBtn.addEventListener("click", () => {

            viewImg(fileReader.result, file.name, file.size);

        });

        deleteBtn.addEventListener("click", () => {

            deleteImg(card);

        });

        gallery.appendChild(card);
        loadData();

    };

    fileReader.readAsDataURL(file);

}

/* ================= VIEW IMAGE FILE ================= */

function viewImg(src, name, size) {

    const viewModal = document.getElementById("viewModal");
    const modalImage = document.getElementById("modalImage");
    const modalImageName = document.querySelector("#modalImageName span");
    const modalImageSize = document.querySelector("#modalImageSize span");

    viewModal.classList.add("active");

    modalImage.src = src;
    modalImageName.textContent = name;
    modalImageSize.textContent = (size / (1024 * 1024)).toFixed(2) + " MB";

}

const closeViewModal = document.getElementById("closeViewModal");
closeViewModal.addEventListener("click", function () {

    const viewModal = document.getElementById("viewModal");
    viewModal.classList.remove("active");


});

/* ================= DELETE IMAGE FILE ================= */

function deleteImg(item) {

    const deletePopup = document.getElementById("deletePopup");
    const confirmDelete = document.getElementById("confirmDelete");
    deletePopup.classList.add("active");

    confirmDelete.onclick = function () {

        item.remove();
        deletePopup.classList.remove("active");
        loadData();

    }

}
const cancelDelete = document.getElementById("cancelDelete");
cancelDelete.addEventListener("click", function () {

    const deletePopup = document.getElementById("deletePopup");
    deletePopup.classList.remove("active");

});

/* ================= LOAD IMAGE FILE DATA ================= */

function loadData() {

    let imageCard = document.querySelectorAll(".image-card");
    let emptyState = document.getElementById("emptyState");
    let gallery = document.getElementById("gallery");
    let clearAllBtn = document.getElementById("clearAllBtn");

    if (imageCard.length === 0) {

        emptyState.style.display = "flex";
        clearAllBtn.style.display = "none";

    } else {

        emptyState.style.display = "none";
        clearAllBtn.style.display = "flex";

    }
}

loadData();

/* ================= CLEAR ALL IMAGE FILE DATA ================= */

const clearAllBtn = document.getElementById("clearAllBtn");
clearAllBtn.addEventListener("click", function () {

    let message = confirm("Are You Want To Sure To Delete All Images?");

    if (message) {

        let cancelDelete = document.getElementById("gallery");
        gallery.innerHTML = "";
        loadData();

    }

});

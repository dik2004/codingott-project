/* ================= TASK ================= */

function showPreview(animationClass) {

    const preview = document.getElementById("preview");
    const animName = document.getElementById("animName");

    preview.classList.add("animate__animated", animationClass);
    animName.textContent = animationClass.replace("animate__", "");

    setTimeout(function () {

        preview.classList.remove("animate__animated", animationClass);

    }, 1000)
}
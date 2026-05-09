/* ================= TASK ================= */

let fullForms = {
    A: "A for Apple",
    B: "B for Ball",
    C: "C for Cat",
    D: "D for Dog",
    E: "E for Elephant",
    F: "F for Fish",
    G: "G for Grapes",
    H: "H for Hen",
    I: "I for Ice Cream",
    J: "J for Joker",
    K: "K for Kite",
    L: "L for Lion",
    M: "M for Mango",
    N: "N for Nest",
    O: "O for Orange",
    P: "P for Parrot",
    Q: "Q for Queen",
    R: "R for Rabbit",
    S: "S for Sun",
    T: "T for Tiger",
    U: "U for Umbrella",
    V: "V for Van",
    W: "W for Watch",
    X: "X for Xylophone",
    Y: "Y for Yak",
    Z: "Z for Zebra"
};


let audio = document.getElementById("audio");
let micIcon = document.getElementById("micIcon");
let alphabetCard = document.querySelectorAll(".alphabet-card");
let outputBox = document.getElementById("outputBox");
let outputText = document.getElementById("outputText");

alphabetCard.forEach(function (card) {

    card.addEventListener("click", function () {

        let alphabet = card.textContent.trim();

        audio.src = `./audio-alphabet/${card.textContent}.wav`;
        audio.play();

        outputText.innerText = fullForms[alphabet];

    });

});

audio.addEventListener("timeupdate", () => {

    if (audio.paused) {

        micIcon.classList.add("inactive");
        micIcon.classList.remove("active");

    } else {

        outputBox.style.display = "flex";

        micIcon.classList.remove("inactive");
        micIcon.classList.add("active");
    }

    if (audio.ended) {

        outputBox.style.display = "none";

    }

});
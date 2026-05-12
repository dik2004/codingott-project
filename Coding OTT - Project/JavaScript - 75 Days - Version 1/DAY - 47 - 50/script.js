/* ================= TASK ================= */

const selectBtn = document.getElementById("selectBtn");
selectBtn.addEventListener("click", () => {

    audioInput.click();

});

let fileFound = false;

/* ================= UPLOAD FILE ================= */

const audioInput = document.getElementById("audioInput");
audioInput.addEventListener("change", uploadFile);

function uploadFile() {

    let musicName = document.getElementById("musicName");
    let musicSize = document.getElementById("musicSize");
    let audio = document.getElementById("audio");
    let totalDuration = document.getElementById("totalDuration");

    file = audioInput.files[0];

    if (!file) {

        alert("Only Audio Files Allowed");
        fileFound = false;
        audioInput.value = "";
        return;

    }

    let fileReader = new FileReader();

    fileReader.onload = function () {

        fileFound = true;
        audio.src = fileReader.result;
        musicName.textContent = file.name;
        musicSize.textContent = (file.size / (1024 * 1024)).toFixed(2) + " MB";
        checkFile();

    };

    fileReader.readAsDataURL(file);

    /* ================= LOAD AUDIO METADATA FILE ================= */

    audio.addEventListener("loadedmetadata", () => {

        let progressBar = document.getElementById("progressBar");
        progressBar.max = audio.duration;

        let minutes = Math.floor(audio.duration / 60);
        let seconds = Math.floor(audio.duration % 60);

        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;

        totalDuration.textContent = minutes + ":" + seconds

    });

}

/* ================= FILE AVAILABLE OR NOT ================= */

function checkFile() {

    let noMusicScreen = document.getElementById("noMusicScreen");
    let playerScreen = document.getElementById("playerScreen");

    if (fileFound) {

        noMusicScreen.style.display = "none";
        playerScreen.style.display = "block";

    } else {

        noMusicScreen.style.display = "flex";
        playerScreen.style.display = "none";

    }
}

checkFile();

/* ================= PLAY/PAUSE ================= */

let playPauseBtn = document.getElementById("playPauseBtn");
playPauseBtn.addEventListener("click", function () {

    let playPauseIcon = document.getElementById("playPauseIcon");
    let audio = document.getElementById("audio");

    if (!audio.src) {

        return;

    }

    if (audio.paused) {

        audio.play();
        playPauseIcon.className = "ri-pause-fill";
        playPauseBtn.title = "Pause";

    } else {

        audio.pause();
        playPauseIcon.className = "ri-play-fill";
        playPauseBtn.title = "Play";

    }


});

/* ================= MUTE/UNMUTE ================= */

let muteBtn = document.getElementById("muteBtn");
muteBtn.addEventListener("click", function () {

    let muteIcon = document.getElementById("muteIcon");
    let audio = document.getElementById("audio");

    if (!audio.src) {

        return;

    }

    if (audio.muted) {

        audio.muted = false;
        muteIcon.className = "ri-volume-up-fill";
        muteBtn.title = "Mute";

    } else {

        audio.muted = true;
        muteIcon.className = "ri-volume-mute-fill";
        muteBtn.title = "Unmute";

    }


});

/* ================= BACKWARD ================= */

let backwardBtn = document.getElementById("backwardBtn");
backwardBtn.addEventListener("click", function () {

    let audio = document.getElementById("audio");

    if (!audio.src) {

        return;

    }

    audio.currentTime = Math.max(audio.currentTime - 10, 0);

});

/* ================= FORWARD ================= */

let forwardBtn = document.getElementById("forwardBtn");
forwardBtn.addEventListener("click", function () {

    let audio = document.getElementById("audio");

    if (!audio.src) {

        return;

    }

    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);

});

/* ================= UPDATE STATUS/PROGRESS ================= */

let audio = document.getElementById("audio");
audio.addEventListener("timeupdate", function () {

    let progressBar = document.getElementById("progressBar");
    let currentTime = document.getElementById("currentTime");
    let playPauseBtn = document.getElementById("playPauseBtn");
    let playPauseIcon = document.getElementById("playPauseIcon");

    progressBar.value = audio.currentTime;

    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    currentTime.textContent = minutes + ":" + seconds;

    if (audio.ended) {

        playPauseBtn.title = "Play Again";
        playPauseIcon.className = "ri-restart-line";
    }

    if (audio.paused) {

        playPauseIcon.className = "ri-play-fill";
        playPauseBtn.title = "Play";

    } else {

        playPauseIcon.className = "ri-pause-fill";
        playPauseBtn.title = "Pause";

    }

});

/* ================= UPDATE LOOP STATUS ================= */

let loopBtn = document.getElementById("loopBtn");
loopBtn.addEventListener("click", function () {

    let loopIcon = document.getElementById("loopIcon");
    let audio = document.getElementById("audio");

    if (!audio.src) {

        return;

    }

    if (audio.loop) {

        audio.loop = false;
        loopBtn.title = "Loop";
        loopIcon.classList = "ri-repeat-2-line";

    } else {

        audio.loop = true;
        loopBtn.title = "Looped";
        loopIcon.classList = "ri-infinity-fill";
    }

});

/* ================= PROGRESS BAR ================= */

let progressBar = document.getElementById("progressBar");
progressBar.addEventListener("input", function () {

    let currentTime = document.getElementById("currentTime");

    let minutes = Math.floor(progressBar.value / 60);
    let seconds = Math.floor(progressBar.value % 60);

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    currentTime.textContent = minutes + ":" + seconds;
    audio.pause();

});

progressBar.addEventListener("change", function () {

    audio.currentTime = progressBar.value;
    audio.play();

});
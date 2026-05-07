function createNote() {

    let noteTitle = document.getElementById("noteTitle");
    let noteContent = document.getElementById("noteContent");

    if (noteTitle.value.trim() === "") {

        noteTitle.style.borderColor = "#FF0000";
        noteContent.style.borderColor = "inherit";

    }
    else if (noteTitle.value.match(".txt")) {

        if (noteContent.value.trim() === "") {

            noteTitle.style.borderColor = "inherit";
            noteContent.style.borderColor = "#FF0000";

        }
        else {

            noteTitle.style.borderColor = "inherit";
            noteContent.style.borderColor = "inherit";
            saveNotes();

        }

    } else {

        noteTitle.style.borderColor = "#FF0000";
        noteContent.style.borderColor = "inherit";
        console.warn("Note Title Must Be Inclue .txt Extention");

    }
}

function saveNotes() {

    let noteTitle = document.getElementById("noteTitle").value;
    let noteContent = document.getElementById("noteContent").value;

    let noteFile = new Blob([noteContent], { type: 'text/plain' });

    let anchorTag = document.createElement("A");
    anchorTag.href = URL.createObjectURL(noteFile);
    anchorTag.download = noteTitle;
    anchorTag.click();
}

function loadNotes() {

    let fileInput = document.getElementById("fileInput");
    let noteTitle = document.getElementById("noteTitle");
    let noteContent = document.getElementById("noteContent");

    let file = fileInput.files[0];

    if (!file) {

        console.warn("Invalid File Type")
        return;

    }

    let fileReader = new FileReader();

    fileReader.onload = function (event) {

        noteTitle.value = file.name;
        noteContent.value = event.target.result;

    }

    fileReader.readAsText(file, "UTF-8");

}
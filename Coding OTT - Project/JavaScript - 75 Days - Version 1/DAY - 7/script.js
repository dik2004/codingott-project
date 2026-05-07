function changeBg() {

    let colorInput = document.getElementById("colorInput");
    let day7Text = document.getElementById("day7Text");
    let day7Box = document.getElementById("day7Box");

    if (colorInput.value.trim() === "") {

        alert("Enter Color Name or Hex Code");

    } else {

        document.body.style.background = colorInput.value;
        day7Text.textContent = "Current Color: " + colorInput.value;
        day7Box.style.background = colorInput.value;

    }
}

function colorSelector(color) {

    let hexCode = document.getElementById("hexCode");
    let day8Box = document.getElementById("day8Box");

    hexCode.textContent = "Hex Code: " + color;
    day8Box.style.background = color;
}
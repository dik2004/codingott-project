/* ================= TASK ================= */

let display = document.getElementById("display");
let message = document.getElementById("message");

function appendValue(value) {

    display.value += value;
    message.innerText = "";

}

function clearAll() {

    display.value = "";
    message.innerText = "";

}

function deleteLast() {

    display.value = display.value.slice(0, -1);
    message.innerText = "";

}

function calculateResult() {

    let expression = display.value;

    try {

        if (expression.trim() === "") {

            display.value = "";
            message.innerText = "Enter a value first!";
            return;

        } else {

            let output = eval(expression);
            display.value = output;
            checkEvenOdd(output);

        }

    } catch (error) {

        display.value = "";
        message.innerText = "Invalid Expression!";

    }
}

function checkEvenOdd(value) {

    if (!Number.isInteger(value)) {

        message.innerText = `${value} is Decimal (Not Even/Odd)`;
        return;

    };

    if (value % 2 === 0) {

        message.innerText = `This ${value} is an Even Number`;

    } else {

        message.innerText = `This ${value} is an Odd Number`;

    };
}
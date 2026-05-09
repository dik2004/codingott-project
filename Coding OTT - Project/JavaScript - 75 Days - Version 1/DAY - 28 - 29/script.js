/* ================= TASK ================= */

let displayArea = document.getElementById("displayArea");

let listCounter = 1;
let paraCounter = 1;
let headingCounter = 1;
let currentList = null;

document.getElementById("addH1").addEventListener("click", () => {

    createHeading(1);

});

document.getElementById("addH2").addEventListener("click", () => {

    createHeading(2)

});

document.getElementById("addH3").addEventListener("click", () => {

    createHeading(3)

});

document.getElementById("addH4").addEventListener("click", () => {

    createHeading(4)

});

document.getElementById("addH5").addEventListener("click", () => {

    createHeading(5)

});

document.getElementById("addH6").addEventListener("click", () => {

    createHeading(6)

});

function createHeading(lvl) {

    let heading = document.createElement(`H${lvl}`);
    heading.innerText = `This is Heading H${lvl} (${headingCounter})`;
    displayArea.appendChild(heading);

    headingCounter++;

}

document.getElementById("addPara").addEventListener("click", createParagraph);

function createParagraph() {

    let paragraph = document.createElement("P");
    paragraph.innerText = `This is a dynamically generated paragraph (${paraCounter}).`;
    displayArea.appendChild(paragraph);

    paraCounter++;
}

document.getElementById("addOL").addEventListener("click", createOrderedList);

function createOrderedList() {

    let orderList = document.createElement("OL");

    let listItem1 = document.createElement("LI");
    listItem1.innerText = "This Is Order List Item 1";

    let listItem2 = document.createElement("LI");
    listItem2.innerText = "This Is Order List Item 2";

    orderList.appendChild(listItem1);
    orderList.appendChild(listItem2);
    displayArea.appendChild(orderList);

    currentList = orderList;
    listCounter = 3;

}

document.getElementById("addUL").addEventListener("click", createUnorderedList);

function createUnorderedList() {

    let unOrderList = document.createElement("UL");

    let listItem1 = document.createElement("LI");
    listItem1.innerText = "This Is Unorder List Item 1";

    let listItem2 = document.createElement("LI");
    listItem2.innerText = "This Is Unorder List Item 2";

    unOrderList.appendChild(listItem1);
    unOrderList.appendChild(listItem2);
    displayArea.appendChild(unOrderList);

    currentList = unOrderList;
    listCounter = 3;

}

document.getElementById("addLI").addEventListener("click", addListItem);

function addListItem() {

    if (currentList === null) {

        alert("First Create Orderlist or Unorderlist");
        return;

    }

    let listItem = document.createElement("LI");
    listItem.innerText = `Dynamic List Item ${listCounter}`;
    currentList.appendChild(listItem);

    listCounter++;
}

document.getElementById("clearAll").addEventListener("click", clearAllElements);

function clearAllElements() {

    displayArea.innerHTML = "";
    currentList = null;
    listCounter = 1;
    paraCounter = 1;
    headingCounter = 1;

}
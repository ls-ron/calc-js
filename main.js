let isOperator = false;
let buttonPress = document.querySelectorAll(".input");

function updateOutput() {
    let outputDiv = document.getElementById('evaluate');
    let text = document.createTextNode(buttonPress);
    outputDiv.appendChild(text);
}

const numberClass = document.querySelectorAll('.number');
numberClass.forEach(item => {
    item.addEventListener("click", numberPress);
});

function numberPress(event) {
    let outputDiv = document.getElementById("evaluate");
    if (isOperator) {
        outputDiv.innerText = "";
    }
    let num = event.target.innerText;
    if (outputDiv.innerText.length < 15) {
        outputDiv.innerText += num;
        isOperator = false;
    }
}

const operatorClass = document.querySelectorAll('.operator');
operatorClass.forEach(item => {
    item.addEventListener("click", operatorPress);
});

function operatorPress(event) {
    isOperator = true;
    const operator = event.target.innerText;
    let outputDiv = document.getElementById("evaluate");
}

let isOperator = false;
const buttonPress = document.querySelectorAll(".input");
let previousValue = null;
let currentOperator = '';
let currentValue = '';

const numberClass = document.querySelectorAll('.number');
numberClass.forEach(item => {
    item.addEventListener("click", numberPress);
});

function numberPress(event) {
    let outputDiv = document.getElementById("evaluate");
    if (isOperator) {
        previousValue = outputDiv.innerText
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
    if (isOperator) return; 
    isOperator = true;
    currentOperator = event.target.innerText;
}

const equal = document.getElementById('equal')
equal.addEventListener('click', evaluate)

function evaluate() {
    let outputDiv = document.getElementById('evaluate')
    currentValue = outputDiv.innerText
    if (currentOperator === '*') {
        outputDiv.innerText = multiplication(parseInt(previousValue), parseInt(currentValue))
    } else if (currentOperator === '/') {
        outputDiv.innerText = division(parseInt(previousValue), parseInt(currentValue))
    } else if (currentOperator === '+') {
        outputDiv.innerText = addition(parseInt(previousValue), parseInt(currentValue))
    } else {
        outputDiv.innerText = subtraction(parseInt(previousValue), parseInt(currentValue))
    }
    previousValue = null;
    currentValue = '';
}

function multiplication(x, y) {
    return x * y
}

function division(x, y) {
    if (y === 0) {
        alert("Cannot divide by zero");
        return "";
    }
    return x / y
}

function addition(x, y) {
    return x + y
}

function subtraction(x, y) {
    return x - y
}

const allClear = document.getElementById('clear')
allClear.addEventListener('click', allClearPress)

function allClearPress() {
    let outputDiv = document.getElementById('evaluate');
    outputDiv.innerText = ''
    previousValue = null; 
    currentOperator = '';
    currentValue = '';
}

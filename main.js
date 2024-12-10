let isOperator = false;
let buttonPress = document.querySelectorAll(".input")

function updateOutput() {
    let outputDiv = document.getElementById('evaluate')
    let text = document.createTextNode(buttonPress)
    outputDiv.appendChild(text)
}

const numberClass = document.querySelectorAll('.number')
numberClass.forEach(item => {
    
});(item => {
    item.addeventlistener("click", numberPress)
    }
    
    function numberPress(event) {
    outputDiv = document.getElementById("evaluate");
    if (isOperator) {
    outputDiv.innerText = ""}
    num = document.getElementById(event).innerText;
    outputDiv = document.getElementById("evaluate");
    outputDiv.innerText += num;
    }
    
    for each operatorClass(item => {
    item.addeventlistener("click", operatorPress);
    }
    
    function operatorPress(event) {
    isOperator = true;
    const operator = document.getElementById("event");
    }
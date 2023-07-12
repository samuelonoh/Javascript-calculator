let evaluate = document.getElementById("evaluate")
let result = document.getElementById("result")
let calSpace = document.querySelector('.display')
let calButton = document.querySelector('.buttons')
let calculator = document.querySelector('.calculator')
let buttons = document.querySelectorAll('button')
let btn = document.querySelector('grid')
let history = document.querySelector(".history")
let calHis = document.getElementById('calHis')
let displayTop = document.querySelector('.display-top')


function display(value) {
    if (evaluate.innerText === "0") {
        evaluate.innerText = "";
    }
    evaluate.innerText += value;
}

function returnToZero() {
    evaluate.innerText = "0";
    result.innerText = "";
}

function del() {
    let str = evaluate.innerText.split("");
    str.pop();
    evaluate.innerText = str.join("");
}

function displayResult() {
    let eva = evaluate.innerText;
    let res = eval(eva);
    result.innerText = res;
    let historyDiv = document.createElement("div");
    let calHistory = document.createElement("h2");
    let resultHistory = document.createElement("h2");
    historyDiv.appendChild(calHistory);
    historyDiv.appendChild(resultHistory);
    calHis.appendChild(historyDiv);
    calHistory.innerText = eva;
    resultHistory.innerText = res;
};


function darkMode() {
    calSpace.style.background = "#36474f";
    calSpace.style.color = "#f2f6f7";
    calButton.style.background = "#18212a";
    history.style.color = "#f2f6f7";
    history.style.background = "#36474f";
    for (const button of buttons) {
        button.style.color = "#f2f6f7";
    }
}

function lightMode() {
    calSpace.style.background = "#ffffff";
    calSpace.style.color = "#273238";
    calButton.style.background = "#f3f3f3";
    history.style.color = "#36474f";
    history.style.background = "#f2f6f7";
    for (const button of buttons) {
        button.style.color = "#3c3c3c";
    }
}

function displayHistory() {
    history.style.height = "74vh";
    history.style.display = "flex";
    history.style.width = "100%";
   displayTop.style.display = "none"; 
   exits.style.color = "#36474f";
}

function closeHistory() {
    history.style.height = "auto";
    history.style.display = "none";
    displayTop.style.display = "flex";
    history.style.color = "#f2f6f7";
}

function clearHistory() {
    calHis.innerHtml = "";
}
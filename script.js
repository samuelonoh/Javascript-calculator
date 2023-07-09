let evaluate = document.getElementById("evaluate")
let result = document.getElementById("result")

function display(value) {
    evaluate.innerText += value;
}

function returnToZero() {
    evaluate.innerText = "0";
    result.innerText = "";
}

function del(){
    let str = evaluate.innerText.split("");
    str.pop();
    evaluate.innerText = str.join("");
}

function displayResult() {
    let eva = evaluate.innerText;
    let res = eval(eva);
    result.innerText = res;
};

function displayModal() {
    Modal.style.display = "block";
}
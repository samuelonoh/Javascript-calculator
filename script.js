let evaluate = document.getElementById("evaluate")
let result = document.getElementById("result")

function display(value) {
    evaluate.innerText += value;
}

function returnTozero() {
    evaluate.innerText = "0";
    result.innerText = "";
}

function del(){
    let str = evaluate.innerText.split("");
    str.pop();
    evaluate.innerText = str.join("");
}

function resul() {
    let eva = evaluate.innerText;
    let res = eval(eva);
    result.innerText = res;
};

function displayModal() {
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}
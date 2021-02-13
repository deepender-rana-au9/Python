let firstNumber;

let secondNumber;

window.onload = function () {
  document.getElementById("sum").addEventListener("click", playSum);
  document.getElementById("sub").addEventListener("click", playMinus);
  document.getElementById("multi").addEventListener("click", playMulti);
  document.getElementById("div").addEventListener("click", playDiv);
  document.getElementById("clear").addEventListener("click", allclear);
};

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function div(a, b) {
  return Math.round(a / b);
}

function playSum() {
  firstNumber = document.getElementById("firstInput").value;
  secondNumber = document.getElementById("secondInput").value;

  if (firstNumber === "") {
    document.getElementById("firstInput").placeholder = "0 is considered";
  }
  if (secondNumber === "") {
    document.getElementById("secondInput").placeholder = "0 is considered";
  }
  console.log(firstNumber);
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  let total = sum(firstNumber, secondNumber);
  console.log(total);
  document.getElementById("output").innerHTML = `<h1> ${total} </h1>`;
}

function playMinus() {
  firstNumber = document.getElementById("firstInput").value;
  secondNumber = document.getElementById("secondInput").value;
  if (firstNumber === "") {
    document.getElementById("firstInput").placeholder = "0 is considered";
  }
  if (secondNumber === "") {
    document.getElementById("secondInput").placeholder = "0 is considered";
  }
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  let total = sub(firstNumber, secondNumber);
  document.getElementById("output").innerHTML = `<h1> ${total} </h1>`;
}

function playMulti() {
  firstNumber = document.getElementById("firstInput").value;
  secondNumber = document.getElementById("secondInput").value;
  if (firstNumber === "") {
    document.getElementById("firstInput").placeholder = "0 is considered";
  }
  if (secondNumber === "") {
    document.getElementById("secondInput").placeholder = "0 is considered";
  }
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  let total = multi(firstNumber, secondNumber);
  document.getElementById("output").innerHTML = `<h1> ${total} </h1>`;
}

function playDiv() {
  firstNumber = document.getElementById("firstInput").value;
  secondNumber = document.getElementById("secondInput").value;
  if (firstNumber === "") {
    document.getElementById("firstInput").placeholder = "0 is considered";
  }
  if (secondNumber === "") {
    document.getElementById("secondInput").placeholder = "0 is considered";
  }
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  let total = div(firstNumber, secondNumber);
  document.getElementById("output").innerHTML = `<h1> ${total} </h1>`;
}

function allclear() {
  document.getElementById("firstInput").value = "";
  document.getElementById("secondInput").value = "";
  document.getElementById("output").innerHTML = `<h1>  </h1>`;
  document.getElementById("firstInput").placeholder = "enter first number";
  document.getElementById("secondInput").placeholder = "enter second number";
}

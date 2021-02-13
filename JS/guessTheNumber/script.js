let guess = [];
let correctNumber = getRandomNumber();

window.onload = function () {
  console.log(correctNumber);
  document.getElementById("btn-submit").addEventListener("click", playgame);
  document.getElementById("btn-restart").addEventListener("click", initGame);
};

function playgame(randomNumber) {
  let number = document.getElementById("number-guess").value;
  number = Number(number);
  document.getElementById("number-guess").value = "";
  document.getElementById("number-guess").placeholder = "type here";

  saveGuessHistory(number, guess);
  displayResult(number);
  displayHistory();
}

function displayResult(number) {
  if (number === 0) {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerText = "Enter something ";
    document.getElementById("result").style.background = "rgb(184, 58, 58)";
  } else if (number === correctNumber) {
    document.getElementById("result").style.display = "block";
    showYouWon();
  } else if (number > correctNumber) {
    document.getElementById("result").style.display = "block";
    tooHigh();
  } else {
    document.getElementById("result").style.display = "block";
    tooLow();
  }
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  document.getElementById("result").innerText = text;
  document.getElementById("result").style.background = "rgb(72, 189, 72)";
  counter = 0;
}

function tooHigh() {
  const text = "Ohh! too high";
  document.getElementById("result").innerText = text;
  document.getElementById("result").style.background = "rgb(184, 58, 58)";
}

function tooLow() {
  const text = "Ohh! too Low";
  document.getElementById("result").innerText = text;
  document.getElementById("result").style.background = "rgb(184, 58, 58)";
}

function saveGuessHistory(number, guess) {
  guess.push(number);
}

function displayHistory() {
  let index = guess.length - 1;
  let list = "<ul class='list'>";
  while (index > -1) {
    list += "<li>" + "You guessed " + guess[index] + "</li>";
    index--;
  }

  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

function initGame() {
  document.getElementById("number-guess").value = "";
  correctNumber = getRandomNumber();
  console.log(correctNumber);
  guess = [];
  displayHistory();
}

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  return randomNumber;
}

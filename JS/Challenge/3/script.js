const rpsGame = (yourChoice) => {
  //   console.log(yourChoice.src);
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  //   console.log("human", humanChoice);
  botChoiceNumber = randomToInt();
  botChoice = numberToChoice(botChoiceNumber);
  //   console.log("bot", botChoice);
  let result = decideWinner(humanChoice, botChoice);
  //   console.log(result);
  let message = finalMessage(result);
  //   console.log(message);
  rpsFrontEnd(humanChoice, botChoice, message);
};

function decideWinner(humanChoice, botChoice) {
  let rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  let yourScore = rpsDatabase[humanChoice][botChoice];
  let computerScore = rpsDatabase[botChoice][humanChoice];

  return [yourScore, computerScore];
}

function finalMessage([humanScore, botScore]) {
  if (humanScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (humanScore === 0.5) {
    return { message: "You tied!", color: "yellow" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}

function randomToInt() {
  return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  let imagesData = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humanDiv.innerHTML = `<img src=${imagesData[humanImageChoice]} width="150px" height="150px" style='box-shadow: 0px 18px 50px ${finalMessage.color}'/> `;
  botDiv.innerHTML = `<img src=${imagesData[botImageChoice]} width="150px" height="150px" style='box-shadow: 0px 18px 50px ${finalMessage.color}'/}>`;
  messageDiv.innerHTML = `<h2 style='color:${finalMessage.color}';>${finalMessage.message}</h2> `;
  document.querySelector(".main").appendChild(humanDiv);
  document.querySelector(".main").appendChild(messageDiv);

  document.querySelector(".main").appendChild(botDiv);
}

const reset = () => {
  location.reload();
};

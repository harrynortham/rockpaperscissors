let humanScore = 0;
let computerScore = 0;

// use math random Math.random()
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// write a function to return randomnly a string “rock”, “paper” or “scissors” for the computer
function getComputerChoice() {
  const randomNumber = getRandomInt(3);
  let computerChoice;

  if (randomNumber == 0) {
    computerChoice = "rock";
  } else if (randomNumber == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

// write a function to get the human choice using prompt method

// function getHumanChoice() {
//   let humanChoice = prompt(
//     "Do you choose Rock, Paper or Scissors?",
//     ""
//   ).toLowerCase();

//   return humanChoice;
// }

// write function for the play round which will compare human and computer choice and update the variables

function playRound(humanChoice, computerChoice) {
  // use a switch statement to compare each of the possibilites and update the score variables
  if (humanChoice == "rock" && computerChoice == "rock") {
    return "draw";
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    return "draw";
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    return "draw";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    return "win";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    return "win";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return "win";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    return "lose";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    return "lose";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    return "lose";
  }
}

function updateScore() {
  document.getElementById("score--human").textContent = humanScore;
  document.getElementById("score--computer").textContent = computerScore;
}

function playGame(humanChoice) {
  let round = playRound(humanChoice, getComputerChoice());
  if (round == "win") {
    humanScore++;
    updateScore();
  } else {
    computerScore++;
    updateScore();
  }
}

let buttons = document.getElementById("buttons");

buttons.addEventListener("click", (e) => {
  //console.log(e.target.id);

  switch (e.target.id) {
    case "button--rock":
      playGame("rock");
      break;
    case "button--paper":
      playGame("paper");
      break;
    case "button--scissors":
      playGame("scissors");
  }
});

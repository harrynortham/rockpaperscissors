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

function getHumanChoice() {
  let humanChoice = prompt(
    "Do you choose Rock, Paper or Scissors?",
    ""
  ).toLowerCase();

  return humanChoice;
}

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let round = playRound(getHumanChoice(), getComputerChoice());
    if (round == "win") {
      humanScore++;
      alert("You win");
    } else {
      computerScore++;
      alert("You lose");
    }
  }
}

playGame();

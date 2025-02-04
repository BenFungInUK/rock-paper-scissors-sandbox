const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  playButton.disabled = true;
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  runAnimations(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  // TODO Implement this method to update the DOM
  // There are some images you can use in the images directory
  document.getElementById(
    "player-one-move__img"
  ).src = `./images/${moveOne}.png`;
  document.getElementById(
    "player-two-move__img"
  ).src = `./images/${moveTwo}.png`;
  const result = document.createElement("div");
  result.id = "outcome";
  result.textContent = outcome;
  document.body.appendChild(result);
  playButton.disabled = false;
};

const runAnimations = (moveOne, moveTwo, outcome) => {
  const anim = setInterval(() => {
    document.getElementById(
      "player-one-move__img"
    ).src = `./images/${getRandomMove()}.png`;
    document.getElementById(
      "player-two-move__img"
    ).src = `./images/${getRandomMove()}.png`;
  }, 200);
  setTimeout(() => {
    clearInterval(anim);
    updateDOM(moveOne, moveTwo, outcome);
  }, 2000);
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);

import Game from "./Game";

let newGame;
let stage;
window.init = () => {
  stage = new createjs.Stage("tetris");
  newGame = new Game(stage, document);
  newGame.startGame();
  const background = new createjs.Shape();
  background.graphics.beginFill("#000000").drawRect(0, 0, 300, 600);
  stage.addChild(background);
  newGame.updateGrid();
  newGame.render();

  // show the score
  newGame.calculateScore();
  const scoreHeader = document.createElement("h1");
  const scoreMessage = document.createTextNode(
    `Score: ${newGame.currentScore}`
  );
  scoreHeader.appendChild(scoreMessage);
  document.body.appendChild(scoreHeader);

  // pause the game
  const pauseButton = document.createElement("button");
  pauseButton.innerHTML = "PAUSE GAME";
  pauseButton.addEventListener("click", () => newGame.pauseGame());
  document.body.appendChild(pauseButton);

  // handle a key press
  if (!newGame.gameOver || !newGame.gamePaused)
    document.addEventListener("keydown", (e) => newGame.handleKeyPress(e));

  console.log(newGame);
};

window.onload = init;

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

  // pause the game
  const instructionsBox = document.getElementById("instructions");
  const pauseButton = document.createElement("button");
  pauseButton.innerHTML = "PAUSE GAME";
  pauseButton.addEventListener("click", () => newGame.pauseGame());
  instructionsBox.appendChild(pauseButton);

  // handle a key press
  if (!newGame.gameOver || !newGame.gamePaused)
    document.addEventListener("keydown", (e) => newGame.handleKeyPress(e));

  console.log(newGame);
};

window.onload = init;

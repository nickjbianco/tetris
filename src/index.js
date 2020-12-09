import Game from "./Game";

let newGame;
let stage;
const init = () => {
  stage = new createjs.Stage("tetris");
  newGame = new Game(stage, document);
  newGame.startGame();
  const background = new createjs.Shape();
  background.graphics.beginFill("#000000").drawRect(0, 0, 300, 600);
  stage.addChild(background);
  newGame.updateGrid();
  newGame.render();
  newGame.calculateScore();
  const scoreHeader = document.createElement("h1");
  const scoreMessage = document.createTextNode(
    `Score: ${newGame.currentScore}`
  );
  scoreHeader.appendChild(scoreMessage);
  document.body.appendChild(scoreHeader);

  const pauseButton = document.createElement("button");
  pauseButton.innerHTML = "PAUSE GAME";
  pauseButton.addEventListener("click", () => {
    newGame.pauseGame();
  });
  document.body.appendChild(pauseButton);

  console.log(newGame);
};

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (newGame.gameOver) newGame.restartGame(document, init);
  newGame.executeMove(e);
});

window.onload = init;

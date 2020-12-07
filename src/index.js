import Game from "./Game";

let newGame;
let stage;
const init = () => {
  stage = new createjs.Stage("tetris");
  newGame = new Game(stage);
  newGame.startGame();
  const background = new createjs.Shape();
  background.graphics.beginFill("#000000").drawRect(0, 0, 300, 600);
  stage.addChild(background);
  newGame.updateGrid();
  newGame.render();
  newGame.currentPieceDefaultMove(document, init);
  newGame.calculateScore();
  newGame.restartGame(document, init);
  const scoreHeader = document.createElement("h1");
  const scoreMessage = document.createTextNode(
    `Score: ${newGame.currentScore}`
  );
  scoreHeader.appendChild(scoreMessage);
  document.body.appendChild(scoreHeader);
  console.log(newGame);
};

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (!newGame.gameOver) {
    newGame.executeMove(e);
    newGame.handleCurrentPieceStuck();
    newGame.checkGameOver();
  } else {
    newGame.restartGame(document, init);
  }
});

window.onload = init;

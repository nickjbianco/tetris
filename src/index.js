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
  newGame.currentPieceDefaultMove();
  newGame.calculateScore();
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

  if (newGame.gameOver) {
    const header = document.createElement("h1");
    const gameOverMessage = document.createTextNode("GAME OVER");
    header.appendChild(gameOverMessage);
    document.body.appendChild(header);

    const button = document.createElement("button");
    button.innerHTML = "RESTART GAME";
    button.addEventListener("click", () => {
      init();
      header.removeChild(gameOverMessage);
      document.body.removeChild(button);
    });
    document.body.appendChild(button);
    return;
  }

  newGame.executeMove(e);
  newGame.handleCurrentPieceStuck();
  newGame.checkGameOver();
});

window.onload = init;

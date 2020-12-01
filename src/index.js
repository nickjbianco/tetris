import OTetromino from "./OTetromino";
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
  console.log(newGame);
};

const currentPieceDefaultMove = () => {
  setInterval(() => {
    if (newGame.currentPiece.validMoveDown(newGame.gameBoard)) {
      newGame.clearOldTetrominoPosition();
      newGame.currentPiece.moveDown();
      newGame.updateGrid();
      newGame.render();
    }
  }, 500);
};

currentPieceDefaultMove();

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

  if (e.keyCode === 39 && newGame.currentPiece.validMoveRight()) {
    newGame.clearOldTetrominoPosition();
    newGame.currentPiece.moveRight();
  } else if (e.keyCode === 37 && newGame.currentPiece.validMoveLeft()) {
    newGame.clearOldTetrominoPosition();
    newGame.currentPiece.moveLeft();
  } else if (
    e.keyCode === 40 &&
    newGame.currentPiece.validMoveDown(newGame.gameBoard)
  ) {
    newGame.clearOldTetrominoPosition();
    newGame.currentPiece.moveDown();
  }

  newGame.updateGrid();
  newGame.render();

  if (newGame.isCurrentPieceStuck()) {
    const completedRows = newGame.calculateCompletedRows();
    if (completedRows.length > 0) {
      newGame.droppedPieces.forEach((droppedPiece) => {
        droppedPiece.clearCoordinates(completedRows);
      });
      newGame.clearGameBoardRows(completedRows);
    }

    newGame.createNewPiece();
    newGame.updateGrid();
    setTimeout(() => {
      newGame.render();
    }, 300);
    console.log(newGame);
  }

  newGame.checkGameOver();
});

window.onload = init;

import OTetromino from "./OTetromino";
import Game from "./Game";

const stage = new createjs.Stage("tetris");
const newGame = new Game(stage);
newGame.startGame();

const clearOldTetrominoPosition = () => {
  newGame.currentPiece.coordinates.forEach((coordinate) => {
    const { row, column } = coordinate;
    newGame.gameBoard[row][column] = "black";
  });
};

const init = () => {
  const background = new createjs.Shape();
  background.graphics.beginFill("#000000").drawRect(0, 0, 300, 600);
  stage.addChild(background);
  newGame.updateGrid();
  newGame.render();
  console.log(newGame);
};

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  if (e.keyCode === 39 && newGame.currentPiece.validMoveRight()) {
    clearOldTetrominoPosition();
    newGame.currentPiece.moveRight();
  } else if (e.keyCode === 37 && newGame.currentPiece.validMoveLeft()) {
    clearOldTetrominoPosition();
    newGame.currentPiece.moveLeft();
  } else if (
    e.keyCode === 40 &&
    newGame.currentPiece.validMoveDown(newGame.gameBoard)
  ) {
    clearOldTetrominoPosition();
    newGame.currentPiece.moveDown();
  }

  newGame.updateGrid();
  newGame.render();
  if (newGame.isCurrentPieceStuck(newGame.gameBoard)) {
    const completedRows = newGame.calculateCompletedRows();
    if (completedRows.length > 0) {
      newGame.droppedPieces.forEach((droppedPiece) => {
        droppedPiece.clearCoordinates(completedRows);
      });
      newGame.clearGameBoardRows(completedRows);
    }
    newGame.createNewPiece();
    newGame.updateGrid();
    newGame.render();
    console.log(newGame);
  }
});

window.onload = init;

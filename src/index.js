import OTetromino from "./OTetromino";
import Game from "./Game";

const newGame = new Game();
newGame.startGame();
const stage = new createjs.Stage("tetris");

// JS 'backend' logic
const updateGrid = () => {
  newGame.currentPiece.coordinates.forEach((coordinate) => {
    const { row, column } = coordinate;
    newGame.gameBoard[row][column] = newGame.currentPiece.color;
  });
};

const clearOldTetrominoPosition = () => {
  newGame.currentPiece.coordinates.forEach((coordinate) => {
    const { row, column } = coordinate;
    newGame.gameBoard[row][column] = "black";
  });
};

// Easel 'frontend' logic
const render = () => {
  newGame.gameBoard.forEach((boardRow, boardRowIdx) => {
    boardRow.forEach((cell, cellIdx) => {
      const singleCell = new createjs.Shape();
      singleCell.graphics
        .beginFill(cell)
        .drawRect(cellIdx * 30, boardRowIdx * 30, 30, 30);
      stage.addChild(singleCell);
    });
  });
  stage.update();
};

const init = () => {
  const background = new createjs.Shape();
  background.graphics.beginFill("#000000").drawRect(0, 0, 300, 600);
  stage.addChild(background);
  updateGrid();
  render();
};

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  switch (e.keyCode) {
    case 37:
      clearOldTetrominoPosition();
      newGame.currentPiece.moveLeft();
      break;

    case 39:
      clearOldTetrominoPosition();
      newGame.currentPiece.moveRight();
      break;

    case 40:
      clearOldTetrominoPosition();
      newGame.currentPiece.moveDown();
      break;
  }

  updateGrid();
  render();
});

window.onload = init;

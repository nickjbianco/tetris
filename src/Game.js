import OTetromino from "./OTetromino";

export default class Game {
  constructor(stage) {
    const gameBoard = [];
    for (let i = 0; i < 20; i++) {
      const boardRow = [];
      for (let j = 0; j < 10; j++) {
        boardRow.push("black");
      }
      gameBoard.push(boardRow);
    }
    this.gameBoard = gameBoard;
    this.currentPiece = null;
    this.droppedPieces = [];
    this.stage = stage;
  }

  render() {
    this.stage.removeAllChildren();
    this.gameBoard.forEach((boardRow, boardRowIdx) => {
      boardRow.forEach((cell, cellIdx) => {
        const singleCell = new createjs.Shape();
        singleCell.graphics
          .beginFill(cell)
          .drawRect(cellIdx * 30, boardRowIdx * 30, 30, 30);
        this.stage.addChild(singleCell);
      });
    });
    this.stage.update();
  }

  updateGrid() {
    this.currentPiece.coordinates.forEach((coordinate) => {
      const { row, column } = coordinate;
      this.gameBoard[row][column] = this.currentPiece.color;
    });
  }

  startGame() {
    this.createNewPiece();
  }

  isCurrentPieceStuck(gameBoard) {
    return !this.currentPiece.validMoveDown(gameBoard);
  }

  createNewPiece() {
    const newShape = new OTetromino();
    this.currentPiece = newShape;
    this.droppedPieces.push(newShape);
  }

  calculateCompletedRows() {
    const fullRows = [];
    this.gameBoard.forEach((row, idx) => {
      const fullRow = row.every((cell) => cell !== "black");
      if (fullRow) {
        fullRows.push(idx);
      }
    });
    return fullRows;
  }

  clearGameBoardRows(gameBoardRowIndices) {
    gameBoardRowIndices.forEach((rowIdx) => {
      this.gameBoard[rowIdx] = new Array(10).fill("black");
    });
  }
}

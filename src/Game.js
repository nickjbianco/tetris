import OTetromino from "./OTetromino";

export default class Game {
  constructor() {
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
  }

  startGame() {
    const newShape = new OTetromino();
    this.currentPiece = newShape;
    this.droppedPieces.push(newShape);
  }
}

import OTetromino from "./tetrominos/OTetromino";
import ITetromino from "./tetrominos/ITetromino";
import LTetromino from "./tetrominos/LTetromino";
import JTetromino from "./tetrominos/JTetromino";
import TTetromino from "./tetrominos/TTetromino";
import ZTetromino from "./tetrominos/ZTetromino";
import STetromino from "./tetrominos/STetromino";

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
    this.document = document;
    this.gamePaused = false;
    this.gameBoard = gameBoard;
    this.currentPiece = null;
    this.droppedPieces = [];
    this.stage = stage;
    this.gameOver = false;
    this.currentScore = 0;
    this.interval = setInterval(() => this.currentPieceDefaultMove(), 500);
    this.allPieces = [
      OTetromino,
      ITetromino,
      LTetromino,
      JTetromino,
      TTetromino,
      ZTetromino,
      STetromino,
    ];
  }

  currentPieceDefaultMove() {
    if (this.isCurrentPieceStuck()) this.checkGameOver();
    if (this.isCurrentPieceStuck() && this.gameOver) this.restartGame(document);

    if (!this.isCurrentPieceStuck() && !this.gameOver) {
      this.clearOldTetrominoPosition();
      this.currentPiece.moveDown();
      this.updateGrid();
      this.render();
    } else {
      this.handleCurrentPieceStuck();
    }
  }

  pauseGame() {
    if (!this.gamePaused) {
      clearInterval(this.interval);
      this.gamePaused = true;
    } else {
      this.interval = setInterval(() => this.currentPieceDefaultMove(), 500);
      this.gamePaused = false;
    }
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

  isCurrentPieceStuck() {
    return !this.currentPiece.validMoveDown(this.gameBoard);
  }

  createNewPiece() {
    // Full Game
    const randomNum = Math.floor(Math.random() * this.allPieces.length);
    const randomShape = this.allPieces[randomNum];
    this.currentPiece = new randomShape();
    this.droppedPieces.push(this.currentPiece);
  }

  calculateCompletedRows() {
    const fullRows = [];
    this.gameBoard.forEach((row, idx) => {
      const fullRow = row.every((cell) => cell !== "black");
      if (fullRow) fullRows.push(idx);
    });
    return fullRows;
  }

  calculateScore() {
    // Each line cleared is 100 points, except if you clear 4 at once,
    // That is called a 'Tetris' in which you received 800 points.
    const fullRows = this.calculateCompletedRows();
    const numLinesCleared = fullRows.length;
    const numPoints =
      numLinesCleared < 4 ? numLinesCleared * 100 : numLinesCleared * 200;
    this.currentScore += numPoints;
  }

  clearGameBoardRows(gameBoardRowIndices) {
    this.droppedPieces.forEach((droppedPiece) => {
      const clearedCoordinates = droppedPiece.clearCoordinates(
        gameBoardRowIndices
      );

      clearedCoordinates.forEach((coordinate) => {
        const { row, column } = coordinate;
        this.gameBoard[row][column] = "black";
      });

      while (droppedPiece.validMoveDownAfterRowClear(this.gameBoard)) {
        droppedPiece.coordinates.forEach((coordinate) => {
          const { row, column } = coordinate;
          this.gameBoard[row][column] = "black";
        });
        droppedPiece.moveDown();
        droppedPiece.coordinates.forEach((coordinate) => {
          const { row, column } = coordinate;
          this.gameBoard[row][column] = droppedPiece.color;
        });
      }
    });
  }

  clearOldTetrominoPosition() {
    this.currentPiece.coordinates.forEach((coordinate) => {
      const { row, column } = coordinate;
      this.gameBoard[row][column] = "black";
    });
  }

  checkGameOver() {
    const topSideCoordinates = this.currentPiece.coordinates.filter(
      (coordinate) => coordinate.side.includes("top")
    );

    for (let i = 0; i < topSideCoordinates.length; i++) {
      const topSideCoordinate = topSideCoordinates[i];
      const { row } = topSideCoordinate;
      if (row === 0) {
        this.gameOver = true;
        this.pauseGame();
        break;
      }
    }
  }

  restartGame(document) {
    if (this.gameOver) {
      this.pauseGame();
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
  }

  executeMove(e) {
    if (e.keyCode === 39 && this.currentPiece.validMoveRight(this.gameBoard)) {
      this.clearOldTetrominoPosition();
      this.currentPiece.moveRight();
    } else if (
      e.keyCode === 37 &&
      this.currentPiece.validMoveLeft(this.gameBoard)
    ) {
      this.clearOldTetrominoPosition();
      this.currentPiece.moveLeft();
    } else if (
      e.keyCode === 40 &&
      this.currentPiece.validMoveDown(this.gameBoard)
    ) {
      this.clearOldTetrominoPosition();
      this.currentPiece.moveDown();
    } else if (e.keyCode === 38) {
      this.clearOldTetrominoPosition();
      this.currentPiece.rotateRight(this.gameBoard);
    } else if (e.keyCode === 88) {
      this.clearOldTetrominoPosition();
      this.currentPiece.rotateLeft(this.gameBoard);
    }

    this.updateGrid();
    this.render();
  }

  handleCurrentPieceStuck() {
    if (!this.isCurrentPieceStuck()) return;

    const completedRows = this.calculateCompletedRows();

    if (completedRows.length > 0) {
      this.calculateScore();
      this.clearGameBoardRows(completedRows);
    }
    this.checkGameOver();
    this.createNewPiece();
    this.updateGrid();
    this.render();

    // setTimeout(() => {
    //   this.render();
    // }, 300);

    console.log(this);
  }

  handleKeyPress(e) {
    e.preventDefault();
    if (!this.gamePaused) this.executeMove(e);
  }
}

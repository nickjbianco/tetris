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
    this.gameOver = false;
    this.currentScore = 0;
    this.currentPieceDefaultMove = (document, init) => {
      setInterval(() => {
        if (!this.isCurrentPieceStuck()) {
          this.clearOldTetrominoPosition();
          this.currentPiece.moveDown();
          this.updateGrid();
          this.render();
        } else {
          this.handleCurrentPieceStuck();
          this.checkGameOver();
          this.restartGame(document, init); // only runs when game is over
        }
      }, 500);
    };
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
    gameBoardRowIndices.forEach((rowIdx) => {
      this.gameBoard[rowIdx] = new Array(10).fill("black");
    });

    if (this.droppedPieces.length > 0) {
      this.droppedPieces.forEach((droppedPiece) => {
        const bottomSidePieces = droppedPiece.filter(
          (piece) => piece.side === "bottom"
        );

        bottomSidePieces.forEach((bottomSidePiece) => {
          if (bottomSidePiece.validMoveDown()) bottomSidePiece.moveDown();
        });
      });
    }
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
    topSideCoordinates.forEach((topSideCoordinate) => {
      const { row } = topSideCoordinate;
      if (this.isCurrentPieceStuck() && row === 0) {
        this.gameOver = true;
      }
    });
  }

  restartGame(document, init) {
    if (this.gameOver) {
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

  currentPieceDefaultMove(document, init) {
    setInterval(() => {
      if (!this.isCurrentPieceStuck()) {
        this.clearOldTetrominoPosition();
        this.currentPiece.moveDown();
        this.updateGrid();
        this.render();
      } else {
        this.handleCurrentPieceStuck();
        this.checkGameOver();
        this.restartGame(document, init); // only runs when game is over
      }
    }, 500);
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
    }

    this.updateGrid();
    this.render();
  }

  handleCurrentPieceStuck() {
    if (this.isCurrentPieceStuck()) {
      const completedRows = this.calculateCompletedRows();
      if (completedRows.length > 0) {
        this.droppedPieces.forEach((droppedPiece) => {
          droppedPiece.clearCoordinates(completedRows);
        });
        // move pieces down
        this.calculateScore();
        this.clearGameBoardRows(completedRows);
      }

      this.createNewPiece();
      this.updateGrid();
      setTimeout(() => {
        this.render();
      }, 300);
      console.log(this);
    }
  }

  adjustPiecesAfterRowClear() {
    this.droppedPieces.forEach((droppedPiece) => {
      if (droppedPiece.validMoveDown(this.gameBoard)) {
        droppedPiece.moveDown();
      }
    });
  }
}

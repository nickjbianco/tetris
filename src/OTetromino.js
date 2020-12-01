export default class OTetromino {
  constructor() {
    this.coordinates = [
      { row: 0, column: 4, side: ["top", "left"] },
      { row: 0, column: 5, side: ["top", "right"] },
      { row: 1, column: 4, side: ["bottom", "left"] },
      { row: 1, column: 5, side: ["bottom", "right"] },
    ];
    this.color = "yellow";
  }

  moveDown() {
    this.coordinates.forEach((coordinate) => {
      coordinate.row++;
    });
  }

  moveRight() {
    this.coordinates.forEach((coordinate) => {
      coordinate.column++;
    });
  }

  moveLeft() {
    this.coordinates.forEach((coordinate) => {
      coordinate.column--;
    });
  }

  rotateRight() {}

  rotateLeft() {}

  validMoveRight() {
    const rightSideCoordinates = this.coordinates.filter((coordinate) =>
      coordinate.side.includes("right")
    );
    return rightSideCoordinates.every((rightSideCoordinate) => {
      const { column } = rightSideCoordinate;
      const nextGameBoardSpace = column + 1;
      return nextGameBoardSpace <= 9;
    });
  }

  validMoveLeft() {
    const leftSideCoordinates = this.coordinates.filter((coordinate) =>
      coordinate.side.includes("left")
    );
    return leftSideCoordinates.every((leftSideCoordinate) => {
      const { column } = leftSideCoordinate;
      const nextGameBoardSpace = column - 1;
      return nextGameBoardSpace >= 0;
    });
  }

  validMoveDown(gameBoard) {
    const bottomSideCoordinates = this.coordinates.filter((coordinate) =>
      coordinate.side.includes("bottom")
    );
    return bottomSideCoordinates.every((bottomSideCoordinate) => {
      const { row, column } = bottomSideCoordinate;
      const nextRowDown = row + 1;
      if (nextRowDown <= 19) {
        return gameBoard[nextRowDown][column] === "black";
      }
    });
  }

  clearCoordinates(rowIndices) {
    this.coordinates = this.coordinates.filter((coordinate) => {
      const { row } = coordinate;
      return !rowIndices.includes(row);
    });
  }
}

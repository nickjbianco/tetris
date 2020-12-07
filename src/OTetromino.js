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

  validMoveRight(gameBoard) {
    const rightSideCoordinates = this.coordinates.filter((coordinate) =>
      coordinate.side.includes("right")
    );
    return rightSideCoordinates.every((rightSideCoordinate) => {
      const { row, column } = rightSideCoordinate;
      const nextColumRight = column + 1;
      if (nextColumRight <= 9) {
        return gameBoard[row][nextColumRight] === "black";
      }
    });
  }

  validMoveLeft(gameBoard) {
    const leftSideCoordinates = this.coordinates.filter((coordinate) =>
      coordinate.side.includes("left")
    );
    return leftSideCoordinates.every((leftSideCoordinate) => {
      const { row, column } = leftSideCoordinate;
      const nextColumnLeft = column - 1;
      if (nextColumnLeft >= 0) {
        return gameBoard[row][nextColumnLeft] === "black";
      }
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

export default class BaseTetromino {
  constructor() {
    this.nextRotationLeftMove = {
      left: "bottom",
      bottom: "right",
      right: "top",
      top: "left",
    };
    this.nextRotationRightMove = {
      left: "top",
      top: "right",
      right: "bottom",
      bottom: "left",
    };
  }
  moveDown(coordinates = this.coordinates) {
    this.coordinates = coordinates.map((coordinate) => {
      const { row } = coordinate;
      return {
        ...coordinate,
        row: row + 1,
      };
    });
  }

  moveRight() {
    this.coordinates = this.coordinates.map((coordinate) => {
      const { column } = coordinate;
      return {
        ...coordinate,
        column: column + 1,
      };
    });
  }

  moveLeft() {
    this.coordinates = this.coordinates.map((coordinate) => {
      const { column } = coordinate;
      return {
        ...coordinate,
        column: column - 1,
      };
    });
  }

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

  clearCoordinates(rowIndices) {
    const clearedCoordinates = this.determineCoordinatesToClear(rowIndices);

    this.coordinates = this.coordinates.filter((coordinate) => {
      const { row } = coordinate;
      return !rowIndices.includes(row);
    });

    return clearedCoordinates;
  }

  determineCoordinatesToClear(rowIndices) {
    return this.coordinates.filter((coordinate) => {
      const { row } = coordinate;
      return rowIndices.includes(row);
    });
  }
}

import BaseTetromino from "./BaseTetromino";

export default class OTetromino extends BaseTetromino {
  constructor() {
    super();
    this.coordinates = [
      { row: 0, column: 4, side: ["top", "left"] },
      { row: 0, column: 5, side: ["top", "right"] },
      { row: 1, column: 4, side: ["bottom", "left"] },
      { row: 1, column: 5, side: ["bottom", "right"] },
    ];
    this.color = "yellow";
  }

  validMoveDownAfterRowClear(gameBoard) {
    if (this.coordinates.length === 2) {
      const anchorPiece = this.coordinates[0];
      const { row, column } = anchorPiece;
      return (
        gameBoard[row + 1][column] === "black" &&
        gameBoard[row + 1][column + 1] === "black"
      );
    } else {
      return this.validMoveDown(gameBoard);
    }
  }

  validMoveDown(gameBoard) {
    if (this.coordinates.length === 0) return false;

    const bottomSideCoordinates = this.coordinates.filter((coordinate) =>
      coordinate.side.includes("bottom")
    );

    const bottomSpaceOpen = bottomSideCoordinates.every(
      (bottomSideCoordinate) => {
        const { row, column } = bottomSideCoordinate;
        const nextRowDown = row + 1;
        if (nextRowDown <= 19) {
          return gameBoard[nextRowDown][column] === "black";
        } else {
          return false;
        }
      }
    );

    return bottomSpaceOpen;
  }

  rotateRight() {}

  rotateLeft() {}
}

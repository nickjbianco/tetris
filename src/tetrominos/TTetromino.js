import BaseTetromino from "./BaseTetromino";

export default class TTetromino extends BaseTetromino {
  constructor() {
    super();
    this.coordinates = [
      { row: 0, column: 5, side: ["top"] },
      { row: 1, column: 4, side: ["bottom", "left"] },
      { row: 1, column: 5, side: ["bottom"] },
      { row: 1, column: 6, side: ["bottom", "right"] },
    ];
    this.color = "purple";
    this.anchorPointDirection = "top";
    this.nextRotationLeftMove = {
      left: "bottom",
      bottom: "right",
      right: "top",
      top: "left",
    };
    this.nextRotationLeftMoveMethod = {
      top: this.calcRotationTopToLeft.bind(this),
      left: this.calcRotationLeftToBottom.bind(this),
      bottom: this.calcRotationBottomToRight.bind(this),
      right: this.calcRotationRightToTop.bind(this),
    };
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
        if (nextRowDown <= 19)
          return gameBoard[nextRowDown][column] === "black";
      }
    );

    if (!bottomSpaceOpen) return false;

    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    const nextAnchorPieceSpaceDown =
      anchorPiece.side.includes("left") || anchorPiece.side.includes("right")
        ? gameBoard[row + 1][column] === "black"
        : true;
    return bottomSpaceOpen && nextAnchorPieceSpaceDown;
  }

  // Rotate Left
  rotateLeft() {
    // if (!this.validRotateLeft()) return false;
    this.coordinates = this.nextRotationLeftMoveMethod[
      this.anchorPointDirection
    ]();
    this.anchorPointDirection = this.nextRotationLeftMove[
      this.anchorPointDirection
    ];
  }

  calcRotationTopToLeft() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? idx - 2 : idx;
      const adjCol = idx > 0 ? 1 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationLeftMove[direction]
        ),
        column: column + adjCol,
        row: row - adjRow,
      };
    });
  }

  calcRotationLeftToBottom() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? 1 : idx;
      const adjCol = idx > 0 ? idx - 2 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationLeftMove[direction]
        ),
        column: column - adjCol,
        row: row - adjRow,
      };
    });
  }

  calcRotationBottomToRight() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? idx - 2 : idx;
      const adjCol = idx > 0 ? 1 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationLeftMove[direction]
        ),
        column: column - adjCol,
        row: row + adjRow,
      };
    });
  }

  calcRotationRightToTop() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? 1 : idx;
      const adjCol = idx > 0 ? idx - 2 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationLeftMove[direction]
        ),
        column: column + adjCol,
        row: row + adjRow,
      };
    });
  }
}

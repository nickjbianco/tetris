import BaseTetromino from "./BaseTetromino";

export default class STetromino extends BaseTetromino {
  constructor() {
    super();
    this.coordinates = [
      { row: 0, column: 5, side: ["top"] },
      { row: 0, column: 6, side: ["top", "right"] },
      { row: 1, column: 5, side: ["bottom"] },
      { row: 1, column: 4, side: ["bottom", "left"] },
    ];
    this.color = "pink";
    this.anchorPointDirection = "top";
    this.nextRotationRightMove = {
      left: "top",
      top: "right",
      right: "bottom",
      bottom: "left",
    };
    this.nextRotationRightMoveMethod = {
      left: this.calcRotationLeftToTop.bind(this),
      top: this.calcRotationTopToRight.bind(this),
      right: this.calcRotationRightToBottom.bind(this),
      bottom: this.calcRotationBottomToLeft.bind(this),
    };
  }

  validMoveDown() {
    return true;
  }

  // Rotate Right
  rotateRight() {
    this.coordinates = this.nextRotationRightMoveMethod[
      this.anchorPointDirection
    ]();
    this.anchorPointDirection = this.nextRotationRightMove[
      this.anchorPointDirection
    ];
  }

  validRotateRight() {}

  calcRotationTopToRight() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? idx - 2 : idx;
      const adjCol = idx > 1 ? 1 : 0;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationRightMove[direction]
        ),
        column: column - adjCol,
        row: row - adjRow,
      };
    });
  }

  calcRotationRightToBottom() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 1 ? 1 : 0;
      const adjCol = idx > 0 ? idx - 2 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationRightMove[direction]
        ),
        column: column + adjCol,
        row: row - adjRow,
      };
    });
  }

  calcRotationBottomToLeft() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? idx - 2 : idx;
      const adjCol = idx > 1 ? 1 : 0;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationRightMove[direction]
        ),
        column: column + adjCol,
        row: row + adjRow,
      };
    });
  }

  calcRotationLeftToTop() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 1 ? 1 : 0;
      const adjCol = idx > 0 ? idx - 2 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationRightMove[direction]
        ),
        column: column - adjCol,
        row: row + adjRow,
      };
    });
  }
}

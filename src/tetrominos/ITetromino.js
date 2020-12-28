import BaseTetromino from "./BaseTetromino";

export default class ITetromino extends BaseTetromino {
  constructor() {
    super();
    this.coordinates = [
      { row: 0, column: 3, side: ["top", "bottom", "left"] },
      { row: 0, column: 4, side: ["top", "bottom"] },
      { row: 0, column: 5, side: ["top", "bottom"] },
      { row: 0, column: 6, side: ["top", "bottom", "right"] },
    ];
    this.anchorPointDirection = "left";
    this.color = "orange";
    this.nextRotationRightMoveMethod = {
      left: this.calcRotationLeftToTop.bind(this),
      top: this.calcRotationTopToRight.bind(this),
      right: this.calcRotationRightToBottom.bind(this),
      bottom: this.calcRotationBottomToLeft.bind(this),
    };
    this.nextRotationLeftMoveMethod = {
      left: this.calcRotationLeftToBottom.bind(this),
      bottom: this.calcRotationBottomToRight.bind(this),
      right: this.calcRotationRightToTop.bind(this),
      top: this.calcRotationTopToLeft.bind(this),
    };
  }

  validMoveDown(gameBoard) {
    if (this.coordinates.length === 0) return false;

    const bottomSideCoordinates = this.coordinates.filter((coordinate) =>
      coordinate.side.includes("bottom")
    );

    return bottomSideCoordinates.every((bottomSideCoordinate) => {
      const { row, column } = bottomSideCoordinate;
      const nextRowDown = row + 1;
      if (nextRowDown <= 19) {
        return gameBoard[nextRowDown][column] === "black";
      } else {
        return false;
      }
    });
  }

  // Left Rotation
  rotateLeft(gameBoard) {
    if (!this.validRotateLeft(gameBoard)) return false;
    this.coordinates = this.nextRotationLeftMoveMethod[
      this.anchorPointDirection
    ]();
    this.anchorPointDirection = this.nextRotationLeftMove[
      this.anchorPointDirection
    ];
  }

  validRotateLeft(gameBoard) {
    const endCoordinates = this.nextRotationLeftMoveMethod[
      this.anchorPointDirection
    ]();

    const onGameBoard = endCoordinates.every((coordinate) => {
      const { row, column } = coordinate;
      return row >= 0 && row <= 19 && column >= 0 && column <= 9;
    });

    if (!onGameBoard) return false;

    const openGameBoardSpace = endCoordinates.every((coordinate) => {
      const { row, column } = coordinate;
      return gameBoard[row][column] === "black";
    });

    return openGameBoardSpace;
  }

  calcRotationLeftToBottom() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => ({
      column,
      row: row - idx,
      side: piece.side.map((direction) => this.nextRotationLeftMove[direction]),
    }));
  }

  calcRotationBottomToRight() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => ({
      row,
      column: column - idx,
      side: piece.side.map((direction) => this.nextRotationLeftMove[direction]),
    }));
  }

  calcRotationRightToTop() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => ({
      column,
      row: row + idx,
      side: piece.side.map((direction) => this.nextRotationLeftMove[direction]),
    }));
  }

  calcRotationTopToLeft() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => ({
      row,
      column: column + idx,
      side: piece.side.map((direction) => this.nextRotationLeftMove[direction]),
    }));
  }

  // Right Rotation
  rotateRight(gameBoard) {
    if (!this.validRotateRight(gameBoard)) return;
    this.coordinates = this.nextRotationRightMoveMethod[
      this.anchorPointDirection
    ]();
    this.anchorPointDirection = this.nextRotationRightMove[
      this.anchorPointDirection
    ];
  }

  validRotateRight(gameBoard) {
    const endCoordinates = this.nextRotationRightMoveMethod[
      this.anchorPointDirection
    ]();

    const onGameBoard = endCoordinates.every((coordinate) => {
      const { row, column } = coordinate;
      return row >= 0 && row <= 19 && column >= 0 && column <= 9;
    });

    if (!onGameBoard) return false;

    const openSpaceOnGameBoard = endCoordinates.every((coordinate) => {
      const { row, column } = coordinate;
      return gameBoard[row][column] === "black";
    });

    return openSpaceOnGameBoard;
  }

  calcRotationLeftToTop() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => ({
      column,
      row: row + idx,
      side: piece.side.map(
        (direction) => this.nextRotationRightMove[direction]
      ),
    }));
  }

  calcRotationTopToRight() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => ({
      row,
      column: column - idx,
      side: piece.side.map(
        (direction) => this.nextRotationRightMove[direction]
      ),
    }));
  }

  calcRotationRightToBottom() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => ({
      column,
      row: row - idx,
      side: piece.side.map(
        (direction) => this.nextRotationRightMove[direction]
      ),
    }));
  }

  calcRotationBottomToLeft() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => ({
      row,
      column: column + idx,
      side: piece.side.map(
        (direction) => this.nextRotationRightMove[direction]
      ),
    }));
  }
}

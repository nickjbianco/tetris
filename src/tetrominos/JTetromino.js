import BaseTetromino from "./BaseTetromino";

export default class JTetromino extends BaseTetromino {
  constructor() {
    super();
    this.coordinates = [
      { row: 0, column: 6, side: ["right", "top"] },
      { row: 1, column: 6, side: ["right", "bottom"] },
      { row: 1, column: 5, side: ["bottom"] },
      { row: 1, column: 4, side: ["left", "bottom"] },
    ];
    this.color = "green";
    this.anchorPointDirection = "top";
    this.nextRotationLeftMoveMethod = {
      top: this.calcRotationTopToLeft.bind(this),
      left: this.calcRotationLeftToBottom.bind(this),
      bottom: this.calcRotationBottomToRight.bind(this),
      right: this.calcRotationRightToTop.bind(this),
    };
    this.nextRotationRightMoveMethod = {
      left: this.calcRotationLeftToTop.bind(this),
      top: this.calcRotationTopToRight.bind(this),
      right: this.calcRotationRightToBottom.bind(this),
      bottom: this.calcRotationBottomToLeft.bind(this),
    };
    this.determineValidMoveDownAfterRowClear = {
      1: this.oneCoordinate.bind(this),
      2: this.twoCoordinates.bind(this),
      3: this.threeCoordinates.bind(this),
      4: this.validMoveDown.bind(this),
    };
  }

  isRowBelowClear(gameBoard, coordinates = this.coordinates) {
    return coordinates.every((coordinate) => {
      const { row, column } = coordinate;
      if (row + 1 <= 19) {
        return gameBoard[row + 1][column] === "black";
      } else {
        return false;
      }
    });
  }

  validMoveDownAfterRowClear(gameBoard) {
    const coordinatesLength = this.coordinates.length;
    return this.determineValidMoveDownAfterRowClear[coordinatesLength](
      gameBoard
    );
  }

  oneCoordinate(gameBoard) {
    return this.isRowBelowClear(gameBoard);
  }

  twoCoordinates(gameBoard) {
    const isHorizontal = this.coordinates.every(
      (coordinate) =>
        coordinate.side.includes("top") || coordinate.side.includes("bottom")
    );

    if (isHorizontal) {
      return this.isRowBelowClear(gameBoard);
    } else {
      let lowestRow = 0;
      let currentColumn = 0;
      this.coordinates.forEach((coordinate) => {
        const { row, column } = coordinate;
        if (row >= lowestRow) {
          lowestRow = row;
          currentColumn = column;
        }
      });
      if (lowestRow + 1 <= 19)
        return gameBoard[lowestRow + 1][currentColumn] === "black";
    }
  }

  threeCoordinates(gameBoard) {
    const isHorizontal = this.coordinates.every(
      (coordinate) =>
        coordinate.side.includes("top") || coordinate.side.includes("bottom")
    );

    const isSeperate = () => {
      const anchorPiece = this.coordinates[0];
      const { row, column, side } = anchorPiece;
      if (side.includes("top")) {
        return gameBoard[row + 1][column + 1] === "black";
      } else if (side.includes("bottom")) {
        return gameBoard[row - 1][column - 1] === "black";
      }
    };

    if (isHorizontal) {
      return this.isRowBelowClear(gameBoard);
    } else {
      const anchorPiece = this.coordinates[0];
      const { row, column, side } = anchorPiece;
      if (!isSeperate()) {
        if (row + 2 <= 19) return gameBoard[row + 2][column + 1] === "black";
      } else {
        const coordinatesToMoveDown = [];
        const leaderPiece = this.coordinates[1];
        const anchorPiece = this.coordinates[2];
        if (leaderPiece.row - anchorPiece.row > 0) {
          coordinatesToMoveDown.push(this.coordinates[2]);
        } else {
          coordinatesToMoveDown.push(this.coordinates[0]);
          coordinatesToMoveDown.push(this.coordinates[1]);
        }
        this.moveDown(coordinatesToMoveDown);
      }
    }
  }

  validMoveDown(gameBoard) {
    if (this.coordinates.length === 0) return false;

    const bottomSideCoordinates = this.coordinates.filter((coordinate) =>
      coordinate.side.includes("bottom")
    );

    const bottomSpaceOpen = this.isRowBelowClear(
      gameBoard,
      bottomSideCoordinates
    );

    if (!bottomSpaceOpen) return false;

    const anchorPiece = this.coordinates[0];
    const { row, column, side } = anchorPiece;
    const [firstDirection, secondDirection] = side;
    if (firstDirection === "top" && secondDirection === "left") {
      return gameBoard[row + 1][column] === "black";
    } else if (firstDirection === "left" && secondDirection === "bottom") {
      return (
        gameBoard[row][column + 1] === "black" &&
        gameBoard[row][column + 2] === "black"
      );
    } else {
      return true;
    }
  }

  // Rotate Right
  rotateRight(gameBoard) {
    if (!this.validRotateRight(gameBoard)) return false;
    this.coordinates = this.nextRotationRightMoveMethod[
      this.anchorPointDirection
    ]();
    this.anchorPointDirection = this.nextRotationRightMove[
      this.anchorPointDirection
    ];
  }

  validRotateRight(gameBoard) {
    const coordinates = this.nextRotationRightMoveMethod[
      this.anchorPointDirection
    ]();

    const onGameBoard = coordinates.every((coordinate) => {
      const { row, column } = coordinate;
      return row >= 0 && row <= 19 && column >= 0 && column <= 9;
    });

    if (!onGameBoard) return false;

    const openSpaceOnGameBoard = coordinates.every((coordinate) => {
      const { row, column } = coordinate;
      return gameBoard[row][column] === "black";
    });

    return openSpaceOnGameBoard;
  }

  calcRotationTopToRight() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? idx - 1 : idx;
      const adjCol = idx > 0 ? 1 : idx;
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
      const adjRow = idx > 0 ? 1 : idx;
      const adjCol = idx > 0 ? idx - 1 : idx;
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
      const adjRow = idx > 0 ? idx - 1 : idx;
      const adjCol = idx > 0 ? 1 : idx;
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
      const adjRow = idx > 0 ? 1 : idx;
      const adjCol = idx > 0 ? idx - 1 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationRightMove[direction]
        ),
        column: column - adjCol,
        row: row + adjRow,
      };
    });
  }

  // Rotate Left
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
    const coordinates = this.nextRotationLeftMoveMethod[
      this.anchorPointDirection
    ]();

    const onGameBoard = coordinates.every((coordinate) => {
      const { row, column } = coordinate;
      return row >= 0 && row <= 19 && column >= 0 && column <= 9;
    });

    if (!onGameBoard) return false;

    const openSpaceOnGameBoard = coordinates.every((coordinate) => {
      const { row, column } = coordinate;
      return gameBoard[row][column] === "black";
    });

    return openSpaceOnGameBoard;
  }

  calcRotationTopToLeft() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? idx - 1 : idx;
      const adjCol = idx > 0 ? 1 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationLeftMove[direction]
        ),
        column: column + adjCol,
        row: row + adjRow,
      };
    });
  }

  calcRotationLeftToBottom() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? 1 : idx;
      const adjCol = idx > 0 ? idx - 1 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationLeftMove[direction]
        ),
        column: column + adjCol,
        row: row - adjRow,
      };
    });
  }

  calcRotationBottomToRight() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? idx - 1 : idx;
      const adjCol = idx > 0 ? 1 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationLeftMove[direction]
        ),
        column: column - adjCol,
        row: row - adjRow,
      };
    });
  }

  calcRotationRightToTop() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => {
      const adjRow = idx > 0 ? 1 : idx;
      const adjCol = idx > 0 ? idx - 1 : idx;
      return {
        side: piece.side.map(
          (direction) => this.nextRotationLeftMove[direction]
        ),
        column: column - adjCol,
        row: row + adjRow,
      };
    });
  }
}

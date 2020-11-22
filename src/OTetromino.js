export default class OTetromino {
  constructor() {
    this.coordinates = [
      { row: 0, column: 0 },
      { row: 0, column: 1 },
      { row: 1, column: 0 },
      { row: 1, column: 1 },
    ];
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
}

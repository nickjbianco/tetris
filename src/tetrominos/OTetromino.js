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

  rotateRight() {}

  rotateLeft() {}
}

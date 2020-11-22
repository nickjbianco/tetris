import OTetromino from "./OTetromino";

describe("O Tetromino", () => {
  it("Starts with coordinates array", () => {
    const OShape = new OTetromino();
    expect(OShape.coordinates).toEqual([
      { row: 0, column: 0 },
      { row: 0, column: 1 },
      { row: 1, column: 0 },
      { row: 1, column: 1 },
    ]);
  });

  it("Moves down", () => {
    const OShape = new OTetromino();
    OShape.moveDown();
    expect(OShape.coordinates).toEqual([
      { row: 1, column: 0 },
      { row: 1, column: 1 },
      { row: 2, column: 0 },
      { row: 2, column: 1 },
    ]);
  });

  it("Moves right", () => {
    const OShape = new OTetromino();
    OShape.moveRight();
    expect(OShape.coordinates).toEqual([
      { row: 0, column: 1 },
      { row: 0, column: 2 },
      { row: 1, column: 1 },
      { row: 1, column: 2 },
    ]);
  });

  it("Moves left", () => {
    const OShape = new OTetromino();
    OShape.moveRight();
    OShape.moveLeft();
    expect(OShape.coordinates).toEqual([
      { row: 0, column: 0 },
      { row: 0, column: 1 },
      { row: 1, column: 0 },
      { row: 1, column: 1 },
    ]);
  });

  it("Rotates right", () => {
    const OShape = new OTetromino();
    OShape.rotateRight();
    expect(OShape.coordinates).toEqual([
      { row: 0, column: 0 },
      { row: 0, column: 1 },
      { row: 1, column: 0 },
      { row: 1, column: 1 },
    ]);
  });

  it("Rotates left", () => {
    const OShape = new OTetromino();
    OShape.rotateLeft();
    expect(OShape.coordinates).toEqual([
      { row: 0, column: 0 },
      { row: 0, column: 1 },
      { row: 1, column: 0 },
      { row: 1, column: 1 },
    ]);
  });
});

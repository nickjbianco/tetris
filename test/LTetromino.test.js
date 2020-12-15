import LTetromino from "../src/tetrominos/LTetromino";

describe("L Tetromino", () => {
  it("Starts with coordinates array", () => {
    const LShape = new LTetromino();
    expect(LShape.coordinates).toEqual([
      { row: 0, column: 4, side: ["left", "top"] },
      { row: 1, column: 4, side: ["left", "bottom"] },
      { row: 1, column: 5, side: ["bottom"] },
      { row: 1, column: 6, side: ["right", "bottom"] },
    ]);
  });

  it("Moves down", () => {
    const LShape = new LTetromino();
    LShape.moveDown();
    expect(LShape.coordinates).toEqual([
      { row: 1, column: 4, side: ["left", "top"] },
      { row: 2, column: 4, side: ["left", "bottom"] },
      { row: 2, column: 5, side: ["bottom"] },
      { row: 2, column: 6, side: ["right", "bottom"] },
    ]);
  });

  it("Moves right", () => {
    const LShape = new LTetromino();
    LShape.moveRight();
    expect(LShape.coordinates).toEqual([
      { row: 0, column: 5, side: ["left", "top"] },
      { row: 1, column: 5, side: ["left", "bottom"] },
      { row: 1, column: 6, side: ["bottom"] },
      { row: 1, column: 7, side: ["right", "bottom"] },
    ]);
  });

  it("Moves left", () => {
    const LShape = new LTetromino();
    LShape.moveLeft();
    expect(LShape.coordinates).toEqual([
      { row: 0, column: 3, side: ["left", "top"] },
      { row: 1, column: 3, side: ["left", "bottom"] },
      { row: 1, column: 4, side: ["bottom"] },
      { row: 1, column: 5, side: ["right", "bottom"] },
    ]);
  });

  it("Rotates left", () => {
    const LShape = new LTetromino();

    LShape.coordinates = [
      { row: 3, column: 3, side: ["left", "top"] },
      { row: 4, column: 3, side: ["left", "bottom"] },
      { row: 4, column: 4, side: ["bottom"] },
      { row: 4, column: 5, side: ["right", "bottom"] },
    ];

    // First Rotation
    LShape.rotateLeft();
    expect(LShape.coordinates).toEqual([
      { row: 3, column: 3, side: ["bottom", "left"] },
      { row: 3, column: 4, side: ["bottom", "right"] },
      { row: 2, column: 4, side: ["right"] },
      { row: 1, column: 4, side: ["top", "right"] },
    ]);

    // Second Rotation
    LShape.rotateLeft();
    expect(LShape.coordinates).toEqual([
      { row: 3, column: 3, side: ["right", "bottom"] },
      { row: 2, column: 3, side: ["right", "top"] },
      { row: 2, column: 2, side: ["top"] },
      { row: 2, column: 1, side: ["left", "top"] },
    ]);

    // Third Rotation
    LShape.rotateLeft();
    expect(LShape.coordinates).toEqual([
      { row: 3, column: 3, side: ["top", "right"] },
      { row: 3, column: 2, side: ["top", "left"] },
      { row: 4, column: 2, side: ["left"] },
      { row: 5, column: 2, side: ["bottom", "left"] },
    ]);

    // Fourth Rotation
    LShape.rotateLeft();
    expect(LShape.coordinates).toEqual([
      { row: 3, column: 3, side: ["left", "top"] },
      { row: 4, column: 3, side: ["left", "bottom"] },
      { row: 4, column: 4, side: ["bottom"] },
      { row: 4, column: 5, side: ["right", "bottom"] },
    ]);
  });

  it("Rotates right", () => {
    const LShape = new LTetromino();

    LShape.coordinates = [
      { row: 3, column: 3, side: ["left", "top"] },
      { row: 4, column: 3, side: ["left", "bottom"] },
      { row: 4, column: 4, side: ["bottom"] },
      { row: 4, column: 5, side: ["right", "bottom"] },
    ];

    // First Rotation
    LShape.rotateRight();
    expect(LShape.coordinates).toEqual([
      { row: 3, column: 3, side: ["top", "right"] },
      { row: 3, column: 2, side: ["top", "left"] },
      { row: 4, column: 2, side: ["left"] },
      { row: 5, column: 2, side: ["bottom", "left"] },
    ]);

    // Second Rotation
    LShape.rotateRight();
    expect(LShape.coordinates).toEqual([
      { row: 3, column: 3, side: ["right", "bottom"] },
      { row: 2, column: 3, side: ["right", "top"] },
      { row: 2, column: 2, side: ["top"] },
      { row: 2, column: 1, side: ["left", "top"] },
    ]);

    // Third Rotation
    LShape.rotateRight();
    expect(LShape.coordinates).toEqual([
      { row: 3, column: 3, side: ["bottom", "left"] },
      { row: 3, column: 4, side: ["bottom", "right"] },
      { row: 2, column: 4, side: ["right"] },
      { row: 1, column: 4, side: ["top", "right"] },
    ]);

    // Fourth Rotation
    LShape.rotateRight();
    expect(LShape.coordinates).toEqual([
      { row: 3, column: 3, side: ["left", "top"] },
      { row: 4, column: 3, side: ["left", "bottom"] },
      { row: 4, column: 4, side: ["bottom"] },
      { row: 4, column: 5, side: ["right", "bottom"] },
    ]);
  });
});

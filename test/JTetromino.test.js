import JTetromino from "../src/tetrominos/JTetromino";

describe("J Tetromino", () => {
  it("Starts with coordinates array", () => {
    const JShape = new JTetromino();
    expect(JShape.coordinates).toEqual([
      { row: 0, column: 6, side: ["right", "top"] },
      { row: 1, column: 6, side: ["right", "bottom"] },
      { row: 1, column: 5, side: ["bottom"] },
      { row: 1, column: 4, side: ["left", "bottom"] },
    ]);
  });

  it("Moves down", () => {
    const JShape = new JTetromino();
    JShape.moveDown();
    expect(JShape.coordinates).toEqual([
      { row: 1, column: 6, side: ["right", "top"] },
      { row: 2, column: 6, side: ["right", "bottom"] },
      { row: 2, column: 5, side: ["bottom"] },
      { row: 2, column: 4, side: ["left", "bottom"] },
    ]);
  });

  it("Moves right", () => {
    const JShape = new JTetromino();
    JShape.moveRight();
    expect(JShape.coordinates).toEqual([
      { row: 0, column: 7, side: ["right", "top"] },
      { row: 1, column: 7, side: ["right", "bottom"] },
      { row: 1, column: 6, side: ["bottom"] },
      { row: 1, column: 5, side: ["left", "bottom"] },
    ]);
  });

  it("Moves left", () => {
    const JShape = new JTetromino();
    JShape.moveLeft();
    expect(JShape.coordinates).toEqual([
      { row: 0, column: 5, side: ["right", "top"] },
      { row: 1, column: 5, side: ["right", "bottom"] },
      { row: 1, column: 4, side: ["bottom"] },
      { row: 1, column: 3, side: ["left", "bottom"] },
    ]);
  });

  // it("Rotates left", () => {
  //   const JShape = new JTetromino();

  //   JShape.coordinates = [
  //     { row: 4, column: 6, side: ["right", "top"] },
  //     { row: 5, column: 6, side: ["right", "bottom"] },
  //     { row: 5, column: 5, side: ["bottom"] },
  //     { row: 5, column: 4, side: ["left", "bottom"] },
  //   ];

  //   // First Rotation
  //   JShape.rotateLeft();
  //   expect(JShape.coordinates).toEqual([
  //     { row: 4, column: 6, side: ["top", "left"] },
  //     { row: 4, column: 7, side: ["top", "right"] },
  //     { row: 5, column: 7, side: ["right"] },
  //     { row: 6, column: 7, side: ["bottom", "right"] },
  //   ]);

  //   // Second Rotation
  //   JShape.rotateLeft();
  //   expect(JShape.coordinates).toEqual([
  //     { row: 4, column: 6, side: ["left", "bottom"] },
  //     { row: 3, column: 6, side: ["left", "top"] },
  //     { row: 3, column: 7, side: ["top"] },
  //     { row: 3, column: 8, side: ["right", "top"] },
  //   ]);

  //   // Third Rotation
  //   JShape.rotateLeft();
  //   expect(JShape.coordinates).toEqual([
  //     { row: 4, column: 6, side: ["bottom", "right"] },
  //     { row: 4, column: 5, side: ["bottom", "left"] },
  //     { row: 3, column: 5, side: ["left"] },
  //     { row: 2, column: 5, side: ["top", "left"] },
  //   ]);

  //   // Fourth Rotation
  //   JShape.rotateLeft();
  //   expect(JShape.coordinates).toEqual([
  //     { row: 4, column: 6, side: ["right", "top"] },
  //     { row: 5, column: 6, side: ["right", "bottom"] },
  //     { row: 5, column: 5, side: ["bottom"] },
  //     { row: 5, column: 4, side: ["left", "bottom"] },
  //   ]);
  // });

  // fit("Rotates right", () => {
  //   const JShape = new JTetromino();

  //   JShape.coordinates = [
  //     { row: 3, column: 3, side: ["right", "top"] },
  //     { row: 4, column: 3, side: ["right", "bottom"] },
  //     { row: 4, column: 2, side: ["bottom"] },
  //     { row: 4, column: 1, side: ["left", "bottom"] },
  //   ];

  //   // First Rotation
  //   JShape.rotateRight();
  //   expect(JShape.coordinates).toEqual([
  //     { row: 3, column: 3, side: ["bottom", "right"] },
  //     { row: 3, column: 2, side: ["bottom", "left"] },
  //     { row: 2, column: 2, side: ["left"] },
  //     { row: 1, column: 2, side: ["top", "left"] },
  //   ]);

  //   // Second Rotation
  //   JShape.rotateRight();
  //   expect(JShape.coordinates).toEqual([
  //     { row: 3, column: 3, side: ["left", "bottom"] },
  //     { row: 2, column: 3, side: ["left", "top"] },
  //     { row: 2, column: 4, side: ["top"] },
  //     { row: 2, column: 5, side: ["right", "top"] },
  //   ]);

  //   // Third Rotation
  //   JShape.rotateRight();
  //   expect(JShape.coordinates).toEqual([
  //     { row: 3, column: 3, side: ["top", "left"] },
  //     { row: 3, column: 4, side: ["top", "right"] },
  //     { row: 4, column: 4, side: ["right"] },
  //     { row: 5, column: 4, side: ["bottom", "right"] },
  //   ]);

  //   // Fourth Rotation
  //   JShape.rotateRight();
  //   expect(JShape.coordinates).toEqual([
  //     { row: 3, column: 3, side: ["right", "top"] },
  //     { row: 4, column: 3, side: ["right", "bottom"] },
  //     { row: 4, column: 2, side: ["bottom"] },
  //     { row: 4, column: 1, side: ["left", "bottom"] },
  //   ]);
  // });
});

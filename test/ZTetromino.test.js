import ZTetromino from "../src/tetrominos/ZTetromino";

describe("Z Tetromino", () => {
  it("Starts with coordinates array", () => {
    const ZShape = new ZTetromino();
    expect(ZShape.coordinates).toEqual([
      { row: 0, column: 5, side: ["top"] },
      { row: 0, column: 4, side: ["top", "left"] },
      { row: 1, column: 5, side: ["bottom"] },
      { row: 1, column: 6, side: ["bottom", "right"] },
    ]);
  });

  it("Moves down", () => {
    const ZShape = new ZTetromino();
    ZShape.moveDown();
    expect(ZShape.coordinates).toEqual([
      { row: 1, column: 5, side: ["top"] },
      { row: 1, column: 4, side: ["top", "left"] },
      { row: 2, column: 5, side: ["bottom"] },
      { row: 2, column: 6, side: ["bottom", "right"] },
    ]);
  });

  it("Moves right", () => {
    const ZShape = new ZTetromino();
    ZShape.moveRight();
    expect(ZShape.coordinates).toEqual([
      { row: 0, column: 6, side: ["top"] },
      { row: 0, column: 5, side: ["top", "left"] },
      { row: 1, column: 6, side: ["bottom"] },
      { row: 1, column: 7, side: ["bottom", "right"] },
    ]);
  });

  it("Moves left", () => {
    const ZShape = new ZTetromino();
    ZShape.moveLeft();
    expect(ZShape.coordinates).toEqual([
      { row: 0, column: 4, side: ["top"] },
      { row: 0, column: 3, side: ["top", "left"] },
      { row: 1, column: 4, side: ["bottom"] },
      { row: 1, column: 5, side: ["bottom", "right"] },
    ]);
  });

  //   it("Rotates right", () => {
  //     const ZShape = new ZTetromino();

  //     ZShape.coordinates = [
  //       { row: 4, column: 5, side: ["top"] },
  //       { row: 4, column: 4, side: ["top", "left"] },
  //       { row: 5, column: 5, side: ["bottom"] },
  //       { row: 5, column: 6, side: ["bottom", "right"] },
  //     ];

  //     // First Rotation
  //     ZShape.rotateRight();
  //     expect(ZShape.coordinates).toEqual([
  //       { row: 4, column: 5, side: ["right"] },
  //       { row: 3, column: 5, side: ["right", "top"] },
  //       { row: 4, column: 4, side: ["left"] },
  //       { row: 5, column: 4, side: ["left", "bottom"] },
  //     ]);

  //     // Second Rotation
  //     ZShape.rotateRight();
  //     expect(ZShape.coordinates).toEqual([
  //       { row: 4, column: 5, side: ["bottom"] },
  //       { row: 4, column: 6, side: ["bottom", "right"] },
  //       { row: 3, column: 5, side: ["top"] },
  //       { row: 3, column: 4, side: ["top", "left"] },
  //     ]);

  //     // Third Rotation
  //     ZShape.rotateRight();
  //     expect(ZShape.coordinates).toEqual([
  //       { row: 4, column: 5, side: ["left"] },
  //       { row: 5, column: 5, side: ["left", "bottom"] },
  //       { row: 4, column: 6, side: ["right"] },
  //       { row: 3, column: 6, side: ["right", "top"] },
  //     ]);

  //     // Fourth Rotation
  //     ZShape.rotateRight();
  //     expect(ZShape.coordinates).toEqual([
  //       { row: 4, column: 5, side: ["top"] },
  //       { row: 4, column: 4, side: ["top", "left"] },
  //       { row: 5, column: 5, side: ["bottom"] },
  //       { row: 5, column: 6, side: ["bottom", "right"] },
  //     ]);
  //   });
  // });

  // fit("Rotates left", () => {
  //   const ZShape = new ZTetromino();
  //   ZShape.coordinates = [
  //     { row: 4, column: 5, side: ["top"] },
  //     { row: 4, column: 4, side: ["top", "left"] },
  //     { row: 5, column: 5, side: ["bottom"] },
  //     { row: 5, column: 6, side: ["bottom", "right"] },
  //   ];

  //   // First Rotation
  //   ZShape.rotateLeft();
  //   expect(ZShape.coordinates).toEqual([
  //     { row: 4, column: 5, side: ["left"] },
  //     { row: 5, column: 5, side: ["left", "bottom"] },
  //     { row: 4, column: 6, side: ["right"] },
  //     { row: 3, column: 6, side: ["right", "top"] },
  //   ]);

  //   // Second Rotation
  //   ZShape.rotateLeft();
  //   expect(ZShape.coordinates).toEqual([
  //     { row: 4, column: 5, side: ["bottom"] },
  //     { row: 4, column: 6, side: ["bottom", "right"] },
  //     { row: 3, column: 5, side: ["top"] },
  //     { row: 3, column: 4, side: ["top", "left"] },
  //   ]);

  //   // Third Rotation
  //   ZShape.rotateLeft();
  //   expect(ZShape.coordinates).toEqual([
  //     { row: 4, column: 5, side: ["right"] },
  //     { row: 3, column: 5, side: ["right", "top"] },
  //     { row: 4, column: 4, side: ["left"] },
  //     { row: 5, column: 4, side: ["left", "bottom"] },
  //   ]);

  //   // Fourth Rotation
  //   ZShape.rotateLeft();
  //   expect(ZShape.coordinates).toEqual([
  //     { row: 4, column: 5, side: ["top"] },
  //     { row: 4, column: 4, side: ["top", "left"] },
  //     { row: 5, column: 5, side: ["bottom"] },
  //     { row: 5, column: 6, side: ["bottom", "right"] },
  //   ]);
});

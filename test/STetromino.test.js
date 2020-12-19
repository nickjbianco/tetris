import STetromino from "../src/tetrominos/STetromino";

describe("S Tetromino", () => {
  it("Starts with coordinates array", () => {
    const SShape = new STetromino();
    expect(SShape.coordinates).toEqual([
      { row: 0, column: 5, side: ["top"] },
      { row: 0, column: 6, side: ["top", "right"] },
      { row: 1, column: 5, side: ["bottom"] },
      { row: 1, column: 4, side: ["bottom", "left"] },
    ]);
  });

  //   it("Rotates right", () => {
  //     const SShape = new STetromino();

  //     SShape.coordinates = [
  //       { row: 4, column: 5, side: ["top"] },
  //       { row: 4, column: 6, side: ["top", "right"] },
  //       { row: 5, column: 5, side: ["bottom"] },
  //       { row: 5, column: 4, side: ["bottom", "left"] },
  //     ];

  //     // First Rotation
  //     SShape.rotateRight();
  //     expect(SShape.coordinates).toEqual([
  //       { row: 4, column: 5, side: ["right"] },
  //       { row: 5, column: 5, side: ["right", "bottom"] },
  //       { row: 4, column: 4, side: ["left"] },
  //       { row: 3, column: 4, side: ["left", "top"] },
  //     ]);

  //     // Second Rotation
  //     SShape.rotateRight();
  //     expect(SShape.coordinates).toEqual([
  //       { row: 4, column: 5, side: ["bottom"] },
  //       { row: 4, column: 4, side: ["bottom", "left"] },
  //       { row: 3, column: 5, side: ["top"] },
  //       { row: 3, column: 6, side: ["top", "right"] },
  //     ]);

  //     // Third Rotation
  //     SShape.rotateRight();
  //     expect(SShape.coordinates).toEqual([
  //       { row: 4, column: 5, side: ["left"] },
  //       { row: 3, column: 5, side: ["left", "top"] },
  //       { row: 4, column: 6, side: ["right"] },
  //       { row: 5, column: 6, side: ["right", "bottom"] },
  //     ]);

  //     // Fourth Rotation
  //     SShape.rotateRight();
  //     expect(SShape.coordinates).toEqual([
  //       { row: 4, column: 5, side: ["top"] },
  //       { row: 4, column: 6, side: ["top", "right"] },
  //       { row: 5, column: 5, side: ["bottom"] },
  //       { row: 5, column: 4, side: ["bottom", "left"] },
  //     ]);
  //   });
  // });

  // it("Rotates left", () => {
  //   const SShape = new STetromino();
  //   SShape.coordinates = [
  //     { row: 4, column: 5, side: ["top"] },
  //     { row: 4, column: 6, side: ["top", "right"] },
  //     { row: 5, column: 5, side: ["bottom"] },
  //     { row: 5, column: 4, side: ["bottom", "left"] },
  //   ];

  //   // First Rotation
  //   SShape.rotateLeft();
  //   expect(SShape.coordinates).toEqual([
  //     { row: 4, column: 5, side: ["left"] },
  //     { row: 3, column: 5, side: ["left", "top"] },
  //     { row: 4, column: 6, side: ["right"] },
  //     { row: 5, column: 6, side: ["right", "bottom"] },
  //   ]);

  //   // Second Rotation
  //   SShape.rotateLeft();
  //   expect(SShape.coordinates).toEqual([
  //     { row: 4, column: 5, side: ["bottom"] },
  //     { row: 4, column: 4, side: ["bottom", "left"] },
  //     { row: 3, column: 5, side: ["top"] },
  //     { row: 3, column: 6, side: ["top", "right"] },
  //   ]);

  //   // Third Rotation
  //   SShape.rotateLeft();
  //   expect(SShape.coordinates).toEqual([
  //     { row: 4, column: 5, side: ["right"] },
  //     { row: 5, column: 5, side: ["right", "bottom"] },
  //     { row: 4, column: 4, side: ["left"] },
  //     { row: 3, column: 4, side: ["left", "top"] },
  //   ]);

  //   // Fourth Rotation
  //   SShape.rotateLeft();
  //   expect(SShape.coordinates).toEqual([
  //     { row: 4, column: 5, side: ["top"] },
  //     { row: 4, column: 6, side: ["top", "right"] },
  //     { row: 5, column: 5, side: ["bottom"] },
  //     { row: 5, column: 4, side: ["bottom", "left"] },
  //   ]);
});

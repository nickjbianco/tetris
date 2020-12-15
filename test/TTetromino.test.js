import TTetromino from "../src/tetrominos/TTetromino";

describe("T Tetromino", () => {
  it("Starts with coordinates array", () => {
    const TShape = new TTetromino();
    expect(TShape.coordinates).toEqual([
      { row: 0, column: 5, side: ["top"] },
      { row: 1, column: 4, side: ["bottom", "left"] },
      { row: 1, column: 5, side: ["bottom"] },
      { row: 1, column: 6, side: ["bottom", "right"] },
    ]);
  });

  it("Moves down", () => {
    const TShape = new TTetromino();
    TShape.moveDown();
    expect(TShape.coordinates).toEqual([
      { row: 1, column: 5, side: ["top"] },
      { row: 2, column: 4, side: ["bottom", "left"] },
      { row: 2, column: 5, side: ["bottom"] },
      { row: 2, column: 6, side: ["bottom", "right"] },
    ]);
  });

  it("Moves right", () => {
    const TShape = new TTetromino();
    TShape.moveRight();
    expect(TShape.coordinates).toEqual([
      { row: 0, column: 6, side: ["top"] },
      { row: 1, column: 5, side: ["bottom", "left"] },
      { row: 1, column: 6, side: ["bottom"] },
      { row: 1, column: 7, side: ["bottom", "right"] },
    ]);
  });

  it("Moves left", () => {
    const TShape = new TTetromino();
    TShape.moveLeft();
    expect(TShape.coordinates).toEqual([
      { row: 0, column: 4, side: ["top"] },
      { row: 1, column: 3, side: ["bottom", "left"] },
      { row: 1, column: 4, side: ["bottom"] },
      { row: 1, column: 5, side: ["bottom", "right"] },
    ]);
  });

  fit("Rotates left", () => {
    const TShape = new TTetromino();

    TShape.coordinates = [
      { row: 4, column: 5, side: ["top"] },
      { row: 5, column: 4, side: ["bottom", "left"] },
      { row: 5, column: 5, side: ["bottom"] },
      { row: 5, column: 6, side: ["bottom", "right"] },
    ];

    // First Rotation
    TShape.rotateLeft();
    expect(TShape.coordinates).toEqual([
      { row: 4, column: 5, side: ["left"] },
      { row: 5, column: 6, side: ["right", "bottom"] },
      { row: 4, column: 6, side: ["right"] },
      { row: 3, column: 6, side: ["right", "top"] },
    ]);

    // Second Rotation
    TShape.rotateLeft();
    expect(TShape.coordinates).toEqual([
      { row: 4, column: 5, side: ["bottom"] },
      { row: 3, column: 6, side: ["top", "right"] },
      { row: 3, column: 5, side: ["top"] },
      { row: 3, column: 4, side: ["top", "left"] },
    ]);

    // Third Rotation
    TShape.rotateLeft();
    expect(TShape.coordinates).toEqual([
      { row: 4, column: 5, side: ["right"] },
      { row: 3, column: 4, side: ["left", "top"] },
      { row: 4, column: 4, side: ["left"] },
      { row: 5, column: 4, side: ["left", "bottom"] },
    ]);

    // Fourth Rotation
    TShape.rotateLeft();
    expect(TShape.coordinates).toEqual([
      { row: 4, column: 5, side: ["top"] },
      { row: 5, column: 4, side: ["bottom", "left"] },
      { row: 5, column: 5, side: ["bottom"] },
      { row: 5, column: 6, side: ["bottom", "right"] },
    ]);
  });

  //   fit("Rotates right", () => {
  //     const TShape = new TTetromino();

  //     TShape.coordinates = [
  //       { row: 3, column: 3, side: ["right", "top"] },
  //       { row: 4, column: 3, side: ["right", "bottom"] },
  //       { row: 4, column: 2, side: ["bottom"] },
  //       { row: 4, column: 1, side: ["left", "bottom"] },
  //     ];

  //     // First Rotation
  //     TShape.rotateRight();
  //     expect(TShape.coordinates).toEqual([
  //       { row: 3, column: 3, side: ["bottom", "right"] },
  //       { row: 3, column: 2, side: ["bottom", "left"] },
  //       { row: 2, column: 2, side: ["left"] },
  //       { row: 1, column: 2, side: ["top", "left"] },
  //     ]);

  //     // Second Rotation
  //     TShape.rotateRight();
  //     expect(TShape.coordinates).toEqual([
  //       { row: 3, column: 3, side: ["left", "bottom"] },
  //       { row: 2, column: 3, side: ["left", "top"] },
  //       { row: 2, column: 4, side: ["top"] },
  //       { row: 2, column: 5, side: ["right", "top"] },
  //     ]);

  //     // Third Rotation
  //     TShape.rotateRight();
  //     expect(TShape.coordinates).toEqual([
  //       { row: 3, column: 3, side: ["top", "left"] },
  //       { row: 3, column: 4, side: ["top", "right"] },
  //       { row: 4, column: 4, side: ["right"] },
  //       { row: 5, column: 4, side: ["bottom", "right"] },
  //     ]);

  //     // Fourth Rotation
  //     TShape.rotateRight();
  //     expect(TShape.coordinates).toEqual([
  //       { row: 3, column: 3, side: ["right", "top"] },
  //       { row: 4, column: 3, side: ["right", "bottom"] },
  //       { row: 4, column: 2, side: ["bottom"] },
  //       { row: 4, column: 1, side: ["left", "bottom"] },
  //     ]);
  //   });
});

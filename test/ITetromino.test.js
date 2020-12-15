import ITetromino from "../src/tetrominos/ITetromino";

describe("I Tetromino", () => {
  it("Starts with coordinates array", () => {
    const IShape = new ITetromino();
    expect(IShape.coordinates).toEqual([
      { row: 0, column: 3, side: ["top", "bottom", "left"] },
      { row: 0, column: 4, side: ["top", "bottom"] },
      { row: 0, column: 5, side: ["top", "bottom"] },
      { row: 0, column: 6, side: ["top", "bottom", "right"] },
    ]);
  });

  it("Moves down", () => {
    const IShape = new ITetromino();
    IShape.moveDown();
    expect(IShape.coordinates).toEqual([
      { row: 1, column: 3, side: ["top", "bottom", "left"] },
      { row: 1, column: 4, side: ["top", "bottom"] },
      { row: 1, column: 5, side: ["top", "bottom"] },
      { row: 1, column: 6, side: ["top", "bottom", "right"] },
    ]);
  });

  it("Moves right", () => {
    const IShape = new ITetromino();
    IShape.moveRight();
    expect(IShape.coordinates).toEqual([
      { row: 0, column: 4, side: ["top", "bottom", "left"] },
      { row: 0, column: 5, side: ["top", "bottom"] },
      { row: 0, column: 6, side: ["top", "bottom"] },
      { row: 0, column: 7, side: ["top", "bottom", "right"] },
    ]);
  });

  it("Moves left", () => {
    const IShape = new ITetromino();
    IShape.moveLeft();
    expect(IShape.coordinates).toEqual([
      { row: 0, column: 2, side: ["top", "bottom", "left"] },
      { row: 0, column: 3, side: ["top", "bottom"] },
      { row: 0, column: 4, side: ["top", "bottom"] },
      { row: 0, column: 5, side: ["top", "bottom", "right"] },
    ]);
  });

  it("Rotates right", () => {
    const IShape = new ITetromino();

    IShape.coordinates = [
      { row: 4, column: 3, side: ["top", "bottom", "left"] },
      { row: 4, column: 4, side: ["top", "bottom"] },
      { row: 4, column: 5, side: ["top", "bottom"] },
      { row: 4, column: 6, side: ["top", "bottom", "right"] },
    ];

    // First Rotation
    IShape.rotateRight();
    expect(IShape.coordinates).toEqual([
      { row: 4, column: 3, side: ["right", "left", "top"] },
      { row: 5, column: 3, side: ["right", "left"] },
      { row: 6, column: 3, side: ["right", "left"] },
      { row: 7, column: 3, side: ["right", "left", "bottom"] },
    ]);

    // Second Rotation
    IShape.rotateRight();
    expect(IShape.coordinates).toEqual([
      { row: 4, column: 3, side: ["bottom", "top", "right"] },
      { row: 4, column: 2, side: ["bottom", "top"] },
      { row: 4, column: 1, side: ["bottom", "top"] },
      { row: 4, column: 0, side: ["bottom", "top", "left"] },
    ]);

    // Third Rotation
    IShape.rotateRight();
    expect(IShape.coordinates).toEqual([
      { row: 4, column: 3, side: ["left", "right", "bottom"] },
      { row: 3, column: 3, side: ["left", "right"] },
      { row: 2, column: 3, side: ["left", "right"] },
      { row: 1, column: 3, side: ["left", "right", "top"] },
    ]);

    // Fourth Rotation
    IShape.rotateRight();
    expect(IShape.coordinates).toEqual([
      { row: 4, column: 3, side: ["top", "bottom", "left"] },
      { row: 4, column: 4, side: ["top", "bottom"] },
      { row: 4, column: 5, side: ["top", "bottom"] },
      { row: 4, column: 6, side: ["top", "bottom", "right"] },
    ]);
  });
});

it("Rotates left", () => {
  const IShape = new ITetromino();
  IShape.coordinates = [
    { row: 4, column: 3, side: ["top", "bottom", "left"] },
    { row: 4, column: 4, side: ["top", "bottom"] },
    { row: 4, column: 5, side: ["top", "bottom"] },
    { row: 4, column: 6, side: ["top", "bottom", "right"] },
  ];

  // First Rotation
  IShape.rotateLeft();
  expect(IShape.coordinates).toEqual([
    { row: 4, column: 3, side: ["left", "right", "bottom"] },
    { row: 3, column: 3, side: ["left", "right"] },
    { row: 2, column: 3, side: ["left", "right"] },
    { row: 1, column: 3, side: ["left", "right", "top"] },
  ]);

  // Second Rotation
  IShape.rotateLeft();
  expect(IShape.coordinates).toEqual([
    { row: 4, column: 3, side: ["bottom", "top", "right"] },
    { row: 4, column: 2, side: ["bottom", "top"] },
    { row: 4, column: 1, side: ["bottom", "top"] },
    { row: 4, column: 0, side: ["bottom", "top", "left"] },
  ]);

  // Third Rotation
  IShape.rotateLeft();
  expect(IShape.coordinates).toEqual([
    { row: 4, column: 3, side: ["right", "left", "top"] },
    { row: 5, column: 3, side: ["right", "left"] },
    { row: 6, column: 3, side: ["right", "left"] },
    { row: 7, column: 3, side: ["right", "left", "bottom"] },
  ]);

  // Fourth Rotation
  IShape.rotateLeft();
  expect(IShape.coordinates).toEqual([
    { row: 4, column: 3, side: ["top", "bottom", "left"] },
    { row: 4, column: 4, side: ["top", "bottom"] },
    { row: 4, column: 5, side: ["top", "bottom"] },
    { row: 4, column: 6, side: ["top", "bottom", "right"] },
  ]);
});

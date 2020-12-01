import OTetromino from "./OTetromino";

describe("O Tetromino", () => {
  it("Starts with coordinates array", () => {
    const OShape = new OTetromino();
    expect(OShape.coordinates).toEqual([
      { row: 0, column: 4, side: ["top", "left"] },
      { row: 0, column: 5, side: ["top", "right"] },
      { row: 1, column: 4, side: ["bottom", "left"] },
      { row: 1, column: 5, side: ["bottom", "right"] },
    ]);
  });

  it("Moves down", () => {
    const OShape = new OTetromino();
    OShape.moveDown();
    expect(OShape.coordinates).toEqual([
      { row: 1, column: 4, side: ["top", "left"] },
      { row: 1, column: 5, side: ["top", "right"] },
      { row: 2, column: 4, side: ["bottom", "left"] },
      { row: 2, column: 5, side: ["bottom", "right"] },
    ]);
  });

  it("Moves right", () => {
    const OShape = new OTetromino();
    OShape.moveRight();
    expect(OShape.coordinates).toEqual([
      { row: 0, column: 5, side: ["top", "left"] },
      { row: 0, column: 6, side: ["top", "right"] },
      { row: 1, column: 5, side: ["bottom", "left"] },
      { row: 1, column: 6, side: ["bottom", "right"] },
    ]);
  });

  it("Moves left", () => {
    const OShape = new OTetromino();
    OShape.moveRight();
    OShape.moveLeft();
    expect(OShape.coordinates).toEqual([
      { row: 0, column: 4, side: ["top", "left"] },
      { row: 0, column: 5, side: ["top", "right"] },
      { row: 1, column: 4, side: ["bottom", "left"] },
      { row: 1, column: 5, side: ["bottom", "right"] },
    ]);
  });

  it("Rotates right", () => {
    const OShape = new OTetromino();
    OShape.rotateRight();
    expect(OShape.coordinates).toEqual([
      { row: 0, column: 4, side: ["top", "left"] },
      { row: 0, column: 5, side: ["top", "right"] },
      { row: 1, column: 4, side: ["bottom", "left"] },
      { row: 1, column: 5, side: ["bottom", "right"] },
    ]);
  });

  it("Rotates left", () => {
    const OShape = new OTetromino();
    OShape.rotateLeft();
    expect(OShape.coordinates).toEqual([
      { row: 0, column: 4, side: ["top", "left"] },
      { row: 0, column: 5, side: ["top", "right"] },
      { row: 1, column: 4, side: ["bottom", "left"] },
      { row: 1, column: 5, side: ["bottom", "right"] },
    ]);
  });

  it("Renders with color yellow", () => {
    const OShape = new OTetromino();
    expect(OShape.color).toEqual("yellow");
  });

  it("Returns true if piece is not moving off the board to the right", () => {
    const OShape = new OTetromino();
    OShape.coordinates = [
      { row: 0, column: 0, side: ["top", "left"] },
      { row: 0, column: 1, side: ["top", "right"] },
      { row: 1, column: 0, side: ["bottom", "left"] },
      { row: 1, column: 1, side: ["bottom", "right"] },
    ];
    expect(OShape.validMoveRight()).toBe(true);
  });

  it("Returns false if piece is moving off the board to the right", () => {
    const OShape = new OTetromino();
    OShape.coordinates = [
      { row: 0, column: 8, side: ["top", "left"] },
      { row: 0, column: 9, side: ["top", "right"] },
      { row: 1, column: 8, side: ["bottom", "left"] },
      { row: 1, column: 9, side: ["bottom", "right"] },
    ];
    expect(OShape.validMoveRight()).toBe(false);
  });

  it("Returns false if piece is moving off the board to the left", () => {
    const OShape = new OTetromino();
    OShape.coordinates = [
      { row: 0, column: 0, side: ["top", "left"] },
      { row: 0, column: 1, side: ["top", "right"] },
      { row: 1, column: 0, side: ["bottom", "left"] },
      { row: 1, column: 1, side: ["bottom", "right"] },
    ];
    expect(OShape.validMoveLeft()).toBe(false);
  });

  it("Returns true if piece is not moving off the board to the left", () => {
    const OShape = new OTetromino();
    OShape.coordinates = [
      { row: 0, column: 1, side: ["top", "left"] },
      { row: 0, column: 2, side: ["top", "right"] },
      { row: 1, column: 1, side: ["bottom", "left"] },
      { row: 1, column: 2, side: ["bottom", "right"] },
    ];
    expect(OShape.validMoveLeft()).toBe(true);
  });

  it("Returns false if piece is moving off the board downwards", () => {
    const OShape = new OTetromino();
    OShape.coordinates = [
      { row: 18, column: 0, side: ["top", "left"] },
      { row: 18, column: 1, side: ["top", "right"] },
      { row: 19, column: 0, side: ["bottom", "left"] },
      { row: 19, column: 1, side: ["bottom", "right"] },
    ];
    expect(OShape.validMoveDown()).toBe(false);
  });

  it("Returns true if piece is moving off the board downwards", () => {
    const OShape = new OTetromino();
    OShape.coordinates = [
      { row: 18, column: 0, side: ["top", "left"] },
      { row: 18, column: 1, side: ["top", "right"] },
      { row: 19, column: 0, side: ["bottom", "left"] },
      { row: 19, column: 1, side: ["bottom", "right"] },
    ];
    const gameBoard = [
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["black", "black"],
      ["yellow", "yellow"],
      ["yellow", "yellow"],
    ];
    expect(OShape.validMoveDown(gameBoard)).toBe(false);
  });

  it("Does not allow pieces to overlap downward", () => {
    const OShape = new OTetromino();
    OShape.coordinates = [
      { row: 0, column: 0, side: ["top", "left"] },
      { row: 0, column: 1, side: ["top", "right"] },
      { row: 1, column: 0, side: ["bottom", "left"] },
      { row: 1, column: 1, side: ["bottom", "right"] },
    ];
    const gameBoard = [
      ["yellow", "yellow"],
      ["yellow", "yellow"],
      ["yellow", "yellow"],
      ["yellow", "yellow"],
    ];
    expect(OShape.validMoveDown(gameBoard)).toBe(false);
  });
});

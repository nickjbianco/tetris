import BaseTetromino from "../src/tetrominos/BaseTetromino";

describe("Base Tetromino", () => {
  describe("If a piece is seperated", () => {
    it("Should compress the coordinates", () => {
      const baseTetromino = new BaseTetromino();
      baseTetromino.coordinates = [
        { row: 2, column: 0, side: ["right", "left", "top"] },
        { row: 4, column: 0, side: ["right", "left"] },
        { row: 5, column: 0, side: ["right", "left", "bottom"] },
      ];
      baseTetromino.compressPiece();
      expect(baseTetromino.coordinates).toEqual([
        { row: 3, column: 0, side: ["right", "left", "top"] },
        { row: 4, column: 0, side: ["right", "left"] },
        { row: 5, column: 0, side: ["right", "left", "bottom"] },
      ]);
    });
  });
});

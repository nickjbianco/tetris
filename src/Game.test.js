import Game from "./Game";
import OTetromino from "./OTetromino";

describe("Game", () => {
  it("Should have a total of 20 board rows", () => {
    const StartGame = new Game();
    expect(StartGame.gameBoard).toEqual(
      new Array(20).fill(new Array(10).fill(""))
    );
  });

  it("Should expect current piece to have an instance of a piece class", () => {
    const StartGame = new Game();
    expect(StartGame.currentPiece).toEqual(null);
  });

  it("Should have a list of all the dropped pieces in the current game", () => {
    const StartGame = new Game();
    expect(StartGame.droppedPieces).toEqual([]);
  });
});

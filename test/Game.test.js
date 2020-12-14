import Game from "../src/Game";
import OTetromino from "../src/tetrominos/OTetromino";

describe("Game", () => {
  //   it("Should have a total of 20 board rows", () => {
  //     const StartGame = new Game();
  //     expect(StartGame.gameBoard).toEqual([
  //       [
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //       ],
  //       [
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //       ],
  //       [
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //       ],
  //       [
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //       ],
  //       [
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //       ],
  //       [
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //       ],
  //       [
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //       ],
  //       [
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //       ],
  //       [
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //       ],
  //       [
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //         "black",
  //       ],
  //     ]);
  //   });

  it("Should expect current piece to have an instance of a piece class", () => {
    const StartGame = new Game();
    expect(StartGame.currentPiece).toEqual(null);
  });

  it("Should have a list of all the dropped pieces in the current game", () => {
    const StartGame = new Game();
    expect(StartGame.droppedPieces).toEqual([]);
  });
});

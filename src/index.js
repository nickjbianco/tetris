import OTetromino from "./OTetromino";

const init = () => {
  const stage = new createjs.Stage("tetris");

  const background = new createjs.Shape();
  background.graphics.beginFill("#000000").drawRect(0, 0, 300, 600);
  stage.addChild(background);

  const oTetromino = new OTetromino();
  oTetromino.coordinates.forEach((coordinate) => {
    const square = new createjs.Shape();
    square.graphics
      .beginFill("yellow")
      .drawRect(coordinate.column * 30, coordinate.row * 30, 30, 30);
    stage.addChild(square);
  });

  stage.update();
};
window.onload = init;

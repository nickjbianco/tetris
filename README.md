# Tetris

Play Live: https://nickjbianco.github.io/tetris/

# Background

- Tetris is a popular tile matching game developed by Alexey Pajitnov in 1984.
- Consists of 7 shapes dubbed 'Tetrominos': L, J, T, Z, S, I, O
- Each piece can move left, right, down, rotate right and left.
- A user moves pieces from top of the board to the bottom hoping to fill up all rows with a tetromino.
- One row clear is 100 points, 2 is 200, 3 is 300 and 4 is called a 'Tetris' which allots one 800 points.

# Features

- Dynamic movement of pieces across board with Easel.js.
- ES6 logic to render grid, move piece, and check for row completion.
- Pause button in order to pause current game.

# Sample Code

- Example of a sample rotation, which is dictated by position of the 'anchor piece' (first block in the coordinates array).
- The example below is a roation counter clock-wise from a left anchor position to a bottom anchor position.

```javascript
  calcRotationLeftToBottom() {
    const anchorPiece = this.coordinates[0];
    const { row, column } = anchorPiece;
    return this.coordinates.map((piece, idx) => ({
      column,
      row: row - idx,
      side: piece.side.map((direction) => this.nextRotationLeftMove[direction]),
    }));
  }
```

# Gameplay

![LiveGameplay](/screenshots/LiveGameplay.png)

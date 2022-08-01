import { Piece } from './piece.js';

export class Pawn extends Piece {
  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 0;
      this.y = 60;
    } else {
      this.x = 0;
      this.y = 335;
    }
    this.src = `./img/${color}_pawn.png`;
  }
}

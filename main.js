import { Bishop } from './bishop.js';
import { Board } from './board.js';
import { King } from './king.js';
import { Knight } from './knight.js';
import { Pawn } from './pawn.js';
import { Queen } from './queen.js';
import { Rook } from './rook.js';

// Display board
const board = new Board();

// Keep track of white and black team
const white_team = [];
const black_team = [];

// King pieces
const white_king = [new King('white')];
const black_king = [new King('black')];

// King start position
let white_king_pos = 4;
let black_king_pos = 60;

// Queen pieces
const white_queen = [new Queen('white')];
const black_queen = [new Queen('black')];

// Bishop pieces
const white_bishops = [new Bishop('white'), new Bishop('white')];
const black_bishops = [new Bishop('black'), new Bishop('black')];

// Knight pieces
const white_knights = [new Knight('white'), new Knight('white')];
const black_knights = [new Knight('black'), new Knight('black')];

// Rook pieces
const white_rooks = [new Rook('white'), new Rook('white')];
const black_rooks = [new Rook('black'), new Rook('black')];

// Pawn pieces
const white_pawns = [
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
];

const black_pawns = [
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
];

// Pawns start position
let white_pawn_start_pos = 8;
let white_pawn_end_pos = 16;

let black_pawn_start_pos = 48;
let black_pawn_end_pos = 56;

// Display group pieces like pawns
let display_group_pieces = function (pieces, startPosition, endPosition) {
  let i = 0;
  while (startPosition < endPosition) {
    pieces[i].insertPiece(board.tiles[startPosition++]);
    i += 1;
  }
};

// Display unique and pair pieces
let display_pair_pieces = function (piece, startPosition) {
  piece.insertPiece(board.tiles[startPosition]);
};

// Add pieces to their respective teams
white_team.push(white_king);
white_team.push(white_queen);
white_team.push(white_bishops);
white_team.push(white_knights);
white_team.push(white_rooks);
white_team.push(white_pawns);

black_team.push(black_king);
black_team.push(black_queen);
black_team.push(black_bishops);
black_team.push(black_knights);
black_team.push(black_rooks);
black_team.push(black_pawns);

// Function calls
display_pair_pieces(white_king[0], white_king_pos);
display_pair_pieces(black_king[0], black_king_pos);
display_pair_pieces(white_queen[0], white_king_pos - 1);
display_pair_pieces(black_queen[0], black_king_pos - 1);
display_pair_pieces(white_bishops[0], white_king_pos - 2);
display_pair_pieces(white_bishops[1], white_king_pos + 1);
display_pair_pieces(black_bishops[0], black_king_pos - 2);
display_pair_pieces(black_bishops[1], black_king_pos + 1);
display_pair_pieces(white_knights[0], white_king_pos - 3);
display_pair_pieces(white_knights[1], white_king_pos + 2);
display_pair_pieces(black_knights[0], black_king_pos - 3);
display_pair_pieces(black_knights[0], black_king_pos + 2);
display_pair_pieces(white_rooks[0], white_king_pos - 4);
display_pair_pieces(white_rooks[1], white_king_pos + 3);
display_pair_pieces(black_rooks[0], black_king_pos - 4);
display_pair_pieces(black_rooks[0], black_king_pos + 3);

display_group_pieces(white_pawns, white_pawn_start_pos, white_pawn_end_pos);
display_group_pieces(black_pawns, black_pawn_start_pos, black_pawn_end_pos);

// Event handlers
function select_tile(tiles) {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        tiles[i].style.backgroundColor = 'rgba(128, 128, 128, 0.406)';
      },
      false
    );
  }
}

select_tile(board.tiles);

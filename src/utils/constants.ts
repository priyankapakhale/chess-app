import bishop from "../assets/bishop.svg";
import whiteBishop from "../assets/whiteBishop.svg";
import king from "../assets/king.svg";
import whiteKing from "../assets/whiteKing.svg";
import pawn from "../assets/pawn.svg";
import whitePawn from "../assets/whitePawn.svg";
import queen from "../assets/queen.svg";
import whiteQueen from "../assets/whiteQueen.svg";
import rook from "../assets/rook.svg";
import whiteRook from "../assets/whiteRook.svg";
import knight from "../assets/knight.svg";
import whiteKnight from "../assets/whiteKnight.svg";

export const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
export const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const pieces = {
  bishop,
  whiteBishop,
  king,
  whiteKing,
  queen,
  whiteQueen,
  rook,
  whiteRook,
  knight,
  whiteKnight,
  pawn,
  whitePawn,
};

export const initialBoardState = [
  [rook, knight, bishop, queen, king, bishop, knight, rook],
  new Array(8).fill(pawn),
  new Array(8).fill(null),
  new Array(8).fill(null),
  new Array(8).fill(null),
  new Array(8).fill(null),
  new Array(8).fill(whitePawn),
  [whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, whiteBishop, whiteKnight, whiteRook],
]
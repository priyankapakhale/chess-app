import React from "react";
import { columns, rows } from "../../utils/constants";
import "./Square.scss";

type SquareType = {
  row: string;
  column: string;
  piece: string;
};

export const Square = ({ row, column, piece }: SquareType) => {
  const rowIndex = rows.indexOf(row);
  const columnIndex = columns.indexOf(column);
  const color = (rowIndex + columnIndex) % 2 === 0 ? "white" : "black";

  return (
    <div className={`square-container square-${color}`}>
      {piece && <img src={piece} alt="piece" />}
    </div>
  );
};

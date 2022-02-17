import React, { useEffect, useState } from "react";
import { columns, initialBoardState, rows } from "../../utils/constants";
import { Square } from "../Square/Square";
import "./Board.scss";

export const Board = () => {
  const [board, setBoard] = useState(initialBoardState)

  return (
    <div className="container">
      {rows?.map((row) => {
        const rowIndex = rows.indexOf(row);
        return (
          <div className="row-container">
            {columns?.map((column) => {
              const columnIndex = columns.indexOf(column);
              const piece = board[rowIndex][columnIndex]
              return <Square row={row} column={column} piece={piece}/>;
            })}
          </div>
        );
      })}
    </div>
  );
};

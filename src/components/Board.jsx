import React from "react";

import s from "./css/Board.module.css";

import Square from "./Square";

const Board = ({ squares, click }) => {
  return (
    <div className={s.board}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => click(i)} />
      ))}
    </div>
  );
};

export default Board;

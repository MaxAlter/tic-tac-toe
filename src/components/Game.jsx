import React, { useEffect, useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";
import s from "./css/Game.module.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [sumOfWins, setSumOfWins] = useState({
    x: 0,
    o: 0,
  });

  const winner = calculateWinner(board);
  // console.log(winner);

  useEffect(() => {
    if (winner) {
      winner === "X"
        ? setSumOfWins({ ...sumOfWins, x: (sumOfWins.x += 1) })
        : setSumOfWins({ ...sumOfWins, o: (sumOfWins.o += 1) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, winner]);

  const handleClick = (index) => {
    const boardCopy = [...board];

    // Определить был ли клик по ячейке или игра законченна
    if (winner || boardCopy[index]) return;

    // Определить чей ход Х ? О
    boardCopy[index] = xIsNext ? "X" : "O";
    // Обновить наш стейт
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className={s.start__btn}
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Очистить поле
      </button>
    );
  };
  console.log(sumOfWins);

  return (
    <div className={s.wrapper}>
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className={s.game__info}>
        {winner
          ? "Победитель " + winner
          : "Сейчас ходит " + (xIsNext ? "X" : "O")}
      </p>
      <p className={s.game__info}>winner X : {sumOfWins.x}</p>
      <p className={s.game__info}>winner O : {sumOfWins.o}</p>
    </div>
  );
};

export default Game;

// memo(() => <Game />)

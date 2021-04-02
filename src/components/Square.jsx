import React from "react";
import s from "./css/Square.module.css";

const Square = (props) => {
  return (
    <button className={s.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;

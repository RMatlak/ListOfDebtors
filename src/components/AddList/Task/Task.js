import React from "react";
import "./Task.scss";

const Task = props => {
  return (
    <>
      <li>
        <p>
          Imię: <strong>{props.name}</strong>
        </p>
        <p>
          Wysokość długu: <strong>{props.money} zł</strong>
        </p>
        <p>
          Data pożyczki: <strong>{props.date}</strong>
        </p>
        <p>
          Data spłaty: <strong>{props.secondDate}</strong>
        </p>
        <button className="deleteBtn">X</button>
      </li>
    </>
  );
};

export default Task;

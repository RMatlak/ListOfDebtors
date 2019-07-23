import React from "react";
import "../styles/Task.scss";

const Task = props => {
  const handleOptions = e => {
    console.log(e.clientX);
    console.log(e.clientY);
  };

  return (
    <>
      <li onClick={handleOptions}>
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
      </li>
    </>
  );
};

export default Task;

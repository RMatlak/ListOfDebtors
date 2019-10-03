import React from "react";
import Task from "./Task/Task";

const AddList = props => {
  const addTask = props.tasks.map(task => {
    return (
      <Task
        key={task.id}
        name={task.name}
        money={task.money}
        date={task.date}
        secondDate={task.secondDate}
        id={task.id}
      />
    );
  });

  return <>{addTask}</>;
};

export default AddList;

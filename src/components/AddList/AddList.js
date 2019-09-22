import React from "react";
import Task from "./Task/Task";

const AddList = props => {
  const addTask = props.tasks.map(task => {
    return (
      <Task
        // key={task.name}
        name={task.name}
        money={task.money}
        date={task.date}
        secondDate={task.secondDate}
      />
    );
  });

  return <>{addTask}</>;
};

export default AddList;

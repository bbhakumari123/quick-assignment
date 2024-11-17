import React from "react";
import Task from "./Task";

function Column({ title, tasks }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Column;

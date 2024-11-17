import React from "react";

function Task({ task }) {
  return (
    <div style={{ border: "1px solid #000", padding: "5px", margin: "5px 0" }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}

export default Task;

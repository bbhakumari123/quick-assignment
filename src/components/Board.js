import React from "react";
import "./Board.css"; // Add a new CSS file for board-specific styles

const Board = ({ tasks }) => {
  const statuses = ["Todo", "In progress", "Done"];

  return (
    <div className="kanban-board">
      {statuses.map((status) => (
        <div key={status} className="kanban-column">
          <h2>{status}</h2>
          <div>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div key={task.id} className="kanban-card">
                  <h4>{task.title}</h4>
                  <p>Priority: {task.priority}</p>
                  <p>Tags: {task.tag.join(", ")}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;




import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css"; // Ensure your styles are linked

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Debug API response
        setTasks(data.tickets || []); // Use correct field
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <header>
        <h1>Kanban Board</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <Board tasks={tasks} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.example.com/tasks") // Replace with the actual API URL
      .then((response) => {
        console.log("Response data:", response.data); // Debugging the response
        setTasks(response.data.tickets); // Extract the `tickets` array
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Kanban Board</h1>
      <Board tasks={tasks} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import api from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);

  const getTasks = async () => {
    const res = await api.get("/");
    setTasks(res.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async (task) => {
    const res = await api.post("/", task);
    setTasks([res.data, ...tasks]);
  };

  const updateTask = async (task) => {
    const res = await api.put(`/${editing._id}`, task);

    setTasks(
      tasks.map((t) => (t._id === editing._id ? res.data : t))
    );

    setEditing(null);
  };

  const deleteTask = async (id) => {
    await api.delete(`/${id}`);

    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div className="container">

      <h1>Task Tracker</h1>

      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        editing={editing}
      />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        setEditing={setEditing}
      />

    </div>
  );
}

export default App;
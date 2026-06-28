import { useState, useEffect } from "react";

export default function TaskForm({
  addTask,
  updateTask,
  editing,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setDescription(editing.description);
      setStatus(editing.status);
    }
  }, [editing]);

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("All fields required");
      return;
    }

    const task = {
      title,
      description,
      status,
    };

    if (editing) {
      updateTask(task);
    } else {
      addTask(task);
    }

    setTitle("");
    setDescription("");
    setStatus("Pending");
  };

  return (
    <form onSubmit={submit}>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <button>
        {editing ? "Update" : "Add"} Task
      </button>

    </form>
  );
}
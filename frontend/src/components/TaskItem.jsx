export default function TaskItem({
  task,
  deleteTask,
  setEditing,
}) {
  return (
    <div className="card">

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Status: {task.status}</p>

      <button
        onClick={() => setEditing(task)}
      >
        Edit
      </button>

      <button
        className="delete"
        onClick={() => deleteTask(task._id)}
      >
        Delete
      </button>

    </div>
  );
}
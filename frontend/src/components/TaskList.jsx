import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  deleteTask,
  setEditing,
}) {
  return (
    <div>

      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          setEditing={setEditing}
        />
      ))}

    </div>
  );
}
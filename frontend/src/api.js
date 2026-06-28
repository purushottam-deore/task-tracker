import axios from "axios";

export default axios.create({
  baseURL: "https://task-tracker-9b4j.onrender.com/api/tasks",
});

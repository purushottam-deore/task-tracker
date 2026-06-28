const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });

    res.json(tasks);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and Description required",
      });
    }

    const task = await Task.create({
      title,
      description,
      status,
    });

    res.status(201).json(task);
  } catch {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        status,
      },
      {
        new: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(task);
  } catch {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json({
      message: "Task deleted",
    });
  } catch {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
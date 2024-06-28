import Tasks from "../models/tasks-schema.js";

export const createTask = async (req, res) => {
  try {
    const { task_name, task_description, duedate, list, tags, subtasks } =
      req.body;
    const createTask = await Tasks.create({
      task_name,
      task_description,
      duedate,
      list,
      tags,
      subtasks,
    });
    res.status(201).json(createTask);
  } catch (error) {
    res.status(500).json({ error: "unable to create task!" });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const getTask = await Tasks.findAll({
      where: {
        deleted_at: null,
      },
    });
    res.status(201).json(getTask);
  } catch (error) {
    res.status(500).json({ error: "unable to get task!" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const getTask = await Tasks.findOne({
      where: {
        id: id,
        deleted_at: null,
      },
    });
    if (!getTask) {
      res.status(404).json({ error: "task not found!" });
    }
    res.status(201).json(getTask);
  } catch (error) {
    res.status(500).json({ error: "unable to get task!" });
  }
};

export const editTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { task_name, task_description, duedate, list, tags, subtasks } =
      req.body;
    const task = await Tasks.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found!!" });
    }
    task.task_name = task_name;
    task.task_description = task_description;
    task.duedate = duedate;
    task.list = list;
    task.tags = tags;
    task.subtasks = subtasks;
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "unable to update task!" });
  }
};

export const taskSoftDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Tasks.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found!!" });
    }
    const now = new Date();
    console.log("date ", now);
    task.deleted_at = new Date();
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "unable to get task!" });
  }
};

export const taskDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Tasks.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found!!" });
    }
    await task.destroy();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "unable to get task!" });
  }
};

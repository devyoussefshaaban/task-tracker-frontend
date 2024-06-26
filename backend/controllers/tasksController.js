import Task from "../models/taskModel.js";

export const getMyTasks = async (req, res) => {
  try {
    const { user } = req;
    const tasks = await Task.find({ userId: user._id });
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const {
      user,
      body: { name, description, status },
    } = req;
    // TODO: VALIDATE INPUTS
    const newTask = await Task.create({
      name,
      description,
      status,
      userId: user._id,
    });
    res.status(201).json({
      success: true,
      message: "Successfully created.",
      data: newTask,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const {
      user,
      params: { taskId },
      body: { name, description, status },
    } = req;
    // TODO: VALIDATE INPUTS
    const task = await Task.findById(taskId);
    if (!task) throw new Error("Task not found.");

    if (task._id.toString() !== user._id.toString()) {
      res.status(403);
      throw new Error("You're not permitted to controll on this task.");
    }

    if (name && name !== task.name) await task.$set("name", name);
    if (description && description !== task.description)
      await task.$set("description", description);
    if (status && status !== task.status) await task.$set("status", status);

    await task.save();

    res.status(201).json({
      success: true,
      message: "Successfully updated",
      data: task,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { user, params: {taskId} } = req;

    const task = await Task.findById(taskId);
    if (!task) throw new Error("Task not found.");

    if (task._id.toString() !== user._id.toString()) {
      res.status(403);
      throw new Error("You're not permitted to controll on this task.");
    }
    await Task.deleteOne({_id: taskId})

    res.status(201).json({success: true, message: "Successfully deleted."})
  } catch (error) {
    res.status(400).json({success: false, message: error.message})
  }
};

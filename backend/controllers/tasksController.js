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
    const {task, body:{name, description, status}} = req;
    // TODO: VALIDATE INPUTS
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
    const { task, params: {taskId} } = req;

    await Task.deleteOne({_id: taskId})

    res.status(201).json({success: true, message: "Successfully deleted."})
  } catch (error) {
    res.status(400).json({success: false, message: error.message})
  }
};

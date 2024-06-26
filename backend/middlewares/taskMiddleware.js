import Task from "../models/taskModel.js";

export const checkTaskAndUserAuth = async(req, res, next) => {
    const {user, params: {taskId}} = req
    const task = await Task.findById(taskId);
    if (!task) throw new Error("Task not found.");

    if (task._id.toString() !== user._id.toString()) {
      res.status(403);
      throw new Error("You're not permitted to controll on this task.");
    }

    req.task = task

    next()
}
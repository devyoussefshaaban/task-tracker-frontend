import { Router } from "express";
import { auth } from "../middlewares/authMiddleware.js";
import { deleteTask, getMyTasks, createTask, updateTask } from "../controllers/tasksController.js";

const router = Router()

router.get("/my-tasks", auth, getMyTasks)
router.post("/", auth, createTask)
router.patch("/:taskId", auth, updateTask)
router.delete("/:taskId", deleteTask)

export default router
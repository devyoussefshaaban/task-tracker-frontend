import {
  Box,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { Task } from "../../models/Task";
import { CreateTask } from "..";
import { CREATE_TASK_FORM_TYPE } from "../../utils/constants";
import { useState } from "react";
import { Add } from "@mui/icons-material";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks?.tasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const onSelectTask = (task: Task) => setSelectedTask(task);

  const [openForm, setOpenForm] = useState<boolean>(false);

  const onOpenForm = () => setOpenForm(true);
  const onCloseForm = () => setOpenForm(false);

  if (tasks.length === 0)
    return (
      <Box>
        <Typography variant="h6">You've no tasks yet.</Typography>
      </Box>
    );
  return (
    <Stack margin="auto" width="40vw">
      <Box width="40vw">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Your Tasks</Typography>
          <IconButton onClick={onOpenForm}>
            <Add />
          </IconButton>
        </Box>
        <Divider sx={{ margin: ".5rem auto 1rem" }} />
      </Box>
      <Dialog open={openForm}>
        <CreateTask
          formType={
            selectedTask
              ? CREATE_TASK_FORM_TYPE.UPDATE_TASK
              : CREATE_TASK_FORM_TYPE.CREATE_TASK
          }
          selectedTask={selectedTask ? selectedTask : null}
          onClose={onCloseForm}
        />
      </Dialog>
      {tasks.map((task: Task) => (
        <TaskItem
          key={task._id}
          task={task}
          onSelect={onSelectTask}
          onOpenForm={onOpenForm}
        />
      ))}
    </Stack>
  );
};

export default TaskList;

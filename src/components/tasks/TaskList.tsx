import { Box, Stack, Typography } from "@mui/material";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { Task } from "../../models/Task";

const TaskList = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  if (tasks.length === 0)
    return (
      <Box>
        <Typography variant="h6">You've no tasks yet.</Typography>
      </Box>
    );
  return <Stack margin="auto" width="40vw">
    {
        tasks.map((task: Task) => (
            <TaskItem key={task._id} task={task} />
        ))
    }
  </Stack>;
};

export default TaskList;

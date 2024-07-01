import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Task } from "../../models/Task";
import { FC } from "react";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AppDispatch } from "../../context";
import { useDispatch } from "react-redux";
import { deleteTask, getMyTasks } from "../../context/actions/tasksActions";

interface IProps {
  task: Task;
}

const TaskItem: FC<IProps> = ({ task }) => {
  const dispatch: AppDispatch = useDispatch()

  const deleteTaskHandler = () => {
    dispatch(deleteTask(task._id))
    dispatch(getMyTasks())
  }

  return (
    <Box sx={{ minWidth: 275, width: "100%", mb: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" component="div">
              {task.name}
            </Typography>
           <IconButton onClick={deleteTaskHandler}>
           <Delete />
           </IconButton>
          </Box>
          <Typography variant="body2">{task.description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TaskItem;

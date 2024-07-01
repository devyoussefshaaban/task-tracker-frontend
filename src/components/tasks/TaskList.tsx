import {
  Box,
  Button,
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
  const onUpdateTask = () => setSelectedTask(null)

  const [openForm, setOpenForm] = useState<boolean>(false);

  const onOpenForm = () => setOpenForm(true);
  const onCloseForm = () => setOpenForm(false);

  return (
    <Stack margin="auto" width="40vw">
      {
        tasks.length > 0 ? (
          <Box width="40vw">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5">Your Tasks</Typography>
                <IconButton onClick={onOpenForm}>
                  <Add />
                </IconButton>
              </Box>
              <Divider sx={{ margin: ".5rem auto 1rem" }} />
            </Box>
        ): null
      }
      {tasks.length === 0 ? (
        <Box textAlign="center" margin="auto">
          <Typography variant="h6">You have no added tasks yet.</Typography>
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize", mt: 3 }}
            onClick={onOpenForm}
          >
            Create Task
          </Button>
        </Box>
      ) : (
        tasks.map((task: Task) => (
            <TaskItem
              key={task._id}
              task={task}
              onSelect={onSelectTask}
              onOpenForm={onOpenForm}
            />
        ))
      )}

      <Dialog open={openForm}>
        <CreateTask
          formType={
            selectedTask
              ? CREATE_TASK_FORM_TYPE.UPDATE_TASK
              : CREATE_TASK_FORM_TYPE.CREATE_TASK
          }
          selectedTask={selectedTask ? selectedTask : null}
          onUpdateTask={onUpdateTask}
          onClose={onCloseForm}
        />
      </Dialog>
    </Stack>
  );
};

export default TaskList;

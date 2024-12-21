import {
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import TaskCard from "./TaskCard";
import { Task } from "../../models/Task";
import { CreateTask, FlexBetween } from "..";
import { CREATE_TASK_FORM_TYPE, TASK_LIST_FILTER } from "../../utils/constants";
import { Add } from "@mui/icons-material";
import { taskServices } from "../../services/taskServices";
import TaskListFilter from "./TaskListFilter";
import { useState } from "react";

const TaskList = () => {
  const {
    tasks,
    selectedTask,
    onSelectTask,
    onUpdateTask,
    isCreateTaskFormOpen,
    onOpenForm,
    onCloseForm,
  } = taskServices().taskInfoService();

  const [activeFilter, setActiveFilter] = useState<string>(
    TASK_LIST_FILTER.ALL
  );

  return (
    <>
      <TaskListFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Stack margin="auto" width="40vw" mt={20}>
        {tasks.length > 0 ? (
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
        ) : null}
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
            <TaskCard
              key={task._id}
              task={task}
              onSelect={onSelectTask}
              onOpenForm={onOpenForm}
            />
          ))
        )}
      </Stack>

      <Dialog open={isCreateTaskFormOpen}>
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
    </>
  );
};

export default TaskList;

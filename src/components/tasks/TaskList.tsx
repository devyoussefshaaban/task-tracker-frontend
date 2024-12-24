import { Box, Button, Dialog, Stack, Typography } from "@mui/material";
import TaskItem from "./TaskItem";
import { Task } from "../../models/Task";
import { CreateTask } from "..";
import { CREATE_TASK_FORM_TYPE, TASK_LIST_FILTER } from "../../utils/constants";
import { taskServices } from "../../services/taskServices";
import TaskListFilter from "./TaskListFilter";
import { useState } from "react";
import muiTheme from "../../utils/theme";
import { useSelector } from "react-redux";
import { RootState } from "../../context";

const TaskList = () => {
  const {
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

  const theme = muiTheme();

  const TaskListStack = ({
    headTitle,
    tasks,
  }: {
    headTitle?: string;
    tasks: Task[];
  }) => {
    console.log({ tasks });
    return (
      <>
        {headTitle ? (
          <Typography variant="h6" mt={5} mb={2}>
            {headTitle}
          </Typography>
        ) : null}
        <Stack
          margin="auto"
          pr={2}
          mt={headTitle ? 0 : 5}
          sx={{
            height: "25vh",
            overflowY: "auto",
            "::-webkit-scrollbar": {
              width: "3px",
              borderRadius: "10px",
            },
            "::-webkit-scrollbar-track": {
              background: theme.palette.secondary.light,
            },
            "::-webkit-scrollbar-thumb": {
              background: "#888",
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: theme.palette.primary.main,
            },
          }}
        >
          {tasks?.length === 0 ? (
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
            tasks?.map((task: Task) => (
              <TaskItem
                key={task._id}
                task={task}
                onSelect={onSelectTask}
                onOpenForm={onOpenForm}
              />
            ))
          )}
        </Stack>
      </>
    );
  };

  const taskList = useSelector((state: RootState) => state.tasks?.tasks);

  return (
    <>
      <TaskListFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <TaskListStack tasks={taskList?.currentTasks} />
      <TaskListStack
        headTitle="Upcomming Tasks"
        tasks={taskList?.upcomingTasks}
      />

      <Dialog open={isCreateTaskFormOpen} fullWidth>
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

import { Dialog, Grid, Typography } from "@mui/material";
import TaskCard from "../tasks/TaskItem";
import { Project_Info } from "../../models/Project";
import { FC } from "react";
import { taskServices } from "../../services/taskServices";
import { CreateTask } from "..";
import { CREATE_TASK_FORM_TYPE } from "../../utils/constants";

interface IProps {
  projectInfo: Project_Info | null;
}

const ProjectTaskList: FC<IProps> = ({ projectInfo }) => {
  const { onSelectTask, onOpenForm } = taskServices().taskInfoService();

  const { selectedTask, onCloseForm, onUpdateTask } =
    taskServices().createTaskService();

  const { isCreateTaskFormOpen } = taskServices().taskInfoService();

  if (projectInfo?.tasks.length === 0)
    return <Typography variant="body1">No remain tasks here.</Typography>;

  return (
    <>
      <Grid container spacing={2}>
        {projectInfo?.tasks.map((task) => (
          <Grid item xs={12} md={4}>
            <TaskCard
              key={task._id}
              task={task}
              onSelect={onSelectTask}
              onOpenForm={onOpenForm}
            />
          </Grid>
        ))}
      </Grid>

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

export default ProjectTaskList;

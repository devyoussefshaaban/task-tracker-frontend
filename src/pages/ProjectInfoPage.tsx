import { Dialog, Grid, Typography } from "@mui/material";
import {
  BackToHomeBtn,
  BasicButton,
  CreateTask,
  FlexBetween,
  WrapContainer,
} from "../components";
import { Group_Info } from "../models/Group";
import { groupServices } from "../services/groupServices";
import { User } from "../models/User";
import { authServices } from "../services/authServices";
import { projectServices } from "../services/projectServices";
import { Project_Info } from "../models/Project";
import { taskServices } from "../services/taskServices";
import { CREATE_TASK_FORM_TYPE } from "../utils/constants";

const ProjectInfoPage = () => {
  const { currentGroupInfo }: { currentGroupInfo: Group_Info | null } =
    groupServices().groupInfoService();

  const { currentProjectInfo }: { currentProjectInfo: Project_Info | null } =
    projectServices().projectInfoService();

  const { selectedTask, onCloseForm, onUpdateTask, openForm, onOpenForm } =
    taskServices().createTaskService();

  const { user }: { user: User } = authServices();

  return (
    <WrapContainer>
      <BackToHomeBtn
        path={`/groups/${currentGroupInfo?.group?._id}`}
        text="Back To The Group Projects"
      />

      <FlexBetween>
        <Typography variant="h6" fontWeight={600} mb={3}>
          {currentProjectInfo?.project?.projectName}
        </Typography>
        {user?._id === currentGroupInfo?.group?.creatorId ? (
          <Grid container spacing={1} width="30%">
            <Grid item xs={12} md={6}>
              <BasicButton
                fullWidth
                variant="contained"
                onClick={() => console.log("Add Member ...")}
              >
                Add Member
              </BasicButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicButton fullWidth variant="contained" onClick={onOpenForm}>
                Create Task
              </BasicButton>
            </Grid>
          </Grid>
        ) : null}
      </FlexBetween>
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
    </WrapContainer>
  );
};

export default ProjectInfoPage;

import { Box, Card, Container, Dialog, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { useEffect, useState } from "react";
import { getGroupInfo } from "../context/actions/groupingActions";
import { useParams } from "react-router-dom";
import {
  BackToHomeBtn,
  BasicButton,
  CreateProjectForm,
  FlexBetween,
} from "../components";
import InviteGroupMemberForm from "../components/grouping/InviteGroupMemberForm";
import { User } from "../models/User";
import { Group } from "../models/Group";
import { Project } from "../models/Project";

const GroupInfoPage = () => {
  const [isOpenInvitationForm, setIsOpenInvitationForm] =
    useState<boolean>(false);
  const [isOpenCreateProjectForm, setIsOpenCreateProjectForm] =
    useState<boolean>(false);

  const user: User = useSelector((state: RootState) => state.auth.user);

  const openInvitationForm = () => setIsOpenInvitationForm(true);
  const closeInvitationForm = () => setIsOpenInvitationForm(false);

  const openCreateProjectForm = () => setIsOpenCreateProjectForm(true);
  const closeCreateProjectForm = () => setIsOpenCreateProjectForm(false);

  const groupInfo: { group: Group; projects: Project[] } = useSelector(
    (state: RootState) => state.groups?.currentGroup
  );

  const dispatch: AppDispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getGroupInfo(params.groupId as string));
  }, []);

  return (
    <Container sx={{ py: 3 }}>
      <BackToHomeBtn path="/groups" text="View My Groups" />
      <FlexBetween>
        <Typography variant="h6" fontWeight={600} mb={3}>
          {groupInfo?.group?.groupName}
        </Typography>
        {user?._id === groupInfo?.group?.creatorId ? (
          <Grid container spacing={1} width="30%">
            <Grid item xs={12} md={6}>
              <BasicButton
                fullWidth
                variant="contained"
                onClick={openInvitationForm}
              >
                Invite User
              </BasicButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicButton
                fullWidth
                variant="contained"
                onClick={openCreateProjectForm}
              >
                Create Project
              </BasicButton>
            </Grid>
          </Grid>
        ) : null}
      </FlexBetween>

      <Grid container spacing={1} mt={2}>
        {groupInfo?.projects.map((project) => (
          <Grid key={project._id} item xs={12} md={4}>
            <Card sx={{ py: 1, px: 2, background: "whitesmoke" }}>
              <Typography variant="h6" mb={2}>
                {project.projectName}
              </Typography>
              <Typography variant="body1">{project.description}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={isOpenInvitationForm} onClose={closeInvitationForm}>
        <InviteGroupMemberForm closeForm={closeInvitationForm} />
      </Dialog>
      <Dialog open={isOpenCreateProjectForm} onClose={closeCreateProjectForm}>
        <CreateProjectForm closeForm={closeCreateProjectForm} />
      </Dialog>
    </Container>
  );
};

export default GroupInfoPage;

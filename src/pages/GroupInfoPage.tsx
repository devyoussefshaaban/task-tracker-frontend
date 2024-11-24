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
  MemberList,
  ProjectList,
} from "../components";
import InviteGroupMemberForm from "../components/grouping/InviteGroupMemberForm";
import { User } from "../models/User";
import { Group } from "../models/Group";
import { Project } from "../models/Project";
import { Group_Member } from "../models/Group_Member";

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

  const groupInfo: {
    group: Group;
    projects: Project[];
    members: Group_Member[];
  } = useSelector((state: RootState) => state.groups?.currentGroupInfo);

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

      <ProjectList groupInfo={groupInfo} />
      <MemberList groupInfo={groupInfo} />

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

import { Dialog, Grid, Typography } from "@mui/material";
import {
  BackToHomeBtn,
  BasicButton,
  CreateProjectForm,
  FlexBetween,
  MemberList,
  ProjectList,
  WrapContainer,
} from "../components";
import InviteGroupMemberForm from "../components/grouping/InviteGroupMemberForm";
import { User } from "../models/User";
import { groupServices } from "../services/groupServices";
import { authServices } from "../services/authServices";

const GroupInfoPage = () => {
  const {
    isOpenInvitationForm,
    isOpenCreateProjectForm,
    openInvitationForm,
    closeInvitationForm,
    openCreateProjectForm,
    closeCreateProjectForm,
    groupInfo,
  } = groupServices().groupInfoService();

  const { user }: { user: User } = authServices();

  return (
    <WrapContainer>
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
    </WrapContainer>
  );
};

export default GroupInfoPage;

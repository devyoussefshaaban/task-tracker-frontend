import { Box, Container, Dialog, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { useEffect, useState } from "react";
import { getGroupInfo } from "../context/actions/groupingActions";
import { useParams } from "react-router-dom";
import { BackToHomeBtn, BasicButton } from "../components";
import InviteGroupMemberForm from "../components/grouping/InviteGroupMemberForm";
import { User } from "../models/User";

const GroupInfoPage = () => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

  const user: User = useSelector((state: RootState) => state.auth.user);

  const openForm = () => setIsOpenForm(true);
  const closeForm = () => setIsOpenForm(false);

  const groupInfo = useSelector(
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography mb={3}>{groupInfo?.groupName}</Typography>
        {user?._id === groupInfo?.creatorId ? (
          <BasicButton variant="contained" onClick={openForm}>
            Invite User
          </BasicButton>
        ) : null}
      </Box>
      <Dialog open={isOpenForm} onClose={closeForm}>
        <InviteGroupMemberForm closeForm={closeForm} />
      </Dialog>
    </Container>
  );
};

export default GroupInfoPage;

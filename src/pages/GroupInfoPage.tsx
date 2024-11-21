import { Container, Dialog, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { useEffect, useState } from "react";
import { getGroupInfo } from "../context/actions/groupingActions";
import { useParams } from "react-router-dom";
import { BasicButton } from "../components";
import InviteGroupMemberForm from "../components/grouping/InviteGroupMemberForm";

const GroupInfoPage = () => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

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
      <Typography>{groupInfo?.groupName}</Typography>
      <BasicButton variant="contained" onClick={openForm}>
        Invite User
      </BasicButton>
      <Dialog open={isOpenForm} onClose={closeForm}>
        <InviteGroupMemberForm closeForm={closeForm} />
      </Dialog>
    </Container>
  );
};

export default GroupInfoPage;

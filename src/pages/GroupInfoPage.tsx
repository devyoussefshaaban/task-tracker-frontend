import { Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { useEffect } from "react";
import { getGroupInfo } from "../context/actions/groupingActions";
import { useParams } from "react-router-dom";

const GroupInfoPage = () => {
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
    </Container>
  );
};

export default GroupInfoPage;

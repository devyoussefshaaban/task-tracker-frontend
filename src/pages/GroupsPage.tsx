import { Box, Container, Dialog, Typography } from "@mui/material";
import { BasicButton, CreateGroupForm, GroupList } from "../components";
import { useEffect, useState } from "react";
import { AppDispatch } from "../context";
import { useDispatch } from "react-redux";
import { getMyGroups } from "../context/actions/groupingActions";

const GroupsPage = () => {
  const [openCreateGroupForm, setOpenCreateGroupForm] =
    useState<boolean>(false);

  const closeForm = () => setOpenCreateGroupForm(false);
  const openForm = () => setOpenCreateGroupForm(true);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyGroups());
  }, []);

  return (
    <Container sx={{ py: 3 }}>
      <GroupList />
      <Box textAlign="center">
        <BasicButton variant="contained" onClick={openForm}>
          Create Group
        </BasicButton>
        <Dialog open={openCreateGroupForm} onClose={closeForm}>
          <CreateGroupForm closeForm={closeForm} />
        </Dialog>
      </Box>
    </Container>
  );
};

export default GroupsPage;

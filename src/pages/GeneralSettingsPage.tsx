import { Button, Container } from "@mui/material";
import { ConfirmModal } from "../components";
import { useState } from "react";
import { AppDispatch } from "../context";
import { useDispatch } from "react-redux";
import { clearDB } from "../context/actions/ownerActions";

const GeneralSettingsPage = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);

  const onClickDeleteBtn = () => setOpenConfirmModal(true);

  const onCloseConfirmModal = () => setOpenConfirmModal(false);

  const dispatch: AppDispatch = useDispatch();

  const clearDBHandler = () => {
    dispatch(clearDB());
    onCloseConfirmModal();
  };

  return (
    <Container sx={{ py: 3 }}>
      <Button variant="contained" onClick={onClickDeleteBtn}>
        Clear DB
      </Button>

      <ConfirmModal
        open={openConfirmModal}
        onClose={onCloseConfirmModal}
        title={"Delete Task Confirmation"}
        message={"Are you sure you want to delete this task permanently ?"}
        onOk={clearDBHandler}
        onCancel={onCloseConfirmModal}
      />
    </Container>
  );
};

export default GeneralSettingsPage;

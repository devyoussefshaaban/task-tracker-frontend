import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../context";
import { useEffect } from "react";
import { getMyInvitations } from "../context/actions/invitationsActions";
import { InvitationList } from "../components";

const InvitationsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyInvitations());
  }, []);

  return (
    <Container sx={{ py: 3 }}>
      <InvitationList />
    </Container>
  );
};

export default InvitationsPage;

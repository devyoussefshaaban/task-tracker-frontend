import { Container, Typography } from "@mui/material";
import { Invitation } from "../models/Invitation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { useEffect } from "react";
import { getMyInvitations } from "../context/actions/invitationsActions";
import { InvitationList } from "../components";

const InvitationsPage = () => {
  const invitations: {
    sentInvitations: Invitation[];
    recievedInvitations: Invitation[];
  } = useSelector((state: RootState) => state.invitations.invitationList);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyInvitations());
  }, []);

  const totalInvitations =
    invitations?.sentInvitations?.length +
    invitations?.recievedInvitations?.length;

  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h6" mb={5}>
        You've {totalInvitations}{" "}
        {totalInvitations > 1 ? "invitations" : "invitation"}..
      </Typography>
      <InvitationList />
    </Container>
  );
};

export default InvitationsPage;

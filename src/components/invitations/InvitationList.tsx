import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { Invitation } from "../../models/Invitation";
import { RootState } from "../../context";
import { useSelector } from "react-redux";
import InvitationInfo from "./InvitationInfo";
import { useState } from "react";

const InvitationList = () => {
  const invitations: {
    sentInvitations: Invitation[];
    recievedInvitations: Invitation[];
  } = useSelector((state: RootState) => state.invitations.invitationList);

  const InvitationListContainer = (props: { invitationList: Invitation[] }) => {
    const { invitationList } = props;
    if (invitationList.length === 0)
      return (
        <Typography textAlign="center" variant="h6">
          You've no {invitationsType.toLocaleLowerCase()} invitations.
        </Typography>
      );
    return (
      <Grid container spacing={2}>
        {invitationList?.map((invitation) => (
          <InvitationInfo key={invitation._id} invitation={invitation} />
        ))}
      </Grid>
    );
  };

  const [invitationsType, setInvitationsType] = useState<"SENT" | "RECIEVED">(
    "SENT"
  );

  const InvitationsFilterIndicator = (props: { type: "SENT" | "RECIEVED" }) => {
    const { type } = props;
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ cursor: "pointer" }}
        onClick={() => setInvitationsType(type)}
      >
        <Typography variant="h6" mr={0.5} textTransform="capitalize">
          {type.toLocaleLowerCase()}
        </Typography>
        <Chip
          label={
            type === "SENT"
              ? invitations?.sentInvitations.length
              : invitations?.recievedInvitations.length
          }
          variant="filled"
        />
      </Box>
    );
  };

  return (
    <>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="40vw"
        mb={4}
        mx="auto"
        py={1}
        px={2}
        border="1px solid #000"
        borderRadius={10}
        sx={{
          background: "whitesmoke",
        }}
      >
        <InvitationsFilterIndicator type="SENT" />
        <InvitationsFilterIndicator type="RECIEVED" />
      </Stack>
      {invitationsType === "SENT" ? (
        <InvitationListContainer
          invitationList={invitations?.sentInvitations}
        />
      ) : (
        <InvitationListContainer
          invitationList={invitations?.recievedInvitations}
        />
      )}
    </>
  );
};

export default InvitationList;

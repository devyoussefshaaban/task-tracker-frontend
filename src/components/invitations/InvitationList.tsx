import {
  Box,
  Card,
  Chip,
  Dialog,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Invitation } from "../../models/Invitation";
import { AppDispatch, RootState } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import BasicButton from "../shared/BasicButton";
import { useState } from "react";
import { User } from "../../models/User";
import { acceptInvitation } from "../../context/actions/invitationsActions";

const InvitationList = () => {
  const invitations: {
    sentInvitations: Invitation[];
    recievedInvitations: Invitation[];
  } = useSelector((state: RootState) => state.invitations.invitationList);

  const InvitaionInfo = (props: { invitation: Invitation }) => {
    const { invitation } = props;

    const user: User = useSelector((state: RootState) => state.auth.user);

    const [isViewDetails, setIsViewDetails] = useState<boolean>(false);

    const closeViewDetails = () => {
      setIsViewDetails(false);
    };

    const openViewDetails = () => {
      setIsViewDetails(true);
    };

    const dispatch: AppDispatch = useDispatch();

    const acceptThisInvitation = () => {
      dispatch(acceptInvitation(invitation?.groupId, invitation?._id));
    };

    return (
      <Grid key={invitation._id} item xs={12} md={4}>
        <Card sx={{ py: 1, px: 2, width: 400, background: "whitesmoke" }}>
          <Typography variant="body1" fontWeight={600}>
            {invitation?.title}
          </Typography>
          <Typography variant="h6">{invitation.message}</Typography>
          <BasicButton onClick={openViewDetails}>View Details</BasicButton>
          <Dialog open={isViewDetails} onClose={closeViewDetails}>
            <Box sx={{ width: "50vw", height: "80vh", py: 2, px: 3 }}>
              <Typography textAlign="center" variant="h4">
                {invitation?.title}
              </Typography>

              {invitation?.reciever?.email === user?.email ? (
                <Box
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: 20,
                  }}
                >
                  <BasicButton
                    variant="contained"
                    onClick={acceptThisInvitation}
                    disabled={invitation?.status === "ACCEPTED"}
                  >
                    Accept
                  </BasicButton>
                </Box>
              ) : null}

              <Divider sx={{ mt: 1, mb: 3 }} />

              <Typography textAlign="center">{invitation?.message}</Typography>

              <Box mt={2}>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Invitation Info
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography fontWeight={600}>Status :</Typography>
                  <Typography>
                    <Chip
                      label={invitation?.status}
                      variant="filled"
                      sx={{ ml: 2 }}
                      color={
                        invitation?.status === "PENDING"
                          ? "warning"
                          : invitation?.status === "ACCEPTED"
                          ? "success"
                          : "error"
                      }
                    />
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mt: 2, mb: 2 }} />

              <Box mt={2}>
                <Box>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Sender Info
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Typography fontWeight={600}>Sender Name :</Typography>
                    <Box display="flex" alignItems="center">
                      <Typography ml={2}>{invitation?.sender?.name}</Typography>
                      {invitation?.sender?.name === user?.username ? (
                        <Chip
                          label="You"
                          variant="filled"
                          color="success"
                          sx={{ ml: 1 }}
                        />
                      ) : null}
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Typography fontWeight={600}>Sender Email :</Typography>
                    <Box display="flex" alignItems="center">
                      <Typography ml={2}>
                        {invitation?.sender?.email}
                      </Typography>
                      {invitation?.sender?.email === user?.email ? (
                        <Chip
                          label="You"
                          variant="filled"
                          color="success"
                          sx={{ ml: 1 }}
                        />
                      ) : null}
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ mt: 2, mb: 2 }} />

                <Box>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Reciever Info
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Typography fontWeight={600}>Reciever Name :</Typography>
                    <Box display="flex" alignItems="center">
                      <Typography ml={2}>
                        {invitation?.reciever?.name}
                      </Typography>
                      {invitation?.reciever?.name === user?.username ? (
                        <Chip
                          label="You"
                          variant="filled"
                          color="success"
                          sx={{ ml: 1 }}
                        />
                      ) : null}
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Typography fontWeight={600}>Reciever Email :</Typography>
                    <Box display="flex" alignItems="center">
                      <Typography ml={2}>
                        {invitation?.reciever?.email}
                      </Typography>
                      {invitation?.reciever?.email === user?.email ? (
                        <Chip
                          label="You"
                          variant="filled"
                          color="success"
                          sx={{ ml: 1 }}
                        />
                      ) : null}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Dialog>
        </Card>
      </Grid>
    );
  };

  const InvitationListContainer = (props: {
    headTitle: string;
    invitationList: Invitation[];
  }) => {
    const { headTitle, invitationList } = props;
    return (
      <Grid item xs={12} md={6}>
        <Typography variant="body1" fontWeight={500} mb={3}>
          {headTitle}
        </Typography>
        <Grid container spacing={2}>
          {invitationList?.map((invitation) => (
            <InvitaionInfo key={invitation._id} invitation={invitation} />
          ))}
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      <InvitationListContainer
        headTitle="Sent Invitations"
        invitationList={invitations?.sentInvitations}
      />
      <InvitationListContainer
        headTitle="Recieved Invitations"
        invitationList={invitations?.recievedInvitations}
      />
    </Grid>
  );
};

export default InvitationList;

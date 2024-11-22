import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptInvitation,
  getInvitationInfo,
  getMyInvitations,
  rejectInvitation,
} from "../../context/actions/invitationsActions";
import { AppDispatch, RootState } from "../../context";
import {
  Box,
  Card,
  Chip,
  Dialog,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import BasicButton from "../shared/BasicButton";
import { User } from "../../models/User";
import { Invitation } from "../../models/Invitation";
import FlexBetween from "../shared/FlexBetween";
import { useNavigate } from "react-router-dom";

const InvitationInfo = (props: { invitation: Invitation }) => {
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

  const navigate = useNavigate();

  const acceptThisInvitation = () => {
    dispatch(acceptInvitation(invitation?.groupId, invitation?._id));
    dispatch(getMyInvitations());
    closeViewDetails();
    navigate(`/groups/${invitation?.groupId}`);
  };

  const rejectThisInvitation = () => {
    dispatch(rejectInvitation(invitation?.groupId, invitation?._id));
    dispatch(getMyInvitations());
    closeViewDetails();
  };

  const isInvitationReciever = invitation?.reciever.email === user?.email;

  return (
    <Grid key={invitation._id} item xs={12} md={4}>
      <Card sx={{ py: 1, px: 2, minWidth: 200, background: "whitesmoke" }}>
        <Typography variant="body1" fontWeight={600}>
          {invitation?.title}
        </Typography>
        <Typography variant="h6">
          {invitation.message.slice(0, 24)}....
        </Typography>
        <BasicButton onClick={openViewDetails}>View Details</BasicButton>
        <Dialog open={isViewDetails} onClose={closeViewDetails}>
          <Box sx={{ width: "50vw", height: "75vh", py: 2 }}>
            <FlexBetween>
              <Chip
                label={invitation?.status}
                variant="filled"
                color={
                  invitation?.status === "PENDING"
                    ? "warning"
                    : invitation?.status === "ACCEPTED"
                    ? "success"
                    : "error"
                }
              />

              <Typography
                textAlign="center"
                variant="h6"
                fontWeight={600}
                sx={{ flex: 1 }}
              >
                {invitation?.title}
              </Typography>

              {isInvitationReciever ? (
                <Grid flex={1} container spacing={0.5}>
                  <Grid item xs={12} md={6}>
                    <BasicButton
                      variant="contained"
                      onClick={rejectThisInvitation}
                      disabled={
                        invitation?.status === "ACCEPTED" ||
                        invitation?.status === "REJECTED"
                      }
                      fullWidth
                      color="error"
                    >
                      Reject
                    </BasicButton>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <BasicButton
                      variant="contained"
                      onClick={acceptThisInvitation}
                      disabled={
                        invitation?.status === "ACCEPTED" ||
                        invitation?.status === "REJECTED"
                      }
                      fullWidth
                    >
                      Accept
                    </BasicButton>
                  </Grid>
                </Grid>
              ) : null}
            </FlexBetween>

            <Divider sx={{ mt: 1, mb: 3 }} />

            <Box mt={2} px={2}>
              <Typography textAlign="center">{invitation?.message}</Typography>

              <Divider sx={{ mt: 2, mb: 2 }} />

              <Box>
                <Typography variant="h6" mb={2}>
                  Sender Info
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography>Sender Name :</Typography>
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
                  <Typography>Sender Email :</Typography>
                  <Box display="flex" alignItems="center">
                    <Typography ml={2}>{invitation?.sender?.email}</Typography>
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
                <Typography variant="h6" mb={2}>
                  Reciever Info
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography>Reciever Name :</Typography>
                  <Box display="flex" alignItems="center">
                    <Typography ml={2}>{invitation?.reciever?.name}</Typography>
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
                  <Typography>Reciever Email :</Typography>
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

export default InvitationInfo;

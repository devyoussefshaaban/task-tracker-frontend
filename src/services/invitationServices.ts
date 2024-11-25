import { useDispatch } from "react-redux";
import { Invitation } from "../models/Invitation";
import { AppDispatch } from "../context";
import { User } from "../models/User";
import { authServices } from "./authServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  acceptInvitation,
  getMyInvitations,
  rejectInvitation,
} from "../context/actions/invitationsActions";

export const invitationInfoService = (invitation: Invitation) => {
  const { user }: { user: User } = authServices();

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

  return {
    isViewDetails,
    openViewDetails,
    closeViewDetails,
    acceptThisInvitation,
    rejectThisInvitation,
    isInvitationReciever,
  };
};

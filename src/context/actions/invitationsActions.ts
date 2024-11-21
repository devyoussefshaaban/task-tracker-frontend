import { invitationsApi, InviteGroupMemberRequestBody } from "../../utils/api";
import * as actionTypes from "./actionTypes";

export const getMyInvitations = () => async (dispatch: any) => {
  try {
    const response = await invitationsApi.getMyInvitations();
    dispatch({
      type: actionTypes.GET_MY_INVITATIONS,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: actionTypes.GROUPING_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const getInvitationInfo =
  (invitationId: string) => async (dispatch: any) => {
    try {
      const response = await invitationsApi.getInvitationInfo(invitationId);
      dispatch({
        type: actionTypes.GET_INVITATION_INFO,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.GROUPING_ERROR,
        payload: error.response.data.message,
      });
    }
  };

export const resetCurrentInvitation = () => {
  return {
    type: actionTypes.RESET_CURRENT_INVITATION,
  };
};

export const acceptInvitation =
  (groupId: string, invitationId: string) => async (dispatch: any) => {
    try {
      const resposne = await invitationsApi.acceptInvitation(
        groupId,
        invitationId
      );
      dispatch({
        type: actionTypes.ACCEPT_INVITATION,
        payload: resposne.data,
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.GROUPING_ERROR,
        payload: error.response.data.message,
      });
    }
  };

export const sendGroupInvitation =
  (groupId: string, body: InviteGroupMemberRequestBody) =>
  async (dispatch: any) => {
    try {
      const response = await invitationsApi.sendGroupInvitation(groupId, body);
      dispatch({
        type: actionTypes.SEND_GROUP_INVITATION,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.GROUPING_ERROR,
        payload: error.response.data.message,
      });
    }
  };

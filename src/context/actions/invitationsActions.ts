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

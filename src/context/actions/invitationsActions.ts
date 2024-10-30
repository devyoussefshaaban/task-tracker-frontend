import { invitationsApi } from "../../utils/api";
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

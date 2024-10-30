import { Invitation } from "../../models/Invitation";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  invitationList: {
    sentInvitations: Invitation[];
    recievedInvitations: Invitation[];
  };
} = {
  invitationList: {
    sentInvitations: [],
    recievedInvitations: [],
  },
};

export const invitationsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_MY_INVITATIONS:
      return { ...state, invitationList: action.payload.data };
    default:
      return { ...state };
  }
};

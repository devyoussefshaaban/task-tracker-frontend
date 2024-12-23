import { toast } from "react-toastify";
import { Invitation } from "../../models/Invitation";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  invitationList: {
    sentInvitations: Invitation[];
    recievedInvitations: Invitation[];
  };
  currentInvitation: Invitation | null;
} = {
  invitationList: {
    sentInvitations: [],
    recievedInvitations: [],
  },
  currentInvitation: null,
};

export const invitationsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SEND_GROUP_INVITATION:
      toast.success(action.payload.message);
      return { ...state };
    case actionTypes.GET_MY_INVITATIONS:
      return { ...state, invitationList: action.payload.data };
    case actionTypes.GET_INVITATION_INFO:
      return { ...state, currentInvitation: action.payload.data };
    case actionTypes.RESET_CURRENT_INVITATION:
      return { ...state, currentInvitation: null };
    case actionTypes.ACCEPT_INVITATION:
      toast.success(action.payload.message);
      return { ...state };
    case actionTypes.LOGOUT:
      return {
        ...state,
        invitationList: {
          sentInvitations: [],
          recievedInvitations: [],
        },
        currentInvitation: null,
      };
    default:
      return { ...state };
  }
};

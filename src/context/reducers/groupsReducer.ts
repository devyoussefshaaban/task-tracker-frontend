import { toast } from "react-toastify";
import { Group } from "../../models/Group";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  groupList: Group[];
} = {
  groupList: [],
};

export const groupsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_MY_GROUPS:
      return { ...state, groupList: action.payload.data };
    case actionTypes.CREATE_GROUP:
      toast.success(action.payload.message);
      break;
    default:
      return { ...state };
  }
};

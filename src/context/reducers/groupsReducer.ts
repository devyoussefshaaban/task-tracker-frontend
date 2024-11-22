import { toast } from "react-toastify";
import { Group } from "../../models/Group";
import * as actionTypes from "../actions/actionTypes";
import { Project } from "../../models/Project";

const initialState: {
  groupList: Group[];
  currentGroup: { group: Group; projects: Project[] } | null;
} = {
  groupList: [],
  currentGroup: null,
};

export const groupsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_MY_GROUPS:
      return { ...state, groupList: action.payload.data };
    case actionTypes.CREATE_GROUP:
      toast.success(action.payload.message);
      break;
    case actionTypes.GET_GROUP_INFO:
      return { ...state, currentGroup: action.payload.data };
      break;
    case actionTypes.GROUPING_ERROR:
      toast.error(action.payload);
      return state;
    case actionTypes.LOGOUT:
      return {
        ...state,
        groupList: [],
        currentGroup: null,
      };
    default:
      return { ...state };
  }
};

import { toast } from "react-toastify";
import * as actionTypes from "../actions/actionTypes";
import { User } from "../../models/User";

const initialState: {
  users: User[];
} = {
  users: [],
};

export const adminReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        users: action.payload.data,
      };
    case actionTypes.DELETE_USER:
      toast.success(action.payload.message);
      return { ...state };
    default:
      return { ...state };
  }
};

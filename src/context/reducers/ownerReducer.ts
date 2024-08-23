import { toast } from "react-toastify";
import * as actionTypes from "../actions/actionTypes";

const ownerReducer = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.CLEAR_DB:
      toast.success(action.payload.message);
      return state;
    case actionTypes.OWNER_ERROR:
      toast.error(action.payload);
      return state;
    default:
      return state;
  }
};

export default ownerReducer;

import { toast } from "react-toastify";
import { Task } from "../../models/Task";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  tasks: Task[];
} = {
  tasks: [],
};

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_MY_TASKS:
      return { ...state, tasks: action.payload.data };
    case actionTypes.CREATE_TASK:
      toast.success(action.payload.message);
      break;
    case actionTypes.UPDATE_TASK:
      toast.success(action.payload.message);
      break;
    case actionTypes.DELETE_TASK:
      toast.success(action.payload.message);
      break;
    case actionTypes.TASKS_ERROR:
      toast.error(action.payload);
      break;
    default:
      return {
        ...state,
      };
  }
};

export default tasksReducer;

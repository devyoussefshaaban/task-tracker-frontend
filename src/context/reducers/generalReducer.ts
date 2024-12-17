import { Task } from "../../models/Task";
import {
  SET_IS_LOADING,
  SET_SELECTED_TASK,
  TOGGLE_CREATE_TASK_FORM,
  TOGGLE_SIDEBAR,
} from "../actions/actionTypes";

const initialState: {
  isLoading: boolean;
  isExtendedSidebar: boolean;
  isCreateTaskFormOpen: boolean;
  selectedTask: Task | null;
} = {
  isLoading: false,
  isExtendedSidebar: false,
  isCreateTaskFormOpen: false,
  selectedTask: null,
};

export const generalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    case TOGGLE_SIDEBAR:
      return { ...state, isExtendedSidebar: !state.isExtendedSidebar };
    case TOGGLE_CREATE_TASK_FORM:
      return {
        ...state,
        isCreateTaskFormOpen: action.payload.isCreateTaskFormOpen,
      };
    case SET_SELECTED_TASK:
      return { ...state, selectedTask: action.payload.task };
    default:
      return { ...state };
  }
};

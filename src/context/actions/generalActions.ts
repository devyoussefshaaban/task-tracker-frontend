import { Task } from "../../models/Task";
import * as actionTypes from "./actionTypes";

export const toggleSidebar = () => {
  return {
    type: actionTypes.TOGGLE_SIDEBAR,
  };
};

export const setIsLoading = (bool: boolean) => {
  return {
    type: actionTypes.SET_IS_LOADING,
    payload: {
      isLoading: bool,
    },
  };
};

export const toggleCreateTaskForm = (bool: boolean) => {
  return {
    type: actionTypes.TOGGLE_CREATE_TASK_FORM,
    payload: {
      isCreateTaskFormOpen: bool,
    },
  };
};

export const setSelectedTask = (task: Task | null) => {
  return {
    type: actionTypes.SET_SELECTED_TASK,
    payload: {
      task,
    },
  };
};

export const setSelectMainSection = (sectionName: string) => {
  return {
    type: actionTypes.SET_SELECTED_MAIN_SECTION,
    payload: {
      sectionName,
    },
  };
};

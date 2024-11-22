import { toast } from "react-toastify";
import { Project } from "../../models/Project";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  projectList: Project[];
  currentProject: Project | null;
} = {
  projectList: [],
  currentProject: null,
};

export const projectsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_PROJECT:
      toast.success(action.payload.message);
      return { ...state };
    default:
      return { ...state };
  }
};

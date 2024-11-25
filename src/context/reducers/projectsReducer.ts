import { toast } from "react-toastify";
import { Project, Project_Info } from "../../models/Project";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  projectList: Project[];
  currentProjectInfo: Project_Info | null;
} = {
  projectList: [],
  currentProjectInfo: null,
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

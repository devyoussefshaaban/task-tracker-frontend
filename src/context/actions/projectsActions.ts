import { CreateNewProjectRequestBody, projectsApi } from "../../utils/api";
import * as actionTypes from "./actionTypes";

export const createNewProject =
  (groupId: string, body: CreateNewProjectRequestBody) =>
  async (dispatch: any) => {
    try {
      const response = await projectsApi.createNewProject(groupId, body);
      dispatch({
        type: actionTypes.CREATE_NEW_PROJECT,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.PROJECTS_ERROR,
        payload: error.response.data.message,
      });
    }
  };
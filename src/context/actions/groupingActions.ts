import * as actionTypes from "./actionTypes";
import { CreateGroupRequestBody, groupingApi } from "../../utils/api";

export const getMyGroups = () => async (dispatch: any) => {
  try {
    const response = await groupingApi.getMyGroups();
    dispatch({
      type: actionTypes.GET_MY_GROUPS,
      payload: {
        data: response.data.data,
      },
    });
  } catch (error: any) {
    dispatch({
      type: actionTypes.GROUPING_ERROR,
      message: error.response.data.message,
    });
  }
};

export const createGroup =
  (body: CreateGroupRequestBody) => async (dispatch: any) => {
    try {
      const response = await groupingApi.createGroup(body);
      dispatch({
        type: actionTypes.CREATE_GROUP,
        payload: {
          data: response.data,
          message: response.data.message,
        },
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.GROUPING_ERROR,
        payload: error.response.data.message,
      });
    }
  };

export const getGroupInfo = (groupId: string) => async (dispatch: any) => {
  try {
    const response = await groupingApi.getGroupInfo(groupId);
    dispatch({
      type: actionTypes.GET_GROUP_INFO,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: actionTypes.GROUPING_ERROR,
      payload: error.response.data.message,
    });
  }
};

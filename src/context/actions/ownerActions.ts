import { ownerApi } from "../../utils/api";
import * as actionTypes from "./actionTypes";

export const clearDB = () => async (dispatch: any) => {
  try {
    const response = await ownerApi.clearDB();
    dispatch({
      type: actionTypes.CLEAR_DB,
      payload: response.data,
    });
  } catch (error: any) {
    console.log({ error });
    dispatch({
      type: actionTypes.OWNER_ERROR,
      payload: error.response.data.message,
    });
  }
};

import { SignInRequestBody, SignUpRequestBody, UpdateProfileRequestBody, authApi } from "../../utils/api";
import * as actionTypes from "./actionTypes";

export const signUp = (body: SignUpRequestBody) => async (dispatch: any) => {
  try {
    const response = await authApi.signUp(body);
    const { data } = response;
    dispatch({
      type: actionTypes.SIGN_UP,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: actionTypes.AUTH_FAILED,
      payload: {
        message: error.response.data.message,
      },
    });
  }
};

export const signIn = (body: SignInRequestBody) => async (dispatch: any) => {
  try {
    const response = await authApi.signIn(body);
    const { data } = response;
    dispatch({
      type: actionTypes.SIGN_IN,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: actionTypes.AUTH_FAILED,
      payload: {
        message: error.response.data.message,
      },
    });
  }
};

export const getMe = () => async (dispatch: any) => {
  try {
    const response = await authApi.getMe();
    dispatch({
      type: actionTypes.GET_ME,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: actionTypes.AUTH_FAILED,
      payload: {
        message: error.response.data.message,
      },
    });
  }
};

export const updateMyProfile = (body: UpdateProfileRequestBody) => async(dispatch: any) => {
  try {
    const response = await authApi.updateMyProfile(body);
    dispatch({
      type: actionTypes.UPDATE_MY_PROFILE,
      payload: response.data
    })
  } catch (error: any) {
    dispatch({
      type: actionTypes.AUTH_FAILED,
      payload: {
        message: error.response.data.message,
      },
    });
  }
}

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

import { toast } from "react-toastify";
import { User } from "../../models/User";
import * as actionTypes from "../actions/actionTypes";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "../../utils/constants";

const initialState: {
  user: User | null;
  isAuthenticated: boolean;
} = {
  user: null,
  isAuthenticated: Cookies.get(ACCESS_TOKEN) ? true : false,
};

const authReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case actionTypes.SIGN_UP:
      toast.success(action.payload.message);
      return {
        ...state,
        user: action.payload.data,
      };
    case actionTypes.SIGN_IN:
      Cookies.set(ACCESS_TOKEN, action.payload.data.token);
      window.location.pathname = "/tasks";
      toast.success(action.payload.message);
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: true,
      };
    case actionTypes.GET_ME:
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: true,
      };
    case actionTypes.AUTH_FAILED:
      toast.error(action.payload.message);
      return { ...state };
    case actionTypes.UPDATE_MY_PROFILE:
      toast.success(action.payload.message);
      return {
        ...state,
        user: action.payload.data,
      };
    case actionTypes.LOGOUT:
      Cookies.remove(ACCESS_TOKEN);
      window.location.pathname = "/auth/login";
      toast.info("You are logged out.");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return { ...state };
  }
};

export default authReducer;

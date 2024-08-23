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

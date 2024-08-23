import { SET_IS_LOADING, TOGGLE_SIDEBAR } from "../actions/actionTypes";

const initialState: {
  isLoading: boolean;
  isExtendedSidebar: boolean;
} = {
  isLoading: false,
  isExtendedSidebar: false,
};

export const generalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    case TOGGLE_SIDEBAR:
      return { ...state, isExtendedSidebar: !state.isExtendedSidebar };
    default:
      return { ...state };
  }
};

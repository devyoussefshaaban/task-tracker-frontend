import { TOGGLE_SIDEBAR } from "../actions/actionTypes";

const initialState: {
  isExtendedSidebar: boolean;
} = {
  isExtendedSidebar: false,
};

export const generalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isExtendedSidebar: !state.isExtendedSidebar };
    default:
      return { ...state };
  }
};

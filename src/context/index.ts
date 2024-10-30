import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import authReducer from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import tasksReducer from "./reducers/tasksReducer";
import { adminReducer } from "./reducers/adminReducer";
import { generalReducer } from "./reducers/generalReducer";
import ownerReducer from "./reducers/ownerReducer";
import { groupsReducer } from "./reducers/groupsReducer";
import { invitationsReducer } from "./reducers/invitationsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  groups: groupsReducer,
  invitations: invitationsReducer,
  admin: adminReducer,
  owner: ownerReducer,
  general: generalReducer,
});

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(compose(thunk)))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

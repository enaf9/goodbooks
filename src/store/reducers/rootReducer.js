import { combineReducers } from "redux";

import loggedReducer from "./loggedReducer";
import menuReducer from "./menuReducer";
import userMenuItemReducer from "./userMenuItemReducer";

const rootReducer = combineReducers({
  loggedReducer,
  menuReducer,
  userMenuItemReducer
});

export default rootReducer;

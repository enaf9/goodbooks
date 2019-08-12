import { combineReducers } from "redux";

import loggedReducer from "./loggedReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  loggedReducer,
  menuReducer
});

export default rootReducer;

import { combineReducers } from "redux";

import loggedReducer from "./loggedReducer";
import menuReducer from "./menuReducer";
import menuSearchBarReducer from "./menuSearchBarReducer";

const rootReducer = combineReducers({
  loggedReducer,
  menuReducer,
  menuSearchBarReducer
});

export default rootReducer;

import { combineReducers } from "redux";

import loggedReducer from "./loggedReducer";
import menuReducer from "./menuReducer";
import menuSearchBarReducer from "./menuSearchBarReducer";
import tabReducer from "./tabReducer";

const rootReducer = combineReducers({
  loggedReducer,
  menuReducer,
  menuSearchBarReducer,
  tabReducer
});

export default rootReducer;

import { combineReducers } from "redux";

import booksReducer from "./booksReducer";
import loggedReducer from "./loggedReducer";
import menuReducer from "./menuReducer";
import menuSearchBarReducer from "./menuSearchBarReducer";
import tabReducer from "./tabReducer";
import signFormReducer from "./signFormReducer";
import deletePopUpReducer from "./deletePopUpReducer";

const rootReducer = combineReducers({
  booksReducer,
  loggedReducer,
  menuReducer,
  menuSearchBarReducer,
  tabReducer,
  signFormReducer,
  deletePopUpReducer
});

export default rootReducer;

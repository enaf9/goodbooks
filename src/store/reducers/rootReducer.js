import { combineReducers } from "redux";

import booksReducer from "./booksReducer";
import loggedReducer from "./loggedReducer";
import menuReducer from "./menuReducer";
import menuSearchBarReducer from "./menuSearchBarReducer";
import tabReducer from "./tabReducer";
import signFormReducer from "./signFormReducer";
import deletePopUpReducer from "./deletePopUpReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  booksReducer,
  loggedReducer,
  menuReducer,
  menuSearchBarReducer,
  tabReducer,
  signFormReducer,
  deletePopUpReducer,
  authReducer
});

export default rootReducer;

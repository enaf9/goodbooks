const menuReducer = (state = false, action) => {
  if (action.type === "TOGGLE_MENU") {
    return !state;
  } else if (action.type === "CLOSE_MENU") {
    return false;
  } else {
    return state;
  }
};

export default menuReducer;

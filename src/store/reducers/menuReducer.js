const menuReducer = (state = false, action) => {
  if (action.type === "TOGGLE_MENU") {
    return !state;
  } else {
    return state;
  }
};

export default menuReducer;

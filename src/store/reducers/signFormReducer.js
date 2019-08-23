const signFormReducer = (state = false, action) => {
  if (action.type === "TOGGLE_FORM") {
    return !state;
  } else if (action.type === "CLOSE_FORM") {
    return false;
  } else {
    return state;
  }
};

export default signFormReducer;

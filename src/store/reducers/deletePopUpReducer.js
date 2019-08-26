const deletePopUpReducer = (state = false, action) => {
  if (action.type === "SHOW_POPUP") {
    return !state;
  } else if (action.type === "CLOSE_POPUP") {
    return false;
  } else {
    return state;
  }
};

export default deletePopUpReducer;

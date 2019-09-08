const deletePopUpReducer = (state = false, action) => {
  if (action.type === "SHOW_POPUP") {
    return action.id;
  } else if (action.type === "CLOSE_POPUP") {
    return false;
  } else {
    return state;
  }
};

export default deletePopUpReducer;

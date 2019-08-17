const menuSearchBarReducer = (state = false, action) => {
  if (action.type === "TOGGLE_SEARCH_BAR") {
    return !state;
  } else {
    return state;
  }
};

export default menuSearchBarReducer;

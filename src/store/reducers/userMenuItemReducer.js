const userMenuItemReducer = (state = false, action) => {
  if (action.type === "TOGGLE_USER_MENU_ITEM") {
    return !state;
  } else {
    return state;
  }
};

export default userMenuItemReducer;

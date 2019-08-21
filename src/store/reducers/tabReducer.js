const tabReducer = (state = 0, action) => {
  if (action.type === "SET_TAB_ACTIVE") {
    return action.id;
  } else {
    return state;
  }
};

export default tabReducer;

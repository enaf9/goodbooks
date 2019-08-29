const authReducer = (state = { user: null, error: null }, action) => {
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return { ...state, user: action.user };
    case "SIGN_UP_FAILURE":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default authReducer;

const authReducer = (state = { success: null, error: null }, action) => {
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return { ...state, success: action.success };
    case "SIGN_UP_FAILURE":
      return { ...state, error: action.error };
    case "SIGN_IN_SUCCESS":
      return { ...state, success: action.success };
    case "SIGN_IN_FAILURE":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default authReducer;

const authReducer = (
  state = { success: null, error: null, msg: "" },
  action
) => {
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return { ...state, success: action.success };
    case "SIGN_UP_FAILURE":
      return { ...state, error: action.error };
    case "SIGN_IN_SUCCESS":
      return { ...state, success: action.success };
    case "SIGN_IN_FAILURE":
      return { ...state, error: action.error };
    case "SET_MSG":
      console.log(action.msg);
      return { ...state, msg: action.msg };
    default:
      return state;
  }
};

export default authReducer;

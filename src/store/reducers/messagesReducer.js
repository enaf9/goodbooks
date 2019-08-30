const messageReducer = (state = { signUpMsg: {}, signInMsg: "" }, action) => {
  switch (action.type) {
    case "SET_SIGN_UP_MSG":
      return { ...state, signUpMsg: action.msg };
    case "SET_SIGN_IN_MSG":
      return { ...state, signInMsg: action.msg };
    case "RESET_MSG":
      return { signUpMsg: {}, signInMsg: "" };
    default:
      return state;
  }
};

export default messageReducer;

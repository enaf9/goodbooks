const messagesReducer = (state = { signUpMsg: {} }, action) => {
  switch (action.type) {
    case "SET_SIGN_UP_MSG":
      return { ...state, signUpMsg: action.msg };
    default:
      return state;
  }
};

export default messagesReducer;

const loggedReducer = (
  state = { isLogged: false, isLoggedSetup: false },
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isLogged: true };
    case "SIGN_OUT":
      return { ...state, isLogged: false };
    case "SET_STATUS":
      return { ...state, isLoggedSetup: true };
    default:
      return state;
  }
};

export default loggedReducer;

const loggedReducer = (
  state = { isLogged: false, isLoggedSetup: false, id: null },
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLogged: true,
        id: action.id,
        image: action.image,
        username: action.username
      };
    case "SIGN_OUT":
      return { ...state, isLogged: false };
    case "SET_STATUS":
      return { ...state, isLoggedSetup: true };
    default:
      return state;
  }
};

export default loggedReducer;

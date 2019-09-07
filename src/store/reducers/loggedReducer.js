const loggedReducer = (
  state = {
    isLogged: false,
    isLoggedSetup: false,
    id: null,
    favoritesBooks: [],
    toReadBooks: [],
    currentlyReadingBooks: [],
    readBooks: []
  },
  action
) => {
  let newList = [];
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLogged: true,
        id: action.id,
        ...action.data
      };
    case "SIGN_OUT":
      return { ...state, isLogged: false };
    case "SET_STATUS":
      return { ...state, isLoggedSetup: true };
    case "ADD_BOOK_TO_LIST":
      newList = state[action.list];
      newList.push(action.id);
      return { ...state, [action.list]: newList };
    case "REMOVE_BOOK_FROM_LIST":
      newList = state[action.list].filter(book => book !== action.id);
      return { ...state, [action.list]: newList };
    default:
      return state;
  }
};

export default loggedReducer;

const authorsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_FAVORITE_AUTHORS":
      return [...state, ...action.authors];
    default:
      return state;
  }
};

export default authorsReducer;

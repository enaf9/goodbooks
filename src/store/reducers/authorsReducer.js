const authorsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_FAVORITE_AUTHORS":
      return [...action.authors];
    default:
      return state;
  }
};

export default authorsReducer;

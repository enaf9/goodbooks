const authorsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_FAVORITE_AUTHORS":
      return [...action, ...action.authors];
    default:
      return state;
  }
};

export default authorsReducer;

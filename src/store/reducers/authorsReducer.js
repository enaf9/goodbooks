const authorsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_FAVORITE_AUTHORS":
      console.log("ssss" + action.authors);
      return [...state, ...action.authors];
    default:
      return state;
  }
};

export default authorsReducer;

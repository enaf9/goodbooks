const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      const newState = [...state];
      newState.push(action.book);
      return newState;
    default:
      return state;
  }
};

export default booksReducer;

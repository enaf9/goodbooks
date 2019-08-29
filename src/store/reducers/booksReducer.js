const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      const newState = [...state];
      newState.push(action.book);
      return newState;
    case "GET_BOOKS":
      return [...state, ...action.books];
    default:
      return state;
  }
};

export default booksReducer;

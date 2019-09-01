const booksReducer = (
  state = { books: [], newBooks: [], currentlyPopularBooks: [] },
  action
) => {
  switch (action.type) {
    case "ADD_BOOK":
      const newState = { ...state };
      newState.books.push(action.book);
      return newState;
    case "GET_BOOKS":
      return { ...state, books: [...action.books] };
    case "GET_NEW_BOOKS":
      return { ...state, newBooks: [...action.books] };
    case "GET_CURRENTLY_POPULAR_BOOKS":
      return { ...state, currentlyPopularBooks: [...action.books] };
    default:
      return state;
  }
};

export default booksReducer;

const signIn = (id, data) => {
  return {
    type: "SIGN_IN",
    id,
    data
  };
};

const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

const setStatus = () => {
  return {
    type: "SET_STATUS"
  };
};

const addBookToList = (id, list) => {
  return {
    type: "ADD_BOOK_TO_LIST",
    id,
    list
  };
};

const removeBookFromList = (id, list) => {
  return {
    type: "REMOVE_BOOK_FROM_LIST",
    id,
    list
  };
};

export { signIn, signOut, setStatus, addBookToList, removeBookFromList };

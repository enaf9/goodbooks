import { db } from "../../firebase";

const addBook = book => {
  return { type: "ADD_BOOK", book };
};

const getBooks = () => {
  return (dispatch, getState) => {
    let books = [];
    db.collection("books")
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          books.push(doc.data());
        });
        console.log(dispatch({ type: "GET_BOOKS", books }));
      });
  };
};

export { addBook, getBooks };

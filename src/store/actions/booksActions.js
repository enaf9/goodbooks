import { db } from "../../firebase";

const addBook = book => {
  return { type: "ADD_BOOK", book };
};

const getBooks = () => {
  return (dispatch, getState) => {
    let promis = new Promise((resolve, reject) => {
      let books = [];
      db.collection("books")
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            books.push(doc.data());
          });

          dispatch({ type: "GET_BOOKS", books });
          resolve(books);
        })
        .catch(error => {
          console.log(error);
        });
    });
    return promis;
  };
};

export { addBook, getBooks };

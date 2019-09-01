import { db } from "../../firebase";

const addBook = book => {
  return { type: "ADD_BOOK", book };
};

const getBooks = () => {
  return (dispatch, getState) => {
    let promise = new Promise((resolve, reject) => {
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
    return promise;
  };
};

const getNewBooks = () => {
  return (dispatch, getState) => {
    let promise = new Promise((resolve, reject) => {
      let books = [];
      db.collection("books")
        .orderBy("release.releaseDate", "desc")
        .limit(10)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            books.push(doc.data());
          });
          dispatch({ type: "GET_NEW_BOOKS", books });
          resolve(books);
        })
        .catch(error => {
          console.log(error);
        });
    });
    return promise;
  };
};

const getCurrentlyPopularBooks = () => {
  return (dispatch, getState) => {
    let promise = new Promise((resolve, reject) => {
      let books = [];
      let date = new Date();
      date.setMonth(date.getMonth() - 50);
      db.collection("books")
        .where("release.releaseDate", ">", date)
        .orderBy("release.releaseDate")
        .orderBy("favoriteCount", "desc")
        .limit(10)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            books.push(doc.data());
          });

          dispatch({ type: "GET_CURRENTLY_POPULAR_BOOKS", books });
          resolve(books);
        })
        .catch(error => {
          console.log(error);
        });
    });
    return promise;
  };
};

export { addBook, getBooks, getNewBooks, getCurrentlyPopularBooks };

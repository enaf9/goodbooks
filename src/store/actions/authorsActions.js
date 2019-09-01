import { db } from "../../firebase";

const getFavoriteAuthors = () => {
  return (dispatch, getState) => {
    let promise = new Promise((resolve, reject) => {
      let books = [];
      let authors = [];
      db.collection("books")
        .orderBy("favoriteCount", "desc")
        .limit(10)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            books.push(doc.data());
          });
        })
        .catch(error => {
          console.log(error);
        })
        .then(() => {
          console.log(books);
          books.map(book => {
            db.collection("authors")
              .where("name", "==", book.author)
              .get()
              .then(snapshot => {
                snapshot.docs.map(doc => {
                  authors.push(doc.data());
                });
              })
              .catch(error => {
                console.log(error);
              });
          });
          dispatch({ type: "GET_FAVORITE_AUTHORS", authors });
          resolve(authors);
        });
    });
    return promise;
  };
};

export { getFavoriteAuthors };

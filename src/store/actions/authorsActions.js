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
          console.log("aaa" + books);
          let promise = books.map(book => {
            db.collection("authors")
              .where("name", "==", book.author)
              .get()
              .then(snapshot => {
                snapshot.docs.map(doc => {
                  authors.push(doc.data());
                  console.log("bb" + authors);
                });
              })
              .catch(error => {
                console.log(error);
              });
          });
          Promise.all(promise).then(() => {
            dispatch({ type: "GET_FAVORITE_AUTHORS", authors });
          });
        });
      resolve(authors);
    });
    return promise;
  };
};

export { getFavoriteAuthors };

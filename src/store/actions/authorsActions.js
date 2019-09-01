import { db } from "../../firebase";

const getFavoriteAuthors = () => {
  return (dispatch, getState) => {
    let promise = new Promise((resolve, reject) => {
      let authors = [];
      db.collection("authors")
        .get()
        .then(s => {
          console.log(
            "aaaa" +
              s.docs.map(doc => {
                console.log(doc.data());
              })
          );
        });
      db.collection("authors")
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            authors.push(doc.data());
          });
          dispatch({ type: "GET_FAVORITE_AUTHORS", authors });
          resolve(authors);
        })
        .catch(error => {
          console.log(error);
        });
    });
    return promise;
  };
};

export { getFavoriteAuthors };

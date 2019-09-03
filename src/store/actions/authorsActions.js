import { db } from "../../firebase";

const getFavoriteAuthors = () => {
  return (dispatch, getState) => {
    let promise = new Promise((resolve, reject) => {
      let authors = [];
      db.collection("books")
        .orderBy("favoriteCount", "desc")
        .limit(20)
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            if (
              !authors.some(author => author.id === doc.data().author.id) &&
              authors.length <= 10
            ) {
              authors.push({ ...doc.data().author, id: doc.data().author.id });
            }
          });
          dispatch({ type: "GET_FAVORITE_AUTHORS", authors });
        })
        .catch(error => {
          console.log(error);
        });

      resolve(authors);
    });
    return promise;
  };
};

export { getFavoriteAuthors };

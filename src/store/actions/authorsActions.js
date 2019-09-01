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
          snapshot.docs.map(doc => {
            if (
              !authors.some(
                author => author.authorId.id === doc.data().author.authorId.id
              ) &&
              authors.length <= 10
            ) {
              return authors.push(doc.data().author);
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

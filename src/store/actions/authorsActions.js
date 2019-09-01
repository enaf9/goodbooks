import { db } from "../../firebase";

const getFavoriteAuthors = () => {
  console.log("VOLA");
  return (dispatch, getState) => {
    let promise = new Promise((resolve, reject) => {
      let authors = [];
      db.collection("books")
        .orderBy("favoriteCount", "desc")
        .limit(20)
        .get()
        .then(snapshot => {
          authors = snapshot.docs.map(doc => {
            if (
              !authors.some(
                author => author.authorId.id === doc.data().author.authorId.id
              ) &&
              authors.length <= 10
            ) {
              return { ...doc.data().author, id: doc.id };
            }
            return null;
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

import { auth, db } from "../../firebase";

const getSeries = author => {
  return (dispatch, getState) => {
    let promise = new Promise((resolve, reject) => {
      let series = [];
      db.collection("authors")
        .where("name", "==", author)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            db.collection("authors")
              .doc(doc.id)
              .collection("series")
              .get()
              .then(snapshot => {
                snapshot.docs.map(doc => series.push(doc.data()));
              });
          });
          dispatch({ type: "GET_SERIES", series });
          resolve(series);
        })
        .catch(error => {
          console.log(error);
        });
    });
    return promise;
  };
};

export { getSeries };

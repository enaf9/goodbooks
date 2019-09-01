import { db } from "../../firebase";

const getSeries = author => {
  return (dispatch, getState) => {
    let promise = new Promise((resolve, reject) => {
      let series = [];
      db.collection("authors")
        .where("name", "==", author)
        .get()
        .then(snapshot => {
          series = snapshot.docs.map(doc =>
            db
              .collection("authors")
              .doc(doc.id)
              .collection("series")
              .get()
              .then(snapshot => {
                snapshot.docs.map((doc, index) => ({
                  value: index,
                  label: doc.data().name,
                  id: "series"
                }));
              })
          );
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

const resetSeries = () => {
  return (dispatch, getState) => dispatch({ type: "RESET_SERIES" });
};

export { getSeries, resetSeries };

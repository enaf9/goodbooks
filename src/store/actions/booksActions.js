import { db, storage } from "../../firebase";

const defaultValues = {
  avgRating: 0,
  currentlyReadingCount: 0,
  favoriteCount: 0,
  ratingCount: 0,
  readCount: 0,
  toReadCount: 0
};

const addBook = book => {
  return (dispatch, getState) => {
    const createBook = async () => {
      const author = await db
        .collection("authors")
        .where("name", "==", book.author)
        .get()
        .then(snapshot => ({
          ...snapshot.docs[0].data(),
          id: snapshot.docs[0].id
        }))
        .catch(error => {
          console.log(error);
        });
      if (author) {
        // await storage.ref("images/books").put(book.image);

        const newBook = {
          author: { id: author.id, name: author.name, image: author.image },
          coverImage: "",
          description: book.description,
          genres: book.genres,
          isbn: book.isbn,
          originalTitle: book.originalTitle,
          pages: book.pages,
          release: {
            publisher: book.publisher,
            // releaseDate: db.Timestamp.fromDate(new Date(book.releaseDate))
            releaseDate: book.releaseDate
          },
          series: { ...book.series, sequence: book.sequence },
          title: book.title,
          translator: book.translator,
          ...defaultValues
        };

        await db
          .collection("books")
          .add(newBook)
          .catch(error => {
            console.log(error);
          });
        dispatch({ type: "ADD_BOOK", newBook });
      } else {
        console.log("Autor neexistuje!!");
      }
    };
    createBook();
  };
};

const getBooks = () => {
  return (dispatch, getState) => {
    let promise = new Promise((resolve, reject) => {
      let books = [];
      db.collection("books")
        .get()
        .then(snapshot => {
          books = snapshot.docs.map(doc => {
            return { ...doc.data(), id: doc.id };
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
          books = snapshot.docs.map(doc => {
            return { ...doc.data(), id: doc.id };
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
          books = snapshot.docs.map(doc => {
            return { ...doc.data(), id: doc.id };
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

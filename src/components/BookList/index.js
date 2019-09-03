import React, { useState, useEffect } from "react";

//styled components imports
import StyledBookList from "./StyledBookList";

//components imports
import BookCard from "../BookCard";

import { db } from "../../firebase";

const BookList = props => {
  const [books, setBooks] = useState([]);
  const [booksLoaded, setBooksLoaded] = useState(false);

  useEffect(() => {
    const getBooksByAuthor = async () => {
      const snapshot = await db
        .collection("books")
        .where("author.id", "==", props.id)
        .get();
      const data = snapshot.docs.map(doc => {
        return doc.data();
      });
      setBooks(data);
      setBooksLoaded(true);
    };
    const getBooksBySeries = async () => {
      const snapshot = await db
        .collection("books")
        .where("series.id", "==", props.seriesId)
        .get();
      const data = snapshot.docs.map(doc => {
        return doc.data();
      });
      setBooks(data);
      setBooksLoaded(true);
    };
    if (props.seriesId) {
      getBooksBySeries();
    }
    if (props.id) {
      getBooksByAuthor();
    }
  }, []);

  const renderBooks = () => {
    return books.map(book => {
      return (
        <BookCard
          title={book.title}
          author={book.author.name}
          releaseDate={book.release.releaseDate.toDate().getFullYear()}
          avgRating={book.avgRating}
          coverImage={book.coverImage}
          big={props.size}
        />
      );
    });
  };

  return (
    <>
      {booksLoaded ? (
        <StyledBookList big={props.size}>{renderBooks()}</StyledBookList>
      ) : null}
    </>
  );
};

export default BookList;

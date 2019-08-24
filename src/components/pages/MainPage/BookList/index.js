import React from "react";
import { useSelector } from "react-redux";

//styled components imports
import StyledBookList from "./StyledBookList";

//components imports
import BookItem from "../../../BookItem/index";

const BookList = () => {
  const books = useSelector(state => state.booksReducer);

  return (
    <StyledBookList>
      {books.map(book => {
        return (
          <BookItem
            id={book.id}
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
          />
        );
      })}
      <BookItem
        title={books[0].title}
        author={books[0].author}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author}
        coverImage={books[0].coverImage}
      />
    </StyledBookList>
  );
};

export default BookList;

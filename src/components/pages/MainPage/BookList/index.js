import React from "react";

//styled components imports
import StyledBookList from "./StyledBookList";

//components imports
import BookItem from "../../../BookItem/index";

const BookList = props => {
  const books = props.books;

  return (
    <StyledBookList>
      {books.map(book => {
        return (
          <BookItem
            id={book.id}
            title={book.title}
            author={book.author.name}
            coverImage={book.coverImage}
          />
        );
      })}
      <BookItem
        title={books[0].title}
        author={books[0].author.name}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author.name}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author.name}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author.name}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author.name}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author.name}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author.name}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author.name}
        coverImage={books[0].coverImage}
      />
      <BookItem
        title={books[0].title}
        author={books[0].author.name}
        coverImage={books[0].coverImage}
      />
    </StyledBookList>
  );
};

export default BookList;

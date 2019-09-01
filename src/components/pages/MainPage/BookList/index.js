import React from "react";

//styled components imports
import StyledBookList from "./StyledBookList";

//components imports
import BookItem from "../../../BookItem/index";

const BookList = props => {
  return (
    <StyledBookList>
      {props.books.map(book => {
        return (
          <BookItem
            id={book.id}
            title={book.title}
            author={book.author.name}
            coverImage={book.coverImage}
            key={book.id}
          />
        );
      })}
    </StyledBookList>
  );
};

export default BookList;

import React from "react";

//styled components imports
import StyledBookList from "./StyledBookList";

//components imports
import BookItem from "../../../../../BookItem";

const BookList = props => {
  return (
    <StyledBookList>
      {props.books.map(book => {
        return (
          <BookItem
            title={book.title}
            rating={book.avgRating}
            coverImage={book.coverImage}
            author={book.author.name}
            id={book.id}
          />
        );
      })}
    </StyledBookList>
  );
};

export default BookList;

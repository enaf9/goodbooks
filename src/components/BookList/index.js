import React from "react";

//styled components imports
import StyledBookList from "./StyledBookList";

//components imports
import BookCard from "../BookCard";

const BookList = props => {
  return (
    <StyledBookList big={props.size}>
      <BookCard big={props.size} />
      <BookCard big={props.size} />
      <BookCard big={props.size} />
      <BookCard big={props.size} />
    </StyledBookList>
  );
};

export default BookList;

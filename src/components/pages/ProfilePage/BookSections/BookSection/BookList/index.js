import React from "react";

//styled components imports
import StyledBookList from "./StyledBookList";

//components imports
import BookItem from "../../../../../BookItem";

const BookList = props => {
  return (
    <StyledBookList>
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
    </StyledBookList>
  );
};

export default BookList;

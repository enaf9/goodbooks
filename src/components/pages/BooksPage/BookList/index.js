import React from "react";

//styled components imports
import StyledBookList from "./StyledBookList";

//components imports
import BookCard from "../../../BookCard/index";

const BookList = () => {
  return (
    <StyledBookList>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </StyledBookList>
  );
};

export default BookList;

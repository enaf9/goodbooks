import React from "react";

//styled components imports
import StyledBookList from "./StyledBookList";

//components imports
import BookItem from "../../../BookItem/index";

const BookList = () => {
  const handleMouseOver = e => {
    console.log("ABC");
  };

  return (
    <StyledBookList onMouseOver={handleMouseOver}>
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

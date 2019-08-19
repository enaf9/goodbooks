import React from "react";

//styled components imports
import StyledAuthorList from "./StyledAuthorList";

//components imports
import AuthorCard from "../../../AuthorCard/index";

const BookList = () => {
  return (
    <StyledAuthorList>
      <AuthorCard />
      <AuthorCard />
      <AuthorCard />
      <AuthorCard />
    </StyledAuthorList>
  );
};

export default BookList;

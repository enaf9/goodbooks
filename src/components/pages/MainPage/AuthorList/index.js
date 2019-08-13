import React from "react";

//styled components imports
import StyledAuthorList from "./StyledAuthorList";

//components imports
import AuthorItem from "../../../AuthorItem/index";

const AuthorList = () => {
  return (
    <StyledAuthorList>
      <AuthorItem />
      <AuthorItem />
      <AuthorItem />
      <AuthorItem />
      <AuthorItem />
      <AuthorItem />
    </StyledAuthorList>
  );
};

export default AuthorList;

import React from "react";
import { useSelector } from "react-redux";

//styled components imports
import StyledAuthorList from "./StyledAuthorList";

//components imports
import AuthorItem from "../../../AuthorItem/index";

const AuthorList = () => {
  const authors = useSelector(state => state.authorsReducer);

  return (
    <StyledAuthorList>
      {console.log("tady", authors)}
      {authors.map(author => {
        return <AuthorItem />;
      })}
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

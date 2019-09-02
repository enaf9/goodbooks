import React from "react";
import { useSelector } from "react-redux";

//styled components imports
import StyledAuthorList from "./StyledAuthorList";

//components imports
import AuthorItem from "../../../AuthorItem/index";

const AuthorList = () => {
  const authors = useSelector(state => state.authorsReducer);
  console.log(authors);

  return (
    <StyledAuthorList>
      {authors.map(author => {
        return (
          <AuthorItem
            key={author.authorId}
            id={author.authorId}
            name={author.name}
            image={author.image}
          />
        );
      })}
    </StyledAuthorList>
  );
};

export default AuthorList;

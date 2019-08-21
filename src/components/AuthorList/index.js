import React from "react";
import AuthorImage from "../../images/Authors/Brandon_Sanderson.jpg";

//styled components imports
import StyledAuthorList from "./StyledAuthorList";

//components imports
import UserCard from "../UserCard/index";

const AuthorList = () => {
  return (
    <StyledAuthorList>
      <UserCard name="Brandon Sanderson" img={AuthorImage} />
      <UserCard name="Brandon Sanderson" img={AuthorImage} />
      <UserCard name="Brandon Sanderson" img={AuthorImage} />
      <UserCard name="Brandon Sanderson" img={AuthorImage} />
    </StyledAuthorList>
  );
};

export default AuthorList;

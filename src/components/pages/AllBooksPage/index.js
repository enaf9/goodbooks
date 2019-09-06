import React from "react";
import UserImage from "../../../images/Users/beachboy.jpg";

//styled components imports
import StyledBooksPage from "./StyledBooksPage";
import Title from "./Title";
import Wrapper from "./Wrapper";

//components imports
import BookList from "../../BookList/index";
import UserCard from "../../UserCard";

const AllBooksPage = props => {
  console.log(props);
  return (
    <StyledBooksPage>
      <Wrapper>
        <UserCard big img={UserImage} name="beachboy32" />
      </Wrapper>
      <Title>Oblíbené</Title>
      <BookList />
    </StyledBooksPage>
  );
};

export default AllBooksPage;

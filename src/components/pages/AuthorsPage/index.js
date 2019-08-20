import React from "react";

//styled components imports
import StyledAuthorsPage from "./StyledAuthorsPage";
import Title from "./Title";
import Wrapper from "./Wrapper";

//components imports
import SearchInput from "../../SearchInput/index";
import SelectInput from "../../SelectInput/index";
import AuthorList from "../../AuthorList/index";

const AuthorsPage = () => {
  const optionValues = [
    { value: "abc", label: "Abecedy (vzestupně)" },
    { value: "zyx", label: "Abecedy (sestupně)" },
    { value: "views", label: "Počtu zobrazení" }
  ];

  return (
    <StyledAuthorsPage>
      <Title>Autoři</Title>
      <Wrapper>
        <SearchInput />
        <SelectInput options={optionValues} defaultValue={optionValues[0]} />
      </Wrapper>
      <AuthorList />
    </StyledAuthorsPage>
  );
};

export default AuthorsPage;

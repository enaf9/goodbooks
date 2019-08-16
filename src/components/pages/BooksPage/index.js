import React from "react";

//styled components imports
import StyledBooksPage from "./StyledBooksPage";
import Title from "./Title";
import Wrapper from "./Wrapper";
import Filter from "./Filter";
import FilterIcon from "./FilterIcon";

//components imports
import SearchInput from "../../SearchInput/index";
import SelectInput from "../../SelectInput/index";
import BookList from "./BookList/index";

const BooksPage = () => {
  return (
    <StyledBooksPage>
      <Title>Knihy</Title>
      <Wrapper>
        <SearchInput />
        <Filter>
          <SelectInput />
          <FilterIcon size="24" />
        </Filter>
      </Wrapper>
      <BookList />
    </StyledBooksPage>
  );
};

export default BooksPage;

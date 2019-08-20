import React from "react";

//styled components import
import Title from "./Title";
import Container from "./Container";

//components import
import SearchInput from "../../SearchInput";
import Tabs from "../../Tabs";

const SearchResultPage = () => {
  return (
    <div>
      <Title>Výsledky vyhledávání</Title>
      <SearchInput />
      <Container>
        <Tabs />
      </Container>
    </div>
  );
};

export default SearchResultPage;

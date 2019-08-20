import React, { useState } from "react";

//styled components imports
import StyledBooksPage from "./StyledBooksPage";
import Title from "./Title";
import Wrapper from "./Wrapper";
import Filter from "./Filter";
import FilterIcon from "./FilterIcon";

//components imports
import SearchInput from "../../SearchInput/index";
import SelectInput from "../../SelectInput/index";
import BookList from "../../BookList/index";
import FilterForm from "./FilterForm/index";

const BooksPage = () => {
  const [filterIsOpen, setFilterOpen] = useState(false);
  const optionValues = [
    { value: "newest", label: "Nejnovějších" },
    { value: "oldest", label: "Nejstarších" },
    { value: "name", label: "Názvu" },
    { value: "bestRating", label: "Nejlepší hodnocení" },
    { value: "worstRating", label: "Nejhorší hodnocení" },
    { value: "views", label: "Počtu zobrazení" }
  ];

  const handleClick = () => {
    setFilterOpen(!filterIsOpen);
  };

  return (
    <StyledBooksPage>
      <Title>Knihy</Title>
      <Wrapper>
        <SearchInput />
        <Filter>
          <SelectInput options={optionValues} defaultValue={optionValues[0]} />
          <FilterIcon size="24" onClick={handleClick} />
        </Filter>
        <FilterForm isOpen={filterIsOpen} />
      </Wrapper>
      <BookList />
    </StyledBooksPage>
  );
};

export default BooksPage;

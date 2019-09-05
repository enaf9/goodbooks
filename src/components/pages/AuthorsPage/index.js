import React, { useState } from "react";

//styled components imports
import StyledAuthorsPage from "./StyledAuthorsPage";
import Title from "./Title";
import Wrapper from "./Wrapper";

//components imports
import SearchInput from "../../SearchInput/index";
import SelectInput from "../../SelectInput/index";
import AuthorList from "../../AuthorList/index";

const AuthorsPage = () => {
  const [selectedOption, setSelectedOption] = useState("asc");
  const [filterText, setFilterText] = useState("");

  const optionValues = [
    { value: "asc", label: "Abecedy (vzestupně)" },
    { value: "desc", label: "Abecedy (sestupně)" }
  ];

  const selectOption = option => setSelectedOption(option.value);

  const filterResults = e => {
    setFilterText(e.target.value);
  };

  return (
    <StyledAuthorsPage>
      <Title>Autoři</Title>
      <Wrapper>
        <SearchInput filterResults={filterResults} />
        <SelectInput
          options={optionValues}
          defaultValue={optionValues[0]}
          setValue={selectOption}
        />
      </Wrapper>
      <AuthorList order={selectedOption} filterText={filterText} />
    </StyledAuthorsPage>
  );
};

export default AuthorsPage;

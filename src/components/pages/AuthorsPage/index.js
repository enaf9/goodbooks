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
  const optionValues = [
    { value: "asc", label: "Abecedy (vzestupně)" },
    { value: "desc", label: "Abecedy (sestupně)" }
  ];

  const selectOption = option => setSelectedOption(option.value);

  return (
    <StyledAuthorsPage>
      <Title>Autoři</Title>
      <Wrapper>
        <SearchInput />
        <SelectInput
          options={optionValues}
          defaultValue={optionValues[0]}
          setValue={selectOption}
        />
      </Wrapper>
      <AuthorList order={selectedOption} />
    </StyledAuthorsPage>
  );
};

export default AuthorsPage;

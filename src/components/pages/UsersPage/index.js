import React, { useState } from "react";

//styled components imports
import StyledUsersPage from "./StyledUsersPage";
import Title from "./Title";
import Wrapper from "./Wrapper";

//components imports
import SearchInput from "../../SearchInput/index";
import SelectInput from "../../SelectInput/index";
import UserList from "../../UserList";

const UsersPage = () => {
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
    <StyledUsersPage>
      <Title>Uživatelé</Title>
      <Wrapper>
        <SearchInput filterResults={filterResults} />
        <SelectInput
          options={optionValues}
          defaultValue={optionValues[0]}
          setValue={selectOption}
        />
      </Wrapper>
      <UserList order={selectedOption} filterText={filterText} />
    </StyledUsersPage>
  );
};

export default UsersPage;

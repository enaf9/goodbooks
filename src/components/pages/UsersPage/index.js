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

  const optionValues = [
    { value: "asc", label: "Abecedy (vzestupně)" },
    { value: "desc", label: "Abecedy (sestupně)" },
    { value: "views", label: "Počtu zobrazení" }
  ];

  const selectOption = option => setSelectedOption(option.value);

  return (
    <StyledUsersPage>
      <Title>Uživatelé</Title>
      <Wrapper>
        <SearchInput />
        <SelectInput
          options={optionValues}
          defaultValue={optionValues[0]}
          setValue={selectOption}
        />
      </Wrapper>
      <UserList order={selectedOption} />
    </StyledUsersPage>
  );
};

export default UsersPage;

import React from "react";

//styled components imports
import StyledUsersPage from "./StyledUsersPage";
import Title from "./Title";
import Wrapper from "./Wrapper";

//components imports
import SearchInput from "../../SearchInput/index";
import SelectInput from "../../SelectInput/index";
import UserList from "../../UserList";

const UsersPage = () => {
  const optionValues = [
    { value: "abc", label: "Abecedy (vzestupně)" },
    { value: "zyx", label: "Abecedy (sestupně)" },
    { value: "views", label: "Počtu zobrazení" }
  ];

  return (
    <StyledUsersPage>
      <Title>Uživatelé</Title>
      <Wrapper>
        <SearchInput />
        <SelectInput options={optionValues} defaultValue={optionValues[0]} />
      </Wrapper>
      <UserList />
    </StyledUsersPage>
  );
};

export default UsersPage;

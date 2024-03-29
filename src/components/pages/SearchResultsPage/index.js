import React from "react";
import { useSelector } from "react-redux";

//styled components import
import StyledResultsPage from "./StyledResultsPage";
import Title from "./Title";
import Container from "./Container";
import Wrapper from "./Wrapper";

//components import
import SearchInput from "../../SearchInput";
import Tabs from "../../Tabs";
import BookList from "../../BookList";
import AuthorList from "../../AuthorList";
import UserList from "../../UserList";

const SearchResultsPage = () => {
  let content;
  const currentTab = useSelector(state => state.tabReducer);
  const tabs = ["Knihy", "Autoři", "Uživatelé"];

  switch (currentTab) {
    case 0:
      content = <BookList size="big" />;
      break;
    case 1:
      content = <AuthorList />;
      break;
    case 2:
      content = <UserList />;
      break;
    default:
      content = <BookList size="big" />;
      break;
  }

  return (
    <StyledResultsPage>
      <Title>Výsledky vyhledávání</Title>
      <Wrapper>
        <SearchInput />
      </Wrapper>
      <Container>
        <Tabs tabs={tabs} />
        {content}
      </Container>
    </StyledResultsPage>
  );
};

export default SearchResultsPage;

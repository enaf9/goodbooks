import React from "react";
import { Switch, Route } from "react-router-dom";

//styled components import
import StyledResultPage from "./StyledResultPage";
import Title from "./Title";
import Container from "./Container";
import Wrapper from "./Wrapper";

//components import
import SearchInput from "../../SearchInput";
import Tabs from "../../Tabs";
import BookList from "../../BookList";
import AuthorList from "../../AuthorList";
import UsersList from "../../UserList";

const SearchResultPage = () => {
  const tabs = [
    { name: "Knihy", to: "/results/books" },
    { name: "Autoři", to: "/results/authors" },
    { name: "Uživatelé", to: "/results/users" }
  ];

  return (
    <StyledResultPage>
      <Title>Výsledky vyhledávání</Title>
      <Wrapper>
        <SearchInput />
      </Wrapper>
      <Container>
        <Tabs tabs={tabs} />
        <Switch>
          <Route
            path="/results/books"
            render={props => <BookList size="big" />}
          />
          <Route path="/results/authors" component={AuthorList} />
          <Route path="/results/users" component={UsersList} />
        </Switch>
      </Container>
    </StyledResultPage>
  );
};

export default SearchResultPage;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "../../utils-styled-components/global";
import { ThemeProvider } from "styled-components";
import theme from "../../utils-styled-components/themes";

import { useSelector } from "react-redux";

//styled components imports
import Content from "./Content";
import Wrapper from "./Wrapper";

//components imports
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import MainPage from "../pages/MainPage/index";
import MenuOverlay from "../overlays/MenuOverlay/index";
import BooksPage from "../pages/BooksPage/index";
import BookPage from "../pages/BookPage/index";
import AuthorsPage from "../pages/AuthorsPage/index";
import UsersPage from "../pages/UsersPage/index";
import SearchResultsPage from "../pages/SearchResultsPage/index";
import AuthorPage from "../pages/AuthorPage/index";
import ProfilePage from "../pages/ProfilePage/index";
import SignInOverlay from "../overlays/SignInOverlay";

const App = () => {
  const isMenuOpen = useSelector(state => state.menuReducer);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {isMenuOpen ? <GlobalStyle noScroll /> : <GlobalStyle />}

        <Content>
          <Navbar />
          {isMenuOpen ? <MenuOverlay active /> : <MenuOverlay />}
          <Wrapper>
            <SignInOverlay />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/books" component={BooksPage} />
              <Route path="/authors" component={AuthorsPage} />
              <Route path="/users" component={UsersPage} />
              <Route path="/results" component={SearchResultsPage} />
              <Route path="/book/:id" component={BookPage} />
              <Route path="/author/:id" component={AuthorPage} />
              <Route path="/user/:id" component={ProfilePage} />
            </Switch>
          </Wrapper>
        </Content>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

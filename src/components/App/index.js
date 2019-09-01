import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "../../utils-styled-components/global";
import { ThemeProvider } from "styled-components";
import theme from "../../utils-styled-components/themes";

import { useSelector, useDispatch } from "react-redux";

//styled components imports
import Content from "./Content";
import Wrapper from "./Wrapper";
import LogoWrapper from "./LogoWrapper";

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
import AllBooksPage from "../pages/AllBooksPage/index";
import SignInPage from "../pages/SignInPage/index";
import SignUpPage from "../pages/SignUpPage/index";
import SignInOverlay from "../overlays/SignInOverlay";
import AdminPage from "../pages/AdminPage";

import { ReactComponent as Loading } from "../../images/loading-app.svg";

import { auth } from "../../firebase";

import { signIn, signOut, setStatus } from "../../store/actions/loggedActions";

const App = () => {
  const dispatch = useDispatch();
  const isloggedSetup = useSelector(state => state.loggedReducer.isLoggedSetup);

  const isMenuOpen = useSelector(state => state.menuReducer);

  auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      dispatch(signIn());
    } else {
      dispatch(signOut());
    }
    dispatch(setStatus());
  });

  const renderApp = () => {
    console.log(isloggedSetup);
    if (isloggedSetup) {
      return (
        <>
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
                <Route path="/my-profile" component={ProfilePage} />
                <Route
                  path="/all-books/:user/:section"
                  component={AllBooksPage}
                />
                <Route path="/login" component={SignInPage} />
                <Route path="/registration" component={SignUpPage} />
                <Route path="/admin" component={AdminPage} />
              </Switch>
            </Wrapper>
          </Content>
          <Footer />
        </>
      );
    } else {
      return (
        <LogoWrapper>
          <Loading />
        </LogoWrapper>
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {isMenuOpen ? <GlobalStyle noScroll /> : <GlobalStyle />}
        {renderApp()}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

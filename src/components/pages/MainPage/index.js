import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Media from "react-media";

//styled components imports
import StyledMainPage from "./StyledMainPage";
import Title from "./Title";
import QuoteAuthor from "./QuoteAuthor";
import Quote from "./Quote";
import Wrapper from "./Wrapper";
import LoadingWrapper from "./LoadingWrapper";

//components imports
import BookList from "./BookList/index";
import AuthorList from "./AuthorList/index";
import Banner from "./Banner/index";
import BookBanner from "./BookBanner";

import { getBooks } from "../../../store/actions/booksActions";
import { getFavoriteAuthors } from "../../../store/actions/authorsActions";
import { ReactComponent as Loading } from "../../../images/loading.svg";

const MainPage = () => {
  const dispatch = useDispatch();
  const [booksLoaded, setBooksLoaded] = useState(false);
  const [authorsLoaded, setAuthorsLoaded] = useState(false);
  const isLogged = useSelector(state => state.loggedReducer.isLogged);

  useEffect(() => {
    const getBooksAndDispatch = async () => {
      await dispatch(getBooks());
      setBooksLoaded(true);
    };

    const getFavoriteAuthorsAndDispatch = async () => {
      await dispatch(getFavoriteAuthors());
      setAuthorsLoaded(true);
    };

    getBooksAndDispatch();
    getFavoriteAuthorsAndDispatch();
  }, []);

  const renderBookList = () => {
    if (booksLoaded) {
      return <BookList />;
    } else {
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      );
    }
  };

  const renderAuthorList = () => {
    if (authorsLoaded) {
      return <AuthorList />;
    } else {
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      );
    }
  };

  const renderBanner = () => {
    console.log(isLogged);

    if (isLogged) {
      return (
        <Media query="(min-width: 1024px)">
          {matches =>
            matches ? <BookBanner areBooksLoaded={booksLoaded} /> : null
          }
        </Media>
      );
    } else {
      return <Banner />;
    }
  };

  return (
    <StyledMainPage>
      {renderBanner()}
      <Wrapper>
        <Title>nové knihy</Title>
        {renderBookList()}
        <Title>aktuálně populární knihy</Title>
        {renderBookList()}
        <Quote>
          „Knihy jsou pro lidi tím, čím jsou pro ptáky křídla.“
          <QuoteAuthor>- John Ruskin </QuoteAuthor>
        </Quote>
        <Title>oblíbení autoři</Title>
      </Wrapper>
    </StyledMainPage>
  );
};

export default MainPage;

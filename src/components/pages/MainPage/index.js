import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

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

import { db } from "../../../firebase";
import { addBook, getBooks } from "../../../store/actions/booksActions";
import { ReactComponent as Loading } from "../../../images/loading.svg";

const MainPage = () => {
  const dispatch = useDispatch();
  const [booksLoaded, setBooksLoaded] = useState(false);

  useEffect(() => {
    // const getBooks = async () => {
    //   const snapshot = await db.collection("books").get();
    //   const books = snapshot.docs;
    //   for (let book of books) {
    //     dispatch(addBook(book.data()));
    //   }
    //   setBooksLoaded(true);
    // };
    // getBooks();
    // dispatch(getBooks());
    // setBooksLoaded(true);
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

  return (
    <StyledMainPage>
      <Banner />
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
        <AuthorList />
      </Wrapper>
    </StyledMainPage>
  );
};

export default MainPage;

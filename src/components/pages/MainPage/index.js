import React from "react";

//styled components imports
import StyledMainPage from "./StyledMainPage";
import Title from "./Title";
import QuoteAuthor from "./QuoteAuthor";
import Quote from "./Quote";

//components imports
import BookList from "./BookList/index";
import AuthorList from "./AuthorList/index";
import Banner from "./Banner/index";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Banner />
      <Title>nové knihy</Title>
      <BookList />
      <Title>aktuálně populární knihy</Title>
      <BookList />
      <Quote>
        „Knihy jsou pro lidi tím, čím jsou pro ptáky křídla.“
        <QuoteAuthor>- John Ruskin </QuoteAuthor>
      </Quote>
      <Title>oblíbení autoři</Title>
      <AuthorList />
    </StyledMainPage>
  );
};

export default MainPage;

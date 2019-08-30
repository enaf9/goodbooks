import React from "react";
import { useSelector } from "react-redux";

import Rating from "../../../Rating";

//styled components imports
import Wrapper from "./Wrapper";
import Container from "./Container";
import Image from "./Image";
import Title from "./Title";
import Author from "./Author";
import Description from "./Description";

const BookBanner = props => {
  const book = useSelector(state => state.booksReducer[0]);

  const renderBook = () => {
    return props.areBooksLoaded ? (
      <Container>
        <Image src={book.coverImage} />
        <div>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
          <Description>
            S Hygge to nekončí. Zapojte se do revolučního tažení za štěstím!
            Autor světového bestselleru Hygge – Prostě šťastný způsob života
            přichází s dalšími.
          </Description>
          <Rating size="36" average="4.9" large />
        </div>
      </Container>
    ) : null;
  };
  return <Wrapper>{renderBook()}</Wrapper>;
};

export default BookBanner;

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
import StyledLink from "./StyledLink";

const BookBanner = props => {
  const book = useSelector(state => state.booksReducer.newBooks[0]);

  const renderBook = () => {
    return props.areBooksLoaded ? (
      <StyledLink to={`book/${book.id}`}>
        <Container>
          <Image src={book.coverImage} />
          <div>
            <Title>{book.title}</Title>
            <Author>{book.author.name}</Author>
            <Description>{book.bannerDescription}</Description>
            <Rating size="36" average={book.avgRating} large />
          </div>
        </Container>
      </StyledLink>
    ) : null;
  };
  return <Wrapper>{renderBook()}</Wrapper>;
};

export default BookBanner;

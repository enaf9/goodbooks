import React from "react";

//styled components imports
import StyledBookItem from "./StyledBookItem";
import Image from "./Image";
import Rating from "./Rating/index";
import Title from "./Title";
import Author from "./Author";
import Wrapper from "./Wrapper";

const BookItem = props => {
  return (
    <StyledBookItem to={`/book/${props.id}`}>
      <Wrapper>
        <Rating rating={props.rating} />
        <Image src={props.coverImage} />
      </Wrapper>
      <Title>{props.title}</Title>
      <Author>{props.author}</Author>
    </StyledBookItem>
  );
};

export default BookItem;

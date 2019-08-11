import React from "react";

//styled components imports
import StyledBookItem from "./StyledBookItem";
import Image from "./Image";
import Rating from "./Rating/index";
import Title from "./Title";
import Author from "./Author";
import Wrapper from "./Wrapper";

const BookItem = () => {
  return (
    <StyledBookItem>
      <Wrapper>
        <Rating />
        <Image src="https://www.databazeknih.cz/images_books/11_/114615/big_archiv-bourne-zare-cesta-kralu-iRU-114615.jpg" />
      </Wrapper>
      <Title>Cesta králů</Title>
      <Author>Brandon Sanderson</Author>
    </StyledBookItem>
  );
};

export default BookItem;

import React from "react";
import BookImage from "../../images/Books/Cesta_kralu.jpg";

//styled components imports
import StyledBookCard from "./StyledBookCard";
import Image from "./Image";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Text from "./Text";
import Info from "./Info";

//components imports
import Rating from "../Rating/index";

const BookCard = props => {
  return (
    <StyledBookCard big={props.big} to="/book/1">
      <Image src={BookImage} big={props.big} />
      <Info>
        <Title>Cesta Králů</Title>
        <Text>Brandon Sanderson</Text>
        <Text>2010</Text>
        <Wrapper>
          {props.big ? (
            <Rating size="16" big average="5" />
          ) : (
            <Rating size="16" small average="5" />
          )}
        </Wrapper>
      </Info>
    </StyledBookCard>
  );
};

export default BookCard;

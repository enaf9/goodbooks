import React from "react";

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
      <Image src={props.coverImage} big={props.big} />
      <Info>
        <Title>{props.title}</Title>
        <Text>{props.author}</Text>
        <Text>{props.releaseDate}</Text>
        <Wrapper>
          {props.big ? (
            <Rating size="16" big average={props.avgRating} />
          ) : (
            <Rating size="16" small average={props.avgRating} />
          )}
        </Wrapper>
      </Info>
    </StyledBookCard>
  );
};

export default BookCard;

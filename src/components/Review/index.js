import React from "react";

import BookItemBox from "../BookItemBox/index";
import Rating from "../Rating/index";
import ReviewRating from "./ReviewRating/index";

//styled components imports
import Wrapper from "./Wrapper";
import Container from "./Container";
import TimeText from "./TimeText";
import Title from "./Title";
import Text from "./Text";

const Review = () => {
  return (
    <Wrapper>
      <Container>
        <BookItemBox />
        <TimeText>před měsícem</TimeText>
      </Container>
      <Rating size="16px" />
      <Title>Trošku som tápal</Title>
      <Text>
        Na začátku knihy jsem trošičku tápal, ale pak se děj rozjel a závěr byl
        vynikající.
      </Text>
      <ReviewRating />
    </Wrapper>
  );
};

export default Review;

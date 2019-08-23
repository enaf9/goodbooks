import React from "react";

import BookItemBox from "../BookItemBox/index";
import Rating from "../Rating/index";

//styled components imports
import Wrapper from "./Wrapper";

const RatingCard = () => {
  return (
    <Wrapper>
      <BookItemBox />
      <Rating size="16px" />
    </Wrapper>
  );
};

export default RatingCard;

import React from "react";
import StarIcon from "../../../shared-stlyed-components/StarIcon";
import StyledRating from "./StyledRating";

const Rating = () => {
  return (
    <StyledRating>
      <StarIcon size="16" />
      <small>4.7</small>
    </StyledRating>
  );
};

export default Rating;

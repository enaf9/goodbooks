import React from "react";
import StarIcon from "../../../shared-styled-components/StarIcon";

//styled components imports
import StyledRating from "./StyledRating";

const Rating = props => {
  return (
    <StyledRating>
      <StarIcon size="16" fill={1} />
      <small>{props.rating}</small>
    </StyledRating>
  );
};

export default Rating;

import React from "react";
import StarIcon from "../../shared-styled-components/StarIcon";

//styled components imports
import StyledRating from "./StyledRating";
import RatingText from "./RatingText";

const Rating = props => {
  return (
    <StyledRating>
      <StarIcon size={props.size} />
      <StarIcon size={props.size} />
      <StarIcon size={props.size} />
      <StarIcon size={props.size} />
      <StarIcon size={props.size} />
      <RatingText
        size={props.large ? "large" : props.small ? "small" : "medium"}
        show={props.average}
      >
        {props.average}
      </RatingText>
      <RatingText
        size={props.large ? "large" : props.small ? "small" : "medium"}
        show={props.count}
        count
      >
        {"(" + props.count + ")"}
      </RatingText>
    </StyledRating>
  );
};

export default Rating;

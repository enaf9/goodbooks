import React from "react";
import StarIcon from "../../shared-styled-components/StarIcon";

//styled components imports
import StyledRating from "./StyledRating";
import RatingText from "./RatingText";

const Rating = props => {
  console.log(props.avg);
  return (
    <StyledRating>
      <StarIcon size={props.size} fill={1} />
      <StarIcon size={props.size} fill={props.average} />
      <StarIcon size={props.size} fill={props.average - 2} />
      <StarIcon size={props.size} fill={props.average - 3} />
      <StarIcon size={props.size} fill={props.average - 4} />
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

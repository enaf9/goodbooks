import React, { useState, useEffect } from "react";
import StarIcon from "../../shared-styled-components/StarIcon";

//styled components imports
import StyledRating from "./StyledRating";
import RatingText from "./RatingText";

const Rating = props => {
  const [fill, setFill] = useState(null);
  const [value, setValue] = useState(
    props.average ? props.average : props.value
  );
  useEffect(() => {
    if (props.average) {
      setValue(props.average);
    } else {
      setValue(props.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.average]);

  const handleMouseOver = e => {
    if (props.addForm || props.rating) {
      setFill(
        Math.floor(
          (e.clientX - e.target.offsetLeft) / (e.target.offsetWidth * 0.2) + 1
        )
      );
    }
  };
  const handleMouseOut = e => {
    setFill(null);
  };

  const handleClick = () => {
    if (props.addForm) {
      setValue(fill);
      props.sendRating(fill);
      return;
    } else if (props.rating) {
      props.sendRating(fill);
    }
  };

  return (
    <StyledRating>
      <div
        onMouseMove={handleMouseOver}
        onMouseLeave={handleMouseOut}
        onClick={handleClick}
      >
        <StarIcon size={props.size} fill={fill ? fill : value} />
        <StarIcon size={props.size} fill={fill ? fill - 1 : value - 1} />
        <StarIcon size={props.size} fill={fill ? fill - 2 : value - 2} />
        <StarIcon size={props.size} fill={fill ? fill - 3 : value - 3} />
        <StarIcon size={props.size} fill={fill ? fill - 4 : value - 4} />
      </div>
      {props.review ? null : (
        <RatingText
          size={props.large ? "large" : props.small ? "small" : "medium"}
          show={props.average}
        >
          {props.average}
        </RatingText>
      )}

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

import React, { useState } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Value from "./Value";
import ThumbsUpIcon from "./ThumbsUpIcon";
import ThumbsDownIcon from "./ThumbsDownIcon";
import IconWrapper from "./IconWrapper";

const ReviewRating = props => {
  const [value, setValue] = useState(props.likesCount);
  const [iconsCheck, setIconsCheck] = useState({
    thumbsUp: false,
    thumbsDown: false
  });

  const handleClick = e => {
    if (e.target.id === "thumbsUp") {
      iconsCheck.thumbsUp && !iconsCheck.thumbsDown
        ? setValue(value - 1)
        : iconsCheck.thumbsDown
        ? setValue(value + 2)
        : setValue(value + 1);
      setIconsCheck({
        thumbsDown: false,
        thumbsUp: !iconsCheck.thumbsUp
      });
    } else {
      iconsCheck.thumbsDown && !iconsCheck.thumbsUp
        ? setValue(value + 1)
        : iconsCheck.thumbsUp
        ? setValue(value - 2)
        : setValue(value - 1);
      setIconsCheck({
        thumbsUp: false,
        thumbsDown: !iconsCheck.thumbsDown
      });
    }
  };

  return (
    <Wrapper>
      <Value>{value}</Value>
      <IconWrapper id="thumbsUp" onClick={handleClick}>
        <ThumbsUpIcon active={iconsCheck.thumbsUp} />
      </IconWrapper>
      <IconWrapper id="thumbsDown" onClick={handleClick}>
        <ThumbsDownIcon active={iconsCheck.thumbsDown} />
      </IconWrapper>
    </Wrapper>
  );
};

export default ReviewRating;

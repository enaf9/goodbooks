import React, { useState, useEffect } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Value from "./Value";
import ThumbsUpIcon from "./ThumbsUpIcon";
import ThumbsDownIcon from "./ThumbsDownIcon";
import IconWrapper from "./IconWrapper";

const ReviewRating = () => {
  const [value, setValue] = useState(100);
  const [iconsCheck, setIconsCheck] = useState({
    thumbsUp: false,
    thumbsDown: false
  });

  const handleClick = (e, callback) => {
    if (e.target.id === "thumbsUp") {
      setIconsCheck({
        thumbsDown: false,
        thumbsUp: !iconsCheck.thumbsUp
      });
    } else {
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

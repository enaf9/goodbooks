import React, { useState } from "react";

//styled components imports
import HeartIcon from "../../../../../shared-styled-components/HeartIcon";
import BookmarkPlusIcon from "../../../../../shared-styled-components/BookmarkPlusIcon";
import BookIcon from "../../../../../shared-styled-components/BookIcon";
import CheckIcon from "../../../../../shared-styled-components/CheckIcon";
import IconWrapper from "./IconWrapper"; //added to get target id from icon click (svg/path problem)
import Wrapper from "./Wrapper";

const BookStatusBar = () => {
  const [iconsCheck, setIconsCheck] = useState({
    heartIcon: false,
    bookmarkIcon: false,
    bookIcon: false,
    checkIcon: false
  });

  const handleClick = e => {
    if (e.target.id === "heartIcon") {
      setIconsCheck({
        ...iconsCheck,
        [e.target.id]: !iconsCheck[e.target.id]
      });
    } else {
      setIconsCheck({
        ...iconsCheck,
        bookmarkIcon: false,
        bookIcon: false,
        checkIcon: false,
        [e.target.id]: !iconsCheck[e.target.id]
      });
    }
  };

  return (
    <Wrapper>
      <IconWrapper id="heartIcon" onClick={handleClick}>
        <HeartIcon checked={iconsCheck.heartIcon} />
      </IconWrapper>
      <IconWrapper id="bookmarkIcon" onClick={handleClick}>
        <BookmarkPlusIcon checked={iconsCheck.bookmarkIcon} />
      </IconWrapper>
      <IconWrapper id="bookIcon" onClick={handleClick}>
        <BookIcon checked={iconsCheck.bookIcon} />
      </IconWrapper>
      <IconWrapper id="checkIcon" onClick={handleClick}>
        <CheckIcon checked={iconsCheck.checkIcon} />
      </IconWrapper>
    </Wrapper>
  );
};

export default BookStatusBar;

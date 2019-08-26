import React, { useState } from "react";
import { useSelector } from "react-redux";

//styled components imports
import HeartIcon from "../../../../../shared-styled-components/HeartIcon";
import BookmarkPlusIcon from "../../../../../shared-styled-components/BookmarkPlusIcon";
import BookIcon from "../../../../../shared-styled-components/BookIcon";
import CheckIcon from "../../../../../shared-styled-components/CheckIcon";
import IconWrapper from "./IconWrapper"; //added to get target id from icon click (svg/path problem)
import Wrapper from "./Wrapper";

//components imports
import SignMessage from "../../../../pop-ups/SignMessage";

const BookStatusBar = () => {
  const [iconsCheck, setIconsCheck] = useState({
    heartIcon: false,
    bookmarkIcon: false,
    bookIcon: false,
    checkIcon: false
  });
  const [message, setMessage] = useState(null);
  const isLogged = useSelector(state => state.loggedReducer);

  const handleClick = e => {
    if (isLogged) {
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
    } else {
      console.log("X");
      setMessage(<SignMessage />);
    }
  };

  return (
    <>
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
      {message}
    </>
  );
};

export default BookStatusBar;

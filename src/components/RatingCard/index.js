import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { showPopUp } from "../../store/actions/deletePopUpActions";

import BookItemBox from "../BookItemBox/index";
import Rating from "../Rating/index";

//styled components imports
import Wrapper from "./Wrapper";
import DeleteIcon from "../../shared-styled-components/DeleteIcon";

//components imports
import DeletePopUp from "../pop-ups/DeletePopUp";

const RatingCard = () => {
  const [showClose] = useState(true);
  const showDeleteMessage = useSelector(state => state.deletePopUpReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showPopUp());
  };

  const renderDeleteIcon = () => {
    if (showClose) {
      return <DeleteIcon onClick={handleClick} />;
    }
  };

  return (
    <Wrapper>
      <BookItemBox data={{ id: 1 }} />
      <Rating size="16px" />
      {renderDeleteIcon()}
      {showDeleteMessage && <DeletePopUp />}
    </Wrapper>
  );
};

export default RatingCard;

import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { showPopUp } from "../../store/actions/deletePopUpActions";

import BookItemBox from "../BookItemBox/index";
import Rating from "../Rating/index";
import ReviewRating from "./ReviewRating/index";
import DeletePopUp from "../pop-ups/DeletePopUp";

//styled components imports
import Wrapper from "./Wrapper";
import Container from "./Container";
import TimeText from "./TimeText";
import Title from "./Title";
import Text from "./Text";
import DeleteIcon from "../../shared-styled-components/DeleteIcon";

const Review = () => {
  const [showClose, setShowClose] = useState(true);
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
      <Container>
        <BookItemBox />
        <TimeText>před měsícem</TimeText>
      </Container>
      <Rating size="16px" />
      <Title>Trošku som tápal</Title>
      <Text>
        Na začátku knihy jsem trošičku tápal, ale pak se děj rozjel a závěr byl
        vynikající.
      </Text>
      <ReviewRating review />
      {renderDeleteIcon()}
      {showDeleteMessage && <DeletePopUp />}
    </Wrapper>
  );
};

export default Review;

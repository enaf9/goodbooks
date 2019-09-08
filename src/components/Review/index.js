import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { showPopUp } from "../../store/actions/deletePopUpActions";

import BookItemBox from "../BookItemBox/index";
import UserItemBox from "../UserItemBox/index";
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
import { PowerInputDimensions } from "styled-icons/material/PowerInput/PowerInput";

const Review = props => {
  const [showClose] = useState(false);
  const [daysAgo, setDaysAgo] = useState(0);
  const showDeleteMessage = useSelector(state => state.deletePopUpReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const daysDifference = (new Date() - props.date) / (1000 * 3600 * 24);
    setDaysAgo(Math.round(daysDifference));
  }, []);

  const renderTimeText = () => {
    if (daysAgo === 0) {
      return "dnes";
    } else if (daysAgo > 25 && daysAgo < 35) {
      return "před měsícem";
    } else if (daysAgo > 35 && daysAgo < 365) {
      return "před méně než rokem";
    }
  };

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
        <UserItemBox
          data={{
            username: props.username,
            image: props.image,
            id: props.userId
          }}
        />
        <TimeText>{renderTimeText()}</TimeText>
      </Container>
      <Rating
        size="16px"
        average={props.rating}
        review={props.review ? true : false}
      />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <ReviewRating likesCount={props.likesCount} reviewId={props.reviewId} />
      {renderDeleteIcon()}
      {showDeleteMessage && <DeletePopUp />}
    </Wrapper>
  );
};

export default Review;

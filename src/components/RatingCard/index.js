import React, { useState } from "react";
import { db, auth } from "../../firebase";

import { useSelector, useDispatch } from "react-redux";
import { showPopUp } from "../../store/actions/deletePopUpActions";

import BookItemBox from "../BookItemBox/index";
import Rating from "../Rating/index";

//styled components imports
import Wrapper from "./Wrapper";
import DeleteIcon from "../../shared-styled-components/DeleteIcon";

//components imports
import DeletePopUp from "../pop-ups/DeletePopUp";

const RatingCard = props => {
  const [showClose] = useState(auth.currentUser.uid === props.userId);
  const showDeleteMessage = useSelector(state => state.deletePopUpReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showPopUp(props.id));
  };

  const deleteRating = async id => {
    const book = await db
      .collection("books")
      .doc(id)
      .get();

    const avgRating = book.data().avgRating;
    const ratingCount = book.data().ratingCount;

    const newRatingCount = ratingCount - 1;
    const newAvgRating = newRatingCount
      ? Math.round(
          ((avgRating * ratingCount - props.rating) / newRatingCount) * 10
        ) / 10
      : 0;

    db.collection("users")
      .doc(props.userId)
      .collection("ratings")
      .doc(id)
      .delete();

    db.collection("books")
      .doc(id)
      .update({
        avgRating: newAvgRating,
        ratingCount: newRatingCount
      });
  };

  const renderDeleteIcon = () => {
    if (showClose) {
      return <DeleteIcon onClick={handleClick} />;
    }
  };
  return (
    <Wrapper>
      <BookItemBox
        data={{
          id: props.id,
          coverImage: props.image,
          author: props.author,
          title: props.title
        }}
      />
      <Rating size="16px" value={props.rating} />
      {renderDeleteIcon()}
      {showDeleteMessage && <DeletePopUp delete={deleteRating} id={props.id} />}
    </Wrapper>
  );
};

export default RatingCard;

import React, { useState, useEffect } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Value from "./Value";
import ThumbsUpIcon from "./ThumbsUpIcon";
import ThumbsDownIcon from "./ThumbsDownIcon";
import IconWrapper from "./IconWrapper";

import InfoMessage from "../../pop-ups/InfoMessage/index";

import firebase, { auth, db } from "../../../firebase";

const ReviewRating = props => {
  const [value, setValue] = useState(props.likesCount);
  const [iconsCheck, setIconsCheck] = useState({
    thumbsUp: false,
    thumbsDown: false
  });
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const checkUserLikes = async () => {
      const snapshot = await db
        .collection("users")
        .doc(auth.currentUser.uid)
        .get();

      if (snapshot.data().likedReviews.includes(props.reviewId)) {
        setIconsCheck({ ...iconsCheck, thumbsUp: true });
      }

      if (snapshot.data().dislikedReviews.includes(props.reviewId)) {
        setIconsCheck({ ...iconsCheck, thumbsDown: true });
      }
    };

    checkUserLikes();
  }, []);

  const addToLikedReviews = () => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .update({
        ["likedReviews"]: firebase.firestore.FieldValue.arrayUnion(
          props.reviewId
        )
      });
  };

  const removeFromLikedReviews = () => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .update({
        ["likedReviews"]: firebase.firestore.FieldValue.arrayRemove(
          props.reviewId
        )
      });

    db.collection("books")
      .doc("A22KcXWnp9Lfb4WTBfyp")
      .collection("bookReviews")
      .doc(props.reviewId)
      .update({
        ["likesCount"]: firebase.firestore.FieldValue.increment(-1)
      });
  };

  const addToDislikedReviews = () => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .update({
        ["dislikedReviews"]: firebase.firestore.FieldValue.arrayUnion(
          props.reviewId
        )
      });
  };

  const removeFromDislikedReviews = () => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .update({
        ["dislikedReviews"]: firebase.firestore.FieldValue.arrayRemove(
          props.reviewId
        )
      });

    db.collection("books")
      .doc("A22KcXWnp9Lfb4WTBfyp")
      .collection("bookReviews")
      .doc(props.reviewId)
      .update({
        ["likesCount"]: firebase.firestore.FieldValue.increment(1)
      });
  };

  const handleClick = e => {
    if (auth.currentUser) {
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
        if (iconsCheck.thumbsUp === false) {
          addToLikedReviews();
          removeFromDislikedReviews();
        }
        if (iconsCheck.thumbsUp === true) {
          removeFromLikedReviews();
        }
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
        if (iconsCheck.thumbsDown === false) {
          addToDislikedReviews();
          removeFromLikedReviews();
        }
        if (iconsCheck.thumbsDown === true) {
          removeFromDislikedReviews();
        }
      }
    } else {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };

  return (
    <Wrapper>
      <Value>{value}</Value>
      <IconWrapper id="thumbsUp" onClick={handleClick}>
        <ThumbsUpIcon active={iconsCheck.thumbsUp} />
      </IconWrapper>
      {showMessage ? (
        <InfoMessage msg="Pro hodnocení recenze je potřeba být přihlášený." />
      ) : null}
      <IconWrapper id="thumbsDown" onClick={handleClick}>
        <ThumbsDownIcon active={iconsCheck.thumbsDown} />
      </IconWrapper>
    </Wrapper>
  );
};

export default ReviewRating;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase, { db } from "../../../../../firebase";

//styled components imports
import StyledForm from "./StyledForm";
import StyledInputField from "./StyledInputField";
import TextArea from "../../../../../shared-styled-components/TextArea";
import Wrapper from "./Wrapper";
import Button from "../../../../../shared-styled-components/Button";

//components imports
import Rating from "../../../../Rating/index";
import InfoMessage from "../../../../pop-ups/InfoMessage/index";

import { auth } from "../../../../../firebase";

const AddReviewForm = props => {
  const [avgRating, setAvgRating] = useState(props.avgRating);
  const [ratingCount, setRatingCount] = useState(props.ratingCount);
  const [review, setReview] = useState({ title: "", body: "", rating: 0 });
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const user = useSelector(state => state.loggedReducer);

  const handleChange = e => {
    setReview({
      ...review,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (auth.currentUser) {
      const alreadyRated = await db
        .collection("users")
        .doc(user.id)
        .collection("ratings")
        .where("bookTitle", "==", props.title)
        .where("author", "==", props.author)
        .get();

      const alreadyReviewed = await db
        .collection("users")
        .doc(user.id)
        .collection("userReviews")
        .doc(props.bookId)
        .get();

      if (!alreadyRated.docs.length && !alreadyReviewed.data()) {
        await db
          .collection("books")
          .doc(props.bookId)
          .collection("bookReviews")
          .add({
            date: firebase.firestore.Timestamp.now(),
            likesCount: 0,
            rating: review.rating,
            text: review.body,
            title: review.title,
            user: {
              id: user.id,
              image: user.image,
              username: user.username
            }
          });
        await db
          .collection("books")
          .doc(props.bookId)
          .update({
            avgRating:
              Math.round(
                ((avgRating * ratingCount + review.rating) /
                  (ratingCount + 1)) *
                  10
              ) / 10,
            ratingCount: ratingCount + 1
          });
        await db
          .collection("users")
          .doc(user.id)
          .collection("userReviews")
          .doc(props.bookId)
          .set({
            author: props.author,
            bookCoverImage: props.image,
            bookTitle: props.title,
            likesCount: 0,
            rating: review.rating,
            text: review.body,
            title: review.title
          });
      } else {
        setMessage(<InfoMessage msg="Kniha byla již ohodnocená." />);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      }
    } else {
      setMessage(
        <InfoMessage msg="Pro přidání recenze je potřeba být přihlášený." />
      );
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
    props.close();
  };

  const getRating = rating => setReview({ ...review, rating });

  return (
    <StyledForm isOpen={props.isOpen} onSubmit={handleSubmit}>
      <StyledInputField
        type="text"
        placeholder="Nadpis"
        name="title"
        value={review.title}
        onChange={handleChange}
      />
      <br />
      {showMessage ? message : null}
      <TextArea
        placeholder="Text recenze"
        value={review.body}
        name="body"
        onChange={handleChange}
      />
      <Wrapper>
        <Rating size="24" addForm sendRating={getRating} />
        <Button>Přidat</Button>
      </Wrapper>
    </StyledForm>
  );
};

export default AddReviewForm;

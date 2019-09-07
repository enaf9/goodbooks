import React, { useState, useEffect } from "react";

import Review from "../../../Review/index";

//styled components imports
import AddButton from "./AddButton";
import Wrapper from "./Wrapper";
import Message from "./Message";

//components imports
import SelectInput from "../../../SelectInput/index";
import AddReviewForm from "./AddReviewForm/index";

import { db } from "../../../../firebase";
const Reviews = props => {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewsLoaded, setReviewsLoaded] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      const snapshot = await db
        .collection("books")
        .doc(props.bookId)
        .collection("bookReviews")
        .get();
      const data = snapshot.docs.map(review => {
        return { ...review.data(), id: review.id };
      });
      setReviews(data);
      setReviewsLoaded(true);
    };

    getReviews();
  }, []);
  const handleClick = () => {
    setAddFormOpen(!addFormOpen);
  };
  return (
    <>
      <Wrapper>
        <AddButton onClick={handleClick}>PŘIDAT+</AddButton>
        <SelectInput />
      </Wrapper>
      <AddReviewForm isOpen={addFormOpen} />
      {reviewsLoaded ? (
        !reviews.length ? (
          <Message>Žádné recenze k zobrazení.</Message>
        ) : (
          reviews.map(review => {
            return (
              <Review
                review
                title={review.title}
                text={review.text}
                date={review.date.toDate()}
                rating={review.rating}
                username={review.user.username}
                image={review.user.image}
                likesCount={review.likesCount}
                userId={review.user.id}
              />
            );
          })
        )
      ) : null}
    </>
  );
};

export default Reviews;

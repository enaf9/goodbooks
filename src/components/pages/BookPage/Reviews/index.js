import React, { useState, useEffect } from "react";

import Review from "../../../Review/index";

//styled components imports
import AddButton from "./AddButton";
import Wrapper from "./Wrapper";
import Message from "./Message";
import LoadingWrapper from "./LoadingWrapper";

//components imports
import SelectInput from "../../../SelectInput/index";
import AddReviewForm from "./AddReviewForm/index";

import { db } from "../../../../firebase";
import { ReactComponent as Loading } from "../../../../images/loading.svg";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = () => {
    setAddFormOpen(!addFormOpen);
  };

  const closeForm = () => {
    setAddFormOpen(false);
  };
  return (
    <>
      <Wrapper>
        <AddButton onClick={handleClick}>PŘIDAT+</AddButton>
        <SelectInput />
      </Wrapper>
      <AddReviewForm
        isOpen={addFormOpen}
        bookId={props.bookId}
        author={props.author}
        image={props.image}
        title={props.title}
        avgRating={props.avgRating}
        ratingCount={props.ratingCount}
        close={closeForm}
      />
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
                reviewId={review.id}
                bookId={props.bookId}
              />
            );
          })
        )
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </>
  );
};

export default Reviews;

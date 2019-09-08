import React, { useState, useEffect } from "react";
import { db } from "../../../../firebase";

//styled components imports
import SelectInput from "../../../SelectInput/index";
import Wrapper from "./Wrapper";
import Content from "./Content";

//components imports
import Review from "../../../Review";

const ReviewList = props => {
  const [reviews, setReviews] = useState([]);
  const optionValues = [
    { value: "mostUsefull", label: "Nejužitečnejší" },
    { value: "newest", label: "Nejnovějších" },
    { value: "oldest", label: "Nejstarších" }
  ];

  useEffect(() => {
    const getReviews = async () => {
      let reviewsList = [];

      const snapshot = await db
        .collection("users")
        .doc(props.userId)
        .collection("userReviews")
        .get();
      snapshot.docs.map(doc => reviewsList.push({ ...doc.data(), id: doc.id }));
      setReviews(reviewsList);
    };
    if (props.userId) {
      getReviews();
    }
  }, [props.userId]);

  return (
    <>
      <Wrapper>
        <SelectInput options={optionValues} defaultValue={optionValues[0]} />
      </Wrapper>
      <Content>
        {reviews.map(review => (
          <Review
            bookId={review.id}
            image={review.bookCoverImage}
            author={review.author}
            bookTitle={review.bookTitle}
            rating={review.rating}
            title={review.title}
            text={review.text}
            likesCount={review.likesCount}
            userId={props.userId}
          />
        ))}
      </Content>
    </>
  );
};

export default ReviewList;

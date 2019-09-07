import React, { useState, useEffect } from "react";

import Review from "../../../Review/index";

//styled components imports
import AddButton from "./AddButton";
import Wrapper from "./Wrapper";

//components imports
import SelectInput from "../../../SelectInput/index";
import AddReviewForm from "./AddReviewForm/index";

import { db } from "../../../../firebase";
const Reviews = props => {
  const [addFormOpen, setAddFormOpen] = useState(false);

  useEffect(() => {
    const getBook = async () => {
      const snapshot = await db
        .collection("books")
        .doc(props.bookId)
        .collection("BookReviews")
        .get();
      console.log(snapshot.docs);
    };

    getBook();
  });
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
      <Review />
      <Review />
    </>
  );
};

export default Reviews;

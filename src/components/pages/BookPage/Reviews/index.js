import React, { useState } from "react";

import Review from "../../../Review/index";

//styled components imports
import AddButton from "./AddButton";
import Wrapper from "./Wrapper";

//components imports
import SelectInput from "../../../SelectInput/index";
import AddReviewForm from "./AddReviewForm/index";

const Reviews = () => {
  const [addFormOpen, setAddFormOpen] = useState(false);
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

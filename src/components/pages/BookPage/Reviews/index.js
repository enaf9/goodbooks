import React from "react";

import Review from "../../../Review/index";
import RatingCard from "../../../RatingCard/index";

//styled components imports
import AddButton from "./AddButton";
import SelectInput from "../../../SelectInput/index";

const Reviews = () => {
  return (
    <>
      <AddButton>PŘIDAT+</AddButton>
      <SelectInput />
      <Review />
      <RatingCard />
    </>
  );
};

export default Reviews;

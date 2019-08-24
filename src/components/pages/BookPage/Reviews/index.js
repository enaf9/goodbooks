import React from "react";

import Review from "../../../Review/index";

//styled components imports
import AddButton from "./AddButton";
import SelectInput from "../../../SelectInput/index";

const Reviews = () => {
  return (
    <>
      <AddButton>PŘIDAT+</AddButton>
      <SelectInput />
      <Review />
      <Review />
    </>
  );
};

export default Reviews;

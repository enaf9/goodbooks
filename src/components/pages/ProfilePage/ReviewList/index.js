import React from "react";

//styled components imports
import SelectInput from "../../../SelectInput/index";
import Wrapper from "./Wrapper";

const ReviewList = () => {
  const optionValues = [
    { value: "mostUsefull", label: "Nejužitečnejší" },
    { value: "newest", label: "Nejnovějších" },
    { value: "oldest", label: "Nejstarších" }
  ];
  return (
    <>
      <Wrapper>
        <SelectInput options={optionValues} defaultValue={optionValues[0]} />
      </Wrapper>
    </>
  );
};

export default ReviewList;

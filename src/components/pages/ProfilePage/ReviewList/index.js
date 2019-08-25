import React from "react";

//styled components imports
import SelectInput from "../../../SelectInput/index";
import Wrapper from "./Wrapper";
import Content from "./Content";

//components imports
import Review from "../../../Review";

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
      <Content>
        <Review />
        <Review />
        <Review />
        <Review />
      </Content>
    </>
  );
};

export default ReviewList;
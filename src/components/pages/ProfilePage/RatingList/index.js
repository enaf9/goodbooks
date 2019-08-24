import React from "react";

//styled components imports
import SelectInput from "../../../SelectInput/index";
import Wrapper from "./Wrapper";
import Content from "./Content";

//components imports
import RatingCard from "../../../RatingCard";

const RatingList = () => {
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
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </Content>
    </>
  );
};

export default RatingList;

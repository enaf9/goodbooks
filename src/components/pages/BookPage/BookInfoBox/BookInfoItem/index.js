import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import PropertyText from "./PropertyText";
import ValueText from "./ValueText";

const BookInfoItem = props => {
  return (
    <Wrapper>
      <PropertyText>{props.property}</PropertyText>
      <ValueText>{props.value}</ValueText>
    </Wrapper>
  );
};

export default BookInfoItem;

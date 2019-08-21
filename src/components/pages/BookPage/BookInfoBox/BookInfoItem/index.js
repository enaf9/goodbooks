import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import PropertyText from "./PropertyText";
import ValueText from "./ValueText";

const BookInfoItem = () => {
  return (
    <Wrapper>
      <PropertyText>Originální název</PropertyText>
      <ValueText>The Way of Kings</ValueText>
    </Wrapper>
  );
};

export default BookInfoItem;

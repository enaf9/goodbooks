import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import SectionName from "./SectionName";
import Text from "./Text";

//components imports
import BookList from "./BookList";

const BookSection = props => {
  return (
    <div>
      <Wrapper>
        <SectionName>{props.section}</SectionName>
        <Text>Zobraziť vše</Text>
      </Wrapper>
      <BookList />
    </div>
  );
};

export default BookSection;

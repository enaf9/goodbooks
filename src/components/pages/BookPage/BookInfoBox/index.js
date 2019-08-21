import React from "react";

//styled components imports
import Wrapper from "./Wrapper";

import BookInfoItem from "./BookInfoItem/index";

const BookInfoBox = () => {
  return (
    <Wrapper>
      <BookInfoItem />
      <BookInfoItem />
      <BookInfoItem />
    </Wrapper>
  );
};

export default BookInfoBox;

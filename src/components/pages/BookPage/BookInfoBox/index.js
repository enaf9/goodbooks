import React from "react";

//styled components imports
import Wrapper from "./Wrapper";

import BookInfoItem from "./BookInfoItem/index";

const BookInfoBox = () => {
  return (
    <Wrapper>
      <BookInfoItem property="Originální název:" value="They Way of Kings" />
      <BookInfoItem property="Počet stran:" value="912" />
      <BookInfoItem property="Překlad:" value="Milena Poláčková" />
      <BookInfoItem property="ISBN:" value="978-80-7197-427-7" />
    </Wrapper>
  );
};

export default BookInfoBox;

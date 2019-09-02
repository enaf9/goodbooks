import React from "react";

//styled components imports
import Wrapper from "./Wrapper";

import BookInfoItem from "./BookInfoItem/index";
import ReleasesInfo from "./ReleasesInfo";

const BookInfoBox = props => {
  return (
    <Wrapper>
      <BookInfoItem
        property="Originální název:"
        value={props.data.originalTitle}
      />
      <BookInfoItem property="Počet stran:" value={props.data.pages} />
      <BookInfoItem property="Překlad:" value={props.data.translator} />
      <BookInfoItem property="ISBN:" value={props.data.isbn} />
      <ReleasesInfo id={props.data.id} />
    </Wrapper>
  );
};

export default BookInfoBox;

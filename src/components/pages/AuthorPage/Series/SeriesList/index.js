import React from "react";

//styled components imports
import Wrapper from "./Wrapper";

//styled components imports
import BookList from "../../../../BookList";

const SeriesList = props => {
  return (
    <Wrapper isOpen={props.isOpen}>
      <BookList />
    </Wrapper>
  );
};

export default SeriesList;

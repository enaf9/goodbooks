import React from "react";

//styled components imports
import Wrapper from "./Wrapper";

//styled components imports
import BookList from "../../../../BookList";

const SeriesList = props => {
  console.log(props);
  return (
    <Wrapper isOpen={props.isOpen}>
      <BookList seriesId={props.id} />
    </Wrapper>
  );
};

export default SeriesList;

import React from "react";

//styled components imports
import Line from "./Line";
import StyledList from "./StyledList";

//components imports
import Release from "./Release/index";

const ReleasesList = props => {
  return (
    <StyledList isOpen={props.isOpen}>
      <Release />
      <Line />
      <Release />
      <Line />
      <Release />
    </StyledList>
  );
};

export default ReleasesList;

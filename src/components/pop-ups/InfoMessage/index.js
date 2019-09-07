import React from "react";

import StyledMessage from "./StyledMessage";

const InfoMessage = props => {
  return <StyledMessage>{props.msg}</StyledMessage>;
};

export default InfoMessage;

import React, { useState } from "react";

import BookItemBox from "../BookItemBox/index";
import Rating from "../Rating/index";

//styled components imports
import Wrapper from "./Wrapper";
import DeleteIcon from "../../shared-styled-components/DeleteIcon";

const RatingCard = () => {
  const [showClose, setShowClose] = useState(true);

  const renderDeleteIcon = () => {
    if (showClose) {
      return <DeleteIcon />;
    }
  };

  return (
    <Wrapper>
      <BookItemBox />
      <Rating size="16px" />
      {renderDeleteIcon()}
    </Wrapper>
  );
};

export default RatingCard;

import React from "react";

//stlyed components imports
import StyledAuthorItem from "./StyledAuthorItem";
import Image from "./Image";
import Name from "./Name";

const AuthorItem = props => {
  return (
    <StyledAuthorItem to={`author/${props.id}`}>
      <Image src={props.image} />
      <Name>{props.name}</Name>
    </StyledAuthorItem>
  );
};

export default AuthorItem;

import React from "react";

//stlyed components imports
import StyledUserCard from "./StyledUserCard";
import Image from "./Image";
import Name from "./Name";

const UserCard = props => {
  return (
    <StyledUserCard>
      <Image src={props.img} />
      <Name>{props.name}</Name>
    </StyledUserCard>
  );
};

export default UserCard;

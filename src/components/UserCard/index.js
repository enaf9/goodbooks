import React from "react";

//stlyed components imports
import StyledUserCard from "./StyledUserCard";
import Image from "./Image";
import Name from "./Name";

const UserCard = props => {
  return (
    <StyledUserCard center={props.center} big={props.big}>
      <Image src={props.img} big={props.big} />
      <Name big={props.big}>{props.name}</Name>
    </StyledUserCard>
  );
};

export default UserCard;

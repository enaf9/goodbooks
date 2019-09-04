import React from "react";

//stlyed components imports
import StyledUserCard from "./StyledUserCard";
import Image from "./Image";
import Name from "./Name";

const UserCard = props => {
  return (
    <StyledUserCard
      center={props.center}
      big={props.big}
      to={props.type === "users" ? `user/${props.id}` : `author/${props.id}`}
    >
      <Image src={props.image} big={props.big} />
      <Name big={props.big}>{props.name}</Name>
    </StyledUserCard>
  );
};

export default UserCard;

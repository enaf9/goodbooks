import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Image from "./Image";
import Name from "./Name";

const UserItemBox = props => {
  return (
    <Wrapper
      to={
        props.data.username
          ? "/user/" + props.data.id
          : "/author/" + props.data.id
      }
    >
      <Image src={props.data.image} />
      <div>
        <Name>{props.data.username || props.data.name}</Name>
      </div>
    </Wrapper>
  );
};

export default UserItemBox;

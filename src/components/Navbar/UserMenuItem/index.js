import React from "react";
import { useSelector } from "react-redux";

//styled components imports
import Wrapper from "./Wrapper";
import Image from "./Image";

const UserMenuItem = () => {
  const user = useSelector(state => state.loggedReducer);
  return (
    <Wrapper>
      <Image src={user.image} />
    </Wrapper>
  );
};

export default UserMenuItem;

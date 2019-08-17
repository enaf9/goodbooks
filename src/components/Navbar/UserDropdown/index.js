import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Username from "./Username";
import ArrowIcon from "../../../shared-styled-components/ArrowIcon";

const UserDropdown = props => {
  return (
    <Wrapper>
      <Username>{props.username}</Username>
      <ArrowIcon size="16" color="darkGrey" />
    </Wrapper>
  );
};

export default UserDropdown;

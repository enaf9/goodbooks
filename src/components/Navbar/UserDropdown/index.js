import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Username from "./Username";
import ArrowIcon from "../../../shared-styled-components/ArrowIcon";
import StyledLink from "./StyledLink";

const UserDropdown = props => {
  return (
    <Wrapper>
      <StyledLink to="/my-profile">
        <Username>{props.username}</Username>
      </StyledLink>
      <ArrowIcon size="16" color="darkGrey" />
    </Wrapper>
  );
};

export default UserDropdown;

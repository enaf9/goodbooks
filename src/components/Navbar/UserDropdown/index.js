import React, { useState } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Username from "./Username";
import ArrowIcon from "../../../shared-styled-components/ArrowIcon";
import StyledLink from "./StyledLink";

import DropDownMenu from "./DropDownMenu";

const UserDropdown = props => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const handleClick = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <Wrapper>
      <StyledLink to="/my-profile">
        <Username>{props.username}</Username>
      </StyledLink>
      <ArrowIcon size="16" color="darkGrey" onClick={handleClick} />
      {dropDownOpen && <DropDownMenu close={setDropDownOpen} />}
    </Wrapper>
  );
};

export default UserDropdown;

import React from "react";
import StyledNavLink from "./StyledNavLink";

//styled components imports
import StyledLink from "./StyledLink";

const NavLink = props => {
  return (
    <StyledNavLink>
      <StyledLink to={props.to}>{props.text}</StyledLink>
    </StyledNavLink>
  );
};

export default NavLink;

import React from "react";

//styled components imports
import StyledNavLink from "./StyledNavLink";
import StyledLink from "./StyledLink";

const NavLink = props => {
  return (
    <StyledNavLink>
      <StyledLink to={props.url}>{props.text}</StyledLink>
    </StyledNavLink>
  );
};

export default NavLink;

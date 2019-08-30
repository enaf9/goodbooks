import React from "react";

//styled components imports
import StyledNavLink from "./StyledNavLink";
import StyledLink from "./StyledLink";

const NavLink = props => {
  return (
    <StyledNavLink onClick={props.signOut}>
      <StyledLink to={props.url} onClick={props.showOverlay} id={props.id}>
        {props.text}
      </StyledLink>
    </StyledNavLink>
  );
};

export default NavLink;

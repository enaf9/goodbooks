import React from "react";
import { withRouter } from "react-router-dom";

//styled components imports
import StyledLink from "./StyledLink";
import StyledNavLink from "./StyledNavLink";

const NavLink = props => {
  return (
    <StyledNavLink>
      <StyledLink
        to={props.to}
        active={(props.location.pathname === props.to).toString()}
      >
        {props.text}
      </StyledLink>
    </StyledNavLink>
  );
};

export default withRouter(NavLink);

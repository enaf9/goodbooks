import React from "react";

//styled components import
import StyledNavLinks from "./StyledNavLinks";

import NavLink from "./NavLink/index";

const NavLinks = props => {
  return (
    <StyledNavLinks>
      <NavLink text="Knihy" to="/books" />
      <NavLink text="Autoři" to="/authors" />
      <NavLink text="Uživatelé" to="/users" />
      <NavLink text="Přihlášení" to="/login" />
      <NavLink text="Registrace" to="/registration" />
    </StyledNavLinks>
  );
};

export default NavLinks;

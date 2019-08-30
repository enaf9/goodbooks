import React from "react";
import { useSelector } from "react-redux";

//styled components import
import StyledNavLinks from "./StyledNavLinks";

import NavLink from "./NavLink/index";

const NavLinks = props => {
  const isLogged = useSelector(state => state.loggedReducer.isLogged);

  const renderNavLinks = () => {
    return isLogged ? (
      <>
        <NavLink text="Knihy" to="/books" />
        <NavLink text="Autoři" to="/authors" />
        <NavLink text="Uživatelé" to="/users" />
      </>
    ) : (
      <>
        <NavLink text="Knihy" to="/books" />
        <NavLink text="Autoři" to="/authors" />
        <NavLink text="Uživatelé" to="/users" />
        <NavLink text="Přihlášení" to="/login" />
        <NavLink text="Registrace" to="/registration" />
      </>
    );
  };

  return <StyledNavLinks>{renderNavLinks()}</StyledNavLinks>;
};

export default NavLinks;

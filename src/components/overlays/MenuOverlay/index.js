import React from "react";
import { useSelector } from "react-redux";

import NavLink from "./NavLink/index";

//styled components imports
import Wrapper from "./Wrapper";

const MenuOverlay = props => {
  const isActive = props.active ? true : false;
  const isLogged = useSelector(state => state.loggedReducer);

  return (
    <Wrapper active={isActive}>
      {isLogged ? (
        <>
          <NavLink text="Knihy" url="/books" />
          <NavLink text="Autoři" url="/authors" />
          <NavLink text="Uživatelé" url="/users" />
          <NavLink text="Můj Profil" url="/my-profile" />
          <NavLink text="Odhlášení" url="/logout" />
        </>
      ) : (
        <>
          <NavLink text="Knihy" url="/books" />
          <NavLink text="Autoři" url="/authors" />
          <NavLink text="Uživatelé" url="/users" />
          <NavLink text="Přihlášení" url="/login" />
          <NavLink text="Registrace" url="/registration" />
        </>
      )}
    </Wrapper>
  );
};

export default MenuOverlay;

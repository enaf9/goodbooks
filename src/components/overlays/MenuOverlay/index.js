import React from "react";

import NavLink from "./NavLink/index";

const MenuOverlay = () => {
  return (
    <>
      <NavLink text="Knihy" url="/books" />
      <NavLink text="Autoři" url="/authors" />
      <NavLink text="Uživatelé" url="/users" />
      <NavLink text="Přihlášení" url="/login" />
      <NavLink text="Registrace" url="/registration" />
    </>
  );
};

export default MenuOverlay;

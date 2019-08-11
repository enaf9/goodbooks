import React from "react";

//styled components imports
import StyledNavbar from "./StyledNavbar";
import StyledLogo from "./StyledLogo";
import SearchIcon from "./SearchIcon";

import MenuIcon from "./MenuIcon/index";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo />
      <SearchIcon />
      <MenuIcon />
    </StyledNavbar>
  );
};

export default Navbar;

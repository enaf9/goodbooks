import React from "react";

//styled components imports
import StyledNavbar from "./StyledNavbar";
import StyledLogo from "./StyledLogo";

import SearchBar from "./SearchBar/index";
import MenuIcon from "./MenuIcon/index";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo />
      <SearchBar />
      <MenuIcon />
    </StyledNavbar>
  );
};

export default Navbar;

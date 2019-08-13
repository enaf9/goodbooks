import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//styled components imports
import StyledNavbar from "./StyledNavbar";
import StyledLogo from "./StyledLogo";

import UserMenuItem from "./UserMenuItem/index";
import SearchBar from "./SearchBar/index";
import MenuIcon from "./MenuIcon/index";

const Navbar = () => {
  const isLogged = useSelector(state => state.loggedReducer);
  const isUserMenuItemHidden = useSelector(state => state.userMenuItemReducer);

  const renderUserMenuItem = () => {
    if (isUserMenuItemHidden) {
      return null;
    } else if (isLogged) {
      return (
        <Link to="/my-profile">
          <UserMenuItem />
        </Link>
      );
    } else {
      return null;
    }
  };

  return (
    <StyledNavbar
      isLogged={isLogged}
      isUserMenuItemHidden={isUserMenuItemHidden}
    >
      <Link to="/">
        <StyledLogo />
      </Link>
      {renderUserMenuItem()}
      <SearchBar />
      <MenuIcon />
    </StyledNavbar>
  );
};

export default Navbar;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Media from "react-media";

//styled components imports
import StyledNavbar from "./StyledNavbar";
import StyledLogo from "./StyledLogo";
import StyledLogoIcon from "./StyledLogoIcon";

import UserMenuItem from "./UserMenuItem/index";
import SearchBar from "./SearchBar/index";
import MenuIcon from "./MenuIcon/index";
import NavLinks from "./NavLinks/index";

const Navbar = () => {
  const isLogged = useSelector(state => state.loggedReducer);
  const isUserMenuItemHidden = useSelector(state => state.userMenuItemReducer);

  const renderNavLinks = () => {
    if (isUserMenuItemHidden) {
      return null;
    } else {
      return <NavLinks />;
    }
  };

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

  const renderLogo = desktop => {
    if (isUserMenuItemHidden && !desktop) {
      return <StyledLogoIcon />;
    } else {
      return <StyledLogo />;
    }
  };

  return (
    <Media query="(min-width: 960px)">
      {matches =>
        matches ? (
          <StyledNavbar
            isLogged={isLogged}
            isUserMenuItemHidden={isUserMenuItemHidden}
            desktop
          >
            <Link to="/">{renderLogo(true)}</Link>
            {renderNavLinks()}
            <SearchBar />
          </StyledNavbar>
        ) : (
          <StyledNavbar
            isLogged={isLogged}
            isUserMenuItemHidden={isUserMenuItemHidden}
          >
            <Link to="/">{renderLogo()}</Link>
            {renderUserMenuItem()}
            <SearchBar />
            <MenuIcon />
          </StyledNavbar>
        )
      }
    </Media>
  );
};

export default Navbar;

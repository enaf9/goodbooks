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
import UserDropdown from "./UserDropdown/index";

const Navbar = () => {
  const isLogged = useSelector(state => state.loggedReducer);
  const isMenuSearchBarReducer = useSelector(
    state => state.menuSearchBarReducer
  );

  const renderNavLinks = () => {
    if (isMenuSearchBarReducer) {
      return null;
    } else {
      return <NavLinks />;
    }
  };

  const renderUserMenuItem = () => {
    if (isMenuSearchBarReducer) {
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
    if (isMenuSearchBarReducer && !desktop) {
      return <StyledLogoIcon />;
    } else {
      return <StyledLogo />;
    }
  };

  const renderUser = () => {
    if (isLogged) {
      return (
        <>
          <UserMenuItem />
          <UserDropdown username="beachboy96" />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Media query="(min-width: 960px)">
      {matches =>
        matches ? (
          <StyledNavbar
            isLogged={isLogged}
            isMenuSearchBarReducer={isMenuSearchBarReducer}
            desktop
          >
            <Link to="/">{renderLogo(true)}</Link>
            {renderNavLinks()}
            <SearchBar />
            {renderUser()}
          </StyledNavbar>
        ) : (
          <StyledNavbar
            isLogged={isLogged}
            isMenuSearchBarReducer={isMenuSearchBarReducer}
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

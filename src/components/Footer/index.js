import React from "react";

//svg imports
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";

//styled components imports
import StyledFooter from "./StyledFooter";
import SmallText from "./SmallText";
import NavLinks from "./NavLinks";
import NavLink from "./NavLink";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SmallText>&copy;2019 goodbooks.cz</SmallText>
      </div>
      <NavLinks>
        <NavLink to="/books">Knihy</NavLink>
        <NavLink to="/authors">Autoři</NavLink>
        <NavLink to="/users">Uživatelé</NavLink>
      </NavLinks>
      <Wrapper>
        <a href="https://www.facebook.com" target="_blank">
          <Facebook />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <Instagram />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <Twitter />
        </a>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;

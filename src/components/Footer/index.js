import React from "react";

//svg imports
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";

//styled components imports
import StyledFooter from "./StyledFooter";
import SmallText from "./SmallText";
import Links from "./Links";
import NavLink from "./NavLink";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <SmallText>&copy;2019 goodbooks.cz</SmallText>
      <Links>
        <NavLink>Knihy</NavLink>
        <NavLink>Autoři</NavLink>
        <NavLink>Uživatelé</NavLink>
      </Links>
      <Wrapper>
        <Facebook />
        <Instagram />
        <Twitter />
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;

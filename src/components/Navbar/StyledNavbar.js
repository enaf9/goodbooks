import styled, { css } from "styled-components";

const desktop = css`
  @media (${props => props.theme.mediaQueries.tablet}) {
    margin: 0px 30px;
  }
  @media (min-width: 1240px) {
    margin: 0px auto;
  }

  max-width: 1180px;
`;

const StyledNavbar = styled.nav`
  height: 48px;
  vertical-align: middle;
  display: grid;
  grid-template-columns: ${props =>
    props.desktop
      ? props.isUserMenuItemHidden
        ? "209px auto"
        : props.isLogged
        ? "209px auto 24px"
        : "209px auto 24px"
      : props.isUserMenuItemHidden
      ? "76px auto 56px"
      : props.isLogged
      ? "209px auto 40px 56px"
      : "209px auto 56px"};
  align-items: center;
  ${props => (props.desktop ? desktop : "")};
`;

export default StyledNavbar;

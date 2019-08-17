import styled, { css } from "styled-components";

const desktop = css`
  @media (${props => props.theme.mediaQueries.tablet}) {
    margin: 0px 30px;
  }
  @media (min-width: 1240px) {
    margin: 0px auto;
    height: 56px;
  }

  max-width: 1180px;
`;

const StyledNavbar = styled.nav`
  height: 48px;
  vertical-align: middle;
  display: grid;
  grid-template-columns: ${props =>
    props.desktop
      ? props.isLogged && props.isMenuSearchBarReducer
        ? "1fr auto auto auto"
        : props.isLogged
        ? "209px 1fr 24px 54px auto;"
        : props.isMenuSearchBarReducer
        ? "209px auto"
        : "209px auto 24px"
      : props.isMenuSearchBarReducer
      ? "76px auto 56px"
      : props.isLogged
      ? "1fr auto 40px 56px"
      : "209px auto 56px"};
  align-items: center;
  ${props => (props.desktop ? desktop : "")};
`;

export default StyledNavbar;

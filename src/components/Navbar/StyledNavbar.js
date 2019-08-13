import styled from "styled-components";

const StyledNavbar = styled.nav`
  height: 48px;
  vertical-align: middle;
  display: grid;
  grid-template-columns: ${props =>
    props.isLogged ? "209px auto 40px 56px" : "209px auto 56px"};
  align-items: center;
`;

export default StyledNavbar;

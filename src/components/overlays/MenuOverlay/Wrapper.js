import styled, { css } from "styled-components";

const active = css`
  z-index: 2;
  height: 100vh;
  transition: height 0.5s ease-out;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 58px;
  height: 0vh;
  z-index: -2;
  width: 100%;
  background: ${props => props.theme.colors.background.lightGrey};
  transition: height 0.5s ease-out, z-index 0.7s ease-in;
  overflow: hidden;
  ${props => (props.active ? active : "")};
`;

export default Wrapper;

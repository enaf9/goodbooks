import styled, { css } from "styled-components";

const active = css`
  opacity: 1;
  height: 100vh;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 58px;
  height: 0vh;
  z-index: 2;
  width: 100%;
  background: ${props => props.theme.colors.background.lightGrey};
  transition: height 0.7s, opacity 0.5s;
  opacity: 0;
  ${props => (props.active ? active : "")};
`;

export default Wrapper;

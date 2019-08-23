import styled, { css } from "styled-components";

const isOpen = css`
  height: 100vh;

  @media (${props => props.theme.mediaQueries.tablet}) {
    height: auto;
    width: 475px;
    left: calc(100vw / 2 - 475px / 2);
    top: calc(100vh / 2 - 100% / 2);
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 0px;
  overflow: hidden;
  background: ${props => props.theme.colors.background.lightGrey};
  top: 0;
  left: 0;
  transition: height 0.7s ease-in-out;

  ${props => (props.isOpen ? isOpen : "")};
`;

export default StyledOverlay;

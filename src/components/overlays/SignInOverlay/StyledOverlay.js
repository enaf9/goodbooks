import styled, { css } from "styled-components";

const isOpen = css`
  height: 100vh;

  @media (${props => props.theme.mediaQueries.tablet}) {
    height: auto;
    width: 475px;
    left: calc((100vw - 475px) / 2);
    top: calc((100vh - 90%) / 2);
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 0px;
  overflow: hidden;
  background: ${props => props.theme.colors.background.lightGrey};
  top: 0;
  left: 0;
  transition: height 0.7s ease-in-out;
  z-index: 20;
  ${props => (props.isOpen ? isOpen : "")};
`;

export default StyledOverlay;

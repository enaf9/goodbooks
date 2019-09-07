import styled from "styled-components";

const StyledOverlay = styled.div`
  display: ${props => (props.isOpen ? "grid" : "none")};
  grid-row-gap: 20px;
  padding: 25px;
  width: 325px;
  height: auto;
  position: fixed;
  background: ${props => props.theme.colors.background.lightGrey};
  top: calc((100vh - 250px) / 2);
  left: calc((100vw - 325px) / 2);
  z-index: 10;
`;

export default StyledOverlay;

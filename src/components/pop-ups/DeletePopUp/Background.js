import styled from "styled-components";

const Wrapper = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.colors.background.shade};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export default Wrapper;

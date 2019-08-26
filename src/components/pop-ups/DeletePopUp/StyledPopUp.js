import styled from "styled-components";

const StyledPopUp = styled.div`
  position: fixed;
  padding: 15px 20px;
  width: 275px;
  background: ${props => props.theme.colors.background.lightGrey};
  top: calc((100vh - 91px) / 2);
  left: calc((100vw - 275px) / 2);
  z-index: 20;
`;

export default StyledPopUp;

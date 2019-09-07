import styled from "styled-components";

const StyledMessage = styled.div`
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 15px 0;
  min-width: 315px;
  background: ${props => props.theme.colors.background.lightGrey};
  color: ${props => props.theme.colors.text.darkGrey};
  opacity: 0.7;
  font-size: 14px;
`;

export default StyledMessage;

import styled from "styled-components";

const StyledButton = styled.button`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  color: ${props => props.theme.colors.text[props.color]};
  padding: 0;
  margin-left: 36px;
  cursor: pointer;
  border: none;
  background: none;
`;

export default StyledButton;

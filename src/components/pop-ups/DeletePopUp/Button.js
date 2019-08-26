import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: ${props => props.theme.colors.background.lightGrey};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  cursor: pointer;
`;

export default Button;

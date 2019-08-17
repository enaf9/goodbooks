import styled from "styled-components";

const Button = styled.button`
  width: 140px;
  height: 36px;
  border: none;
  border-radius: 18px;
  padding: 0 16px;
  color: ${props => props.theme.colors.background.lightGrey};
  background: ${props =>
    props.blue
      ? props.theme.colors.complementary.blue
      : props.theme.colors.main.lightRed};
  font-size: 16px;
  line-height: 19px;
`;

export default Button;

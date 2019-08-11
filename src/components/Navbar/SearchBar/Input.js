import styled, { css } from "styled-components";

const active = css`
  width: 100%;
  padding-left: 44px;
  opacity: 1;
`;

const Input = styled.input`
  height: 40px;
  width: 0%;
  background: ${props => props.theme.colors.background.lightGrey};
  border: none;
  opacity: 0;
  transition: width 0.7s ease;
  ${props => (props.active ? active : "")}
`;

export default Input;

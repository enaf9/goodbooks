import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: ${props => props.theme.colors.text.darkGrey};
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding: 0 16px;
  background-color: transparent;
`;

export default StyledSelect;

import styled from "styled-components";

const AddButton = styled.button`
  display: inline-block;
  width: 95px;
  height: 32px;
  font-family: "Hind", sans-serif;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 32px;
  color: ${props => props.theme.colors.background.lightGrey};
  background-color: ${props => props.theme.colors.main.lightRed};
  border: none;
  border-radius: 16px;
`;

export default AddButton;

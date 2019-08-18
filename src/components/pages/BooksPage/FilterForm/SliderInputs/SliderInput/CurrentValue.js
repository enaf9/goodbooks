import styled from "styled-components";

const CurrentValue = styled.small`
  display: block;
  color: ${props => props.theme.colors.text.darkGrey};
  text-align: center;
  width: 20px;
  margin-top: 5px;
  margin-left: ${props => props.left + "px"};
`;

export default CurrentValue;

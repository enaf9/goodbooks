import styled from "styled-components";

const StyledMessage = styled.div`
  text-align: center;
  margin: 15px 0 0;
  padding: 15px 0;
  min-width: 315px;
  background: ${props => props.theme.colors.background.white};
  font-size: 14px;
  grid-column: 1/3;
`;

export default StyledMessage;

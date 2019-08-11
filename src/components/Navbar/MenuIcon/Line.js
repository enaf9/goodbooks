import styled from "styled-components";

const Line = styled.div`
  width: 18px;
  height: 2px;
  border-radius: 1px;
  background: ${props => props.theme.colors.text.darkGrey};
  margin: ${props => (props.first ? "5px auto 4px" : "4px auto")};
`;

export default Line;

import styled from "styled-components";

const Line = styled.hr`
  border: 0.5px solid ${props => props.theme.colors.text.lightGrey};
  margin: 15px 0 10px;
`;

export default Line;

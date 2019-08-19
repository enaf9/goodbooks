import styled from "styled-components";

const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  line-height: ${props => props.theme.lineHeights.large};
  width: 220px;
`;

export default Name;

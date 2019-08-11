import styled from "styled-components";

const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  line-height: ${props => props.theme.lineHeights.large};
  margin: 0 0 20px;
  width: 280px;
  text-align: left;
`;

export default Text;

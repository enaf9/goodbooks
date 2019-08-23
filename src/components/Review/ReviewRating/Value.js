import styled from "styled-components";

const Value = styled.span`
  color: ${props => props.theme.colors.text.grey};
  font-size: ${props => props.theme.fontSizes.extraSmall};
  line-height: ${props => props.theme.lineHeights.extraSmall};
`;

export default Value;

import styled, { css } from "styled-components";

const big = css`
  font-size: ${props => props.theme.fontSizes.h3};
  line-height: ${props => props.theme.lineHeights.h3};
  width: 175px;
  margin-left: 5px;
`;
const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  line-height: ${props => props.theme.lineHeights.large};
  width: 150px;

  ${props => (props.big ? big : "")};
`;

export default Name;

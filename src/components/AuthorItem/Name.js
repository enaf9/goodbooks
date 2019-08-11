import styled from "styled-components";

const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  line-height: ${props => props.theme.lineHeights.large};
  margin: 12px auto 0;

  @media ${props => props.theme.mediaQueries.tablet} {
    margin-top: 15px;
  }
`;

export default Name;

import styled from "styled-components";

const AuthorName = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: ${props => props.theme.lineHeights.medium};
  margin-top: 7px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    font-size: ${props => props.theme.fontSizes.h3};
    line-height: ${props => props.theme.lineHeights.h3};
    margin-top: 20px;
  }
`;

export default AuthorName;

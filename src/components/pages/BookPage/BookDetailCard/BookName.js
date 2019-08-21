import styled from "styled-components";

const BookName = styled.h3`
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: 500;

  @media (${props => props.theme.mediaQueries.tablet}) {
    font-size: ${props => props.theme.fontSizes.h1};
    line-height: ${props => props.theme.lineHeights.h1};
  }
`;

export default BookName;

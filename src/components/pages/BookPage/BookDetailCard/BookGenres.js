import styled from "styled-components";

const BookGenres = styled.small`
  display: block;
  margin-top: 16px;
  color: ${props => props.theme.colors.text.darkGrey};

  @media (${props => props.theme.mediaQueries.tablet}) {
    margin-top: 20px;
    font-size: ${props => props.theme.fontSizes.medium};
    line-height: ${props => props.theme.lineHeights.medium};
  }
`;

export default BookGenres;

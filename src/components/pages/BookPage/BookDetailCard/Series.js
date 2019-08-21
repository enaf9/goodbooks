import styled from "styled-components";

const Series = styled.small`
  display: block;
  margin-top: 5px;
  margin-bottom: 35px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    margin-bottom: 145px;
    font-size: ${props => props.theme.fontSizes.medium};
    line-height: ${props => props.theme.lineHeights.medium};
  }
`;

export default Series;

import styled from "styled-components";

const FilterTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: bold;
  margin: 16px 0;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-column: 1/3;
  }
`;

export default FilterTitle;

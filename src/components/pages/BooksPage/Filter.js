import styled from "styled-components";

const Filter = styled.div`
  margin-top: 16px;
  width: 309px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 10px;
  align-items: center;

  @media (${props => props.theme.mediaQueries.tablet}) {
    width: 319px;
    margin: 0;
  }
`;

export default Filter;

import styled from "styled-components";

const Filter = styled.div`
  margin-top: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 24px;
  grid-column-gap: 10px;
  align-items: center;

  @media (${props => props.theme.mediaQueries.tablet}) {
    width: 315px;
    margin: 0;
  }
`;

export default Filter;

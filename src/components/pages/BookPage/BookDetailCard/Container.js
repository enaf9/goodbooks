import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 130px auto;
  grid-column-gap: 10px;
  margin: 0 -5px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 270px auto;
    grid-column-gap: 50px;
  }
`;

export default Container;

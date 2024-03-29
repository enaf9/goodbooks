import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(${props => props.length}, auto);
  justify-content: center;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-column-gap: 42px;
  }
`;

export default Wrapper;

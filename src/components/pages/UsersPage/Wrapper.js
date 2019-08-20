import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;
  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 315px 275px;
    justify-content: center;
  }
`;

export default Wrapper;

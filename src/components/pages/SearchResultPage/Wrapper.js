import styled from "styled-components";

const Wrapper = styled.div`
  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: 315px 1fr;
  }
`;

export default Wrapper;

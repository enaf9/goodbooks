import styled from "styled-components";

const Wrapper = styled.div`
  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: 315px 319px;
    grid-row-gap: 16px;
    justify-content: space-between;
  }
`;

export default Wrapper;

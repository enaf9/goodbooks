import styled from "styled-components";

const Wrapper = styled.div`
  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 340px);
    grid-row-gap: 16px;
    justify-content: space-between;
  }
  @media (${props => props.theme.mediaQueries.desktop}) {
    grid-template-columns: 1fr auto;
  }
`;

export default Wrapper;

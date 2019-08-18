import styled from "styled-components";

const Content = styled.div`
  @media (${props => props.theme.mediaQueries.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 80px;
    max-width: 726px;
    margin: 0 79px;
  }
  @media (${props => props.theme.mediaQueries.desktop}) {
    grid-column-gap: 100px;
  }
`;

export default Content;

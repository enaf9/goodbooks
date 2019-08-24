import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-row-gap: 20px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: 355px 355px;
    grid-column-gap: 54px;
    justify-content: center;
  }
`;

export default Content;

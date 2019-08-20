import styled from "styled-components";

const Content = styled.div`
  position: relative;
  min-height: calc(100vh - 275px);
  @media (${props => props.theme.mediaQueries.tablet}) {
    min-height: calc(100vh - 177px);
  }
`;

export default Content;

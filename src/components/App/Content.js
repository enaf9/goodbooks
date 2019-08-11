import styled from "styled-components";

const Content = styled.div`
  min-height: calc(100vh - 235px);
  @media (${props => props.theme.mediaQueries.tablet}) {
    min-height: calc(100vh - 137px);
  }
`;

export default Content;

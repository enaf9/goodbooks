import styled from "styled-components";

const Title = styled.h1`
  max-width: 195px;
  @media (${props => props.theme.mediaQueries.tablet}) {
    max-width: 100%;
  }
`;

export default Title;

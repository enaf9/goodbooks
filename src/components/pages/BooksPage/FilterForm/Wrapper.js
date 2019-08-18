import styled from "styled-components";

const StyledForm = styled.div`
  @media (${props => props.theme.mediaQueries.tablet}) {
    min-width: 240px;
  }
  @media (${props => props.theme.mediaQueries.desktop}) {
    min-width: 260px;
  }
`;

export default StyledForm;

import styled from "styled-components";

const StyledMainPage = styled.div`
  padding-top: 20px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    padding-top: 0px;
  }
`;

export default StyledMainPage;

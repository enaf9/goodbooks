import styled from "styled-components";

const StyledAuthorItem = styled.div`
  width: 125px;
  text-align: center;
  @media (${props => props.theme.mediaQueries.tablet}) {
    width: 150px;
  }
`;

export default StyledAuthorItem;

import styled from "styled-components";

const StyledAuthorList = styled.div`
  margin: 30px auto 0;
  display: grid;
  grid-row-gap: 20px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: repeat(auto-fill, 290px);
    justify-content: space-between;
  }
`;

export default StyledAuthorList;

import styled from "styled-components";

const StyledBookList = styled.div`
  margin: 20px 0;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 40px;
  grid-auto-flow: column;

  @media (${props => props.theme.mediaQueries.desktop}) {
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, 150px);
    justify-content: space-between;
  }
`;

export default StyledBookList;

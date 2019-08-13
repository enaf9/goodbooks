import styled from "styled-components";

const StyledBookList = styled.div`
  margin: 20px -30px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 15px;

  @media (${props => props.theme.mediaQueries.desktop}) {
    margin-right: 140px;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-flow: column dense;
    justify-content: space-between;
  }
`;

export default StyledBookList;

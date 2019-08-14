import styled from "styled-components";

const StyledBookList = styled.div`
  margin: 20px 0;
  width: calc(100% + 30px);
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 40px;
  grid-auto-flow: column;
  overflow: hidden;
  overflow-x: scroll;
  padding-bottom: 10px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    width: calc(100% + 70px);
  }

  @media (${props => props.theme.mediaQueries.desktop}) {
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, 150px);
    justify-content: space-between;
  }
`;

export default StyledBookList;

import styled from "styled-components";

const StyleBookList = styled.div`
  margin: 30px auto 0;
  display: grid;
  grid-row-gap: 20px;

  @media (${props => props.theme.mediaQueries.tablet}) {
    grid-template-columns: ${props =>
      props.big ? "repeat(auto-fill, 340px)" : "repeat(auto-fill, 290px)"};
    justify-content: space-between;
  }
`;

export default StyleBookList;

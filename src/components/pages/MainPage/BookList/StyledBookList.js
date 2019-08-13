import styled from "styled-components";

const StyledBookList = styled.div`
  margin: 20px -30px;
  display: flex;
  > * {
    margin-left: 15px;
  }

  @media (${props => props.theme.mediaQueries.desktop}) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
  }
`;

export default StyledBookList;

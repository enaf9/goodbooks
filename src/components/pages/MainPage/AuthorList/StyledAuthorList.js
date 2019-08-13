import styled from "styled-components";

const StyledAuthorList = styled.div`
  margin: 20px -15px;
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

export default StyledAuthorList;
